import { ChatForm } from "../chatForm/chatForm.index"
import { ChatBody } from "../chatBody/chatBody.index"
import { ChatHeader } from "../chatHeader/chatHeader.index"

export type ChatsActiveChatType = {
  header: ChatHeader;
  dialog: ChatBody;
  form: ChatForm;
};
