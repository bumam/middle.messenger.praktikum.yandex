import Block from "../../block/block"
import template from "./chatsDialog.tmpl"
import { ChatsDialogType } from "./chatsDialog.type"

export class ChatsDialog extends Block<ChatsDialogType> {
  constructor(props: ChatsDialogType) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
