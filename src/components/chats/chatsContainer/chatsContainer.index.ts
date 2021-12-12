import Block from "../../block/block"
import template from "./chatsContainer.tmpl"
import { ChatsContainerType } from "./chatsContainer.type"
import { ChatsData } from "../chatsData/chatsData.index"

export class ChatsContainer extends Block<ChatsContainerType> {
  constructor(
    props: ChatsContainerType = {
      data: new ChatsData(),
    }
  ) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
