import Block from "../../block/block"
import template from "./chatBody.tmlp"
import { ChatBodyType } from "./chatBody.type"
import { ChatsMessage } from "../chatsMessage/chatsMessage.index"

export class ChatBody extends Block<ChatBodyType> {
  constructor(
    props: ChatBodyType = {
      chatDate: "Вчера",
      messages: [
        new ChatsMessage({
          type: "current-chat__message--in",
          text: "Привет!",
          time: "12:23",
        }),
        new ChatsMessage({
          type: "current-chat__message--in",
          text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
          time: "12:23",
        }),
        new ChatsMessage({
          type: "current-chat__message--out",
          text: "Вау",
          time: "15:13",
        }),
      ],
    }
  ) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
