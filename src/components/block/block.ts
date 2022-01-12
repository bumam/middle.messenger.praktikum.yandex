import { v4 as makeUUID } from "uuid";
import EventBus from "../eventBus/eventBus";
import isEqual from "../../utils/isEqual";
import { render } from "pug";
import { BlockProps } from "./block.type.";

export default abstract class Block<T extends BlockProps> {
  private static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _element: HTMLElement | null;

  private _meta: Record<string, unknown>;

  props: T;

  delay = 200;

  private _timeoutId: undefined | ReturnType<typeof setTimeout>;

  eventBus: () => EventBus;

  private _id: string;

  constructor(props?: T, tagName = "div", selector: string | null = null) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
      selector,
    };
    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, _id: this._id });

    this.eventBus = () => eventBus;

    this._timeoutId = undefined;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName as string);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this._addEvents();
    this.componentDidMount();
  }

  componentDidMount() {
    return;
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (!isEqual(oldProps, newProps)) {
      if (this._timeoutId) return;

      this._timeoutId = setTimeout(() => {
        this._removeEvents();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        // @ts-ignore
        clearTimeout(this._timeoutId);
      }, this.delay);
    }
  }

  componentDidUpdate() {
    return;
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  // @ts-ignore
  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    const { selector } = this._meta;

    if (selector) {
      const rootNode = document.querySelector(selector as string);
      if (rootNode) {
        rootNode.innerHTML = "";
        rootNode.append(block);
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      }
      return;
    }

    if (this._element?.firstChild && block.firstChild) {
      if (this._element.parentNode) {
        this._element.parentNode.replaceChild(block, this._element);
        this._element = block;
      }
    } else {
      this._element = block;
    }
    this._element?.setAttribute("data-id", this._id);

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  render(): HTMLElement {
    return this._element as HTMLElement;
  }

  getContent() {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: any) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop: string, value: unknown) => {
        const oldTarget = { ...target };
        // @ts-ignore
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show(style = "block") {
    this.getContent().style.display = style;
  }

  hide() {
    this.getContent().style.display = "none";
  }

  remove() {
    this.getContent().remove();
  }

  private _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach(
      (eventName: keyof GlobalEventHandlersEventMap) => {
        this._element?.addEventListener(
          eventName,
          events[eventName] as (e: Event) => void
        );
      }
    );
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(
      (eventName: keyof GlobalEventHandlersEventMap) => {
        this._element?.removeEventListener(
          eventName,
          events[eventName] as (e: Event) => void
        );
      }
    );
  }

  getId() {
    return this._id;
  }

  compile(tmpl: string, props: Record<string, any>): HTMLElement {
    const newProps: Record<string, any> = {};

    for (const key in props) {
      if (props[key] instanceof Block) {
        newProps[key] = `<div data-id-${props[key].getId()}></div>`;
      } else if (Array.isArray(props[key])) {
        Object.values(props[key]).forEach((_, index) => {
          newProps[key] = [
            ...(newProps[key] ? newProps[key] : []),
            `<div data-id-${props[key][index].getId()}>2</div>`,
          ].join("");
        });
      } else {
        newProps[key] = props[key];
      }
    }
    const template = render(tmpl, newProps);
    const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", template);

    for (const key in newProps) {
      if (props[key] instanceof Block) {
        const el = element.querySelector(`[data-id-${props[key].getId()}]`);
        if (el?.parentNode) {
          el.parentNode.replaceChild(props[key].getContent(), el);
        }
      } else if (Array.isArray(props[key])) {
        Object.values(props[key]).forEach((_, index) => {
          const el = element.querySelector(
            `[data-id-${props[key][index].getId()}]`
          );
          if (el?.parentNode) {
            el.parentNode.replaceChild(props[key][index].getContent(), el);
          }
        });
      }
    }

    return element.firstChild as HTMLElement;
  }
}
