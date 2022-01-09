import template from "./errorPage.tmpl";
import { ErrorType } from "./error.type";
import Block from "../block/block";

export default class ErrorPage404 extends Block<ErrorType> {
  public template: string = template;

  constructor(
    props: any = {
      errorCode: "404",
      errorText: "Что-то пошло не так",

      showMenu: false,
    }
  ) {
    super(props, "div", "#root");
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
