import Block from "../block/block"
import template from "./button.tmpl"
import { ButtonType } from "./button.type"

export class Button extends Block<ButtonType> {
  constructor(props: ButtonType) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
