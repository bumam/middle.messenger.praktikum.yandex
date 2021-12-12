import Block from "../../block/block"
import template from "./chatHeader.tmpl"
import { ChatHeaderType } from "./chatHeader.type"
import { MenuButton } from "../../menuButton/menuButton.index"

export class ChatHeader extends Block<ChatHeaderType> {
  constructor(
    props: ChatHeaderType = {
      activeChatCompanion: "Денис",
      menuBtn: new MenuButton({
        events: {
          click: () => this.toggleMenu(),
        },
      }),

      showMenu: false,
    }
  ) {
    super(props)
  }

  toggleMenu(): void {
    this.props.showMenu = !this.props.showMenu
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
