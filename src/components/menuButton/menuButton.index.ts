import Block from "../block/block"
import template from "./menuButton.tmpl"
import { MenuButtonType } from "./menuButton.type"

export class MenuButton extends Block<MenuButtonType> {
  constructor(props: MenuButtonType) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
