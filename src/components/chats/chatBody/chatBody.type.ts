import { ChatsMessage } from "../chatsMessage/chatsMessage.index"

export type ChatBodyType = {
  messages: ChatsMessage[];
  chatDate: string;
};
