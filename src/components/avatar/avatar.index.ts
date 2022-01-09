import { AvatarType } from "./avatar.type"
import Block from "../block/block"
import template from "./avatar.tmpl"

export class Avatar extends Block<AvatarType> {
  constructor(
    props: AvatarType = {
      showModal: false,
      title: "Загрузите файл",
    }
  ) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
