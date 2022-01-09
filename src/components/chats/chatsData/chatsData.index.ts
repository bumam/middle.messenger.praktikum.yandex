import Block from "../../block/block"
import template from "./chatsData.tmpl"
import { ChatsDataType } from "./chatsDatat.type"
import { ChatsDialog } from "../chatsDialog/chatsDialog.index"
import { ChatsActiveChat } from "../chatsActiveChat/chatsActiveChat.index"

export class ChatsData extends Block<ChatsDataType> {
  constructor(
    props: ChatsDataType = {
      user: "Андрей",
      displayUser: true,

      activeChat: true,
      activeChatContent: new ChatsActiveChat(),

      search: false,
      searchResult: "Киноклуб",
      searchText: "Кино",

      chatSettings: false,
      chatOptions: false,

      dialogs: [
        new ChatsDialog({
          from: "Юля",
          content: "Изображение",
          time: "10:00",
          unreadCount: 2,
          answer: "",
        }),
        new ChatsDialog({
          from: "Киноклуб",
          content: "Привет! Сколько лет сколько зим",
          time: "Пн",
          unreadCount: 10,
          answer: "",
        }),
        new ChatsDialog({
          from: "Саня",
          content: "",
          time: "15:40",
          unreadCount: 0,
          answer: "круто",
        }),
      ],
    }
  ) {
    super(props, "div", "#root")
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
