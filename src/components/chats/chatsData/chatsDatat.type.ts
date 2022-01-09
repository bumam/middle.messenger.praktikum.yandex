import { ChatsDialog } from "../chatsDialog/chatsDialog.index"
import { ChatsActiveChat } from "../chatsActiveChat/chatsActiveChat.index"

export type ChatsDataType = {
  user: string;
  displayUser: boolean;

  activeChat: boolean;
  activeChatContent: ChatsActiveChat;

  search: boolean;
  searchResult: string;
  searchText: string;

  chatSettings: boolean;
  chatOptions: boolean;

  dialogs: ChatsDialog[];
};
