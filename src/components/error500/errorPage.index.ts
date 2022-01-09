import template from "./errorPage.tmpl";
import { ErrorType } from "./error.type";
import Block from "../block/block";

export default class ErrorPage500 extends Block<ErrorType> {
  public template: string = template;

  constructor(
    props: any = {
      errorCode: "500",
      errorText: "Мы уже фиксим",

      showMenu: false,
    }
  ) {
    super(props, "div", "#root");
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
