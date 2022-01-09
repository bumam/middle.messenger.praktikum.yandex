import template from "./input.tmpl"
import { InputType } from "./input.type"
import Block from "../block/block"

export default class Input extends Block<InputType> {
  constructor(props) {
    super({
      ...props,
      errorText: "",
      isValid: true,
      inputValue: "",
    })
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
