import Block from "../../block/block"
import template from "./chatsActiveChat.tmpl"
import { ChatHeader } from "../chatHeader/chatHeader.index"
import { ChatBody } from "../chatBody/chatBody.index"
import { ChatForm } from "../chatForm/chatForm.index"
import { ChatsActiveChatType } from "./chatsActiveChat.type"

export class ChatsActiveChat extends Block<ChatsActiveChatType> {
  constructor(
    props: ChatsActiveChatType = {
      header: new ChatHeader(),
      dialog: new ChatBody(),
      form: new ChatForm(),
    }
  ) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
