import pug from "pug";
import chatTemplate from "./chats.tmpl";

const chat = pug.compile(chatTemplate);
const data = {
  user: "Андрей",
  dsplayUser: true,

  activeChat: true,
  chatDate: "Вчера",
  activeChatContent: [
    {
      type: "current-chat__message--in",
      text: `Привет!`,
      time: "12:23",
    },
    {
      type: "current-chat__message--in",
      text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
      time: "12:23",
    },
    {
      type: "current-chat__message--out",
      text: `Вау`,
      time: "15:13",
    },
  ],
  activeChatCompanion: "Денис",
  chatInput: {
    type: "text",
    name: "message",
  },

  emptyChatText: "Выберите чат чтобы отправить сообщение",

  search: false,
  searchResult: "Киноклуб",
  searchText: "Кино",

  chatSettings: false,
  chatoptions: false,

  dialogs: [
    {
      from: "Юля",
      content: "Изображение",
      time: "10:00",
      unreadCount: 2,
      answer: "",
    },
    {
      from: "Киноклуб",
      content: "Привет! Сколько лет сколько зим",
      time: "Пн",
      unreadCount: 10,
      answer: "",
    },
    {
      from: "Саня",
      content: "",
      time: "15:40",
      unreadCount: 0,
      answer: "круто",
    },
  ],
};

export default chat(data);
