import Block from "../../block/block"
import template from "./chatsMessage.tmpl"
import { ChatsMessageType } from "./chatsMessage.type"

export class ChatsMessage extends Block<ChatsMessageType> {
  constructor(props: ChatsMessageType) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
