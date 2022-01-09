import Block from "../../block/block"
import template from "./chatForm.tmpl"
import { MenuButton } from "../../menuButton/menuButton.index"

export class ChatForm extends Block<any> {
  constructor(
    props = {
      menuBtn: new MenuButton({
        events: {
          click: () => this.toggleMenu(),
        },
      }),
      events: {
        submit: (event: Event) => this.onSubmit(event),
      },
      showMenu: false,
    }
  ) {
    super(props)
  }

  toggleMenu(): void {
    this.props.showMenu = !this.props.showMenu
  }

  onSubmit(event: Event) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const form = {
      message: formData.get("message"),
    }

    const { message } = form

    if (!message || (typeof message === "string" && !message.trim().length))
      return

    console.log(message)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
