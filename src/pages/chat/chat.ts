import { Block, registerComponent } from "core";
import { chatsAPI } from "utils/api/ChatApi";
import { ChatFooter } from "../../components/chat/__footer/chat-footer";
import { ChatListUsers } from "../../components/chat/__list-users/chat-list-users";
import { ChatProfile } from "../../components/chat/__profile/chat-profile";
import { NotFoundChat } from "../../components/chat/__not-found-сhat/not-found-сhat";
import Preloader from "../../components/preloader/preloader";

import "./chat.css";

registerComponent(Preloader);
registerComponent(NotFoundChat);
registerComponent(ChatFooter);
registerComponent(ChatListUsers);
registerComponent(ChatProfile);

class ChatPage extends Block {
  static componentName = "ChatPage";

  constructor({ ...props }) {
    super({ ...props });
    chatsAPI.getChats();
    this.checkChat();
    this.setProps({
      chats: () => window.store.getState().chats,
      isActivChat: () => window.store.getState().isActivChat,
    });
  }

  public checkChat() {
    window.store.dispatch({ isLoading: true });
    setTimeout(() => {
      window.store.dispatch({ isLoading: false });
    }, 2000);
    let result;
    if (!localStorage.getItem("chatId")) {
      result = { chatId: null, isChat: false };
      window.store.dispatch({ isActivChat: result.isChat });
    } else {
      result = JSON.parse(localStorage.getItem("chatId") as any);
      window.store.dispatch({ isActivChat: result.isChat });
    }
  }

  render(): string {
    return `
    <main>
      <section class="chat">
      {{#if isLoading}}{{{Preloader}}}{{/if}}
        {{{ChatListUsers
          chats=chats
        }}}
        {{#if isActivChat}}
          {{{ChatProfile
            chats=chats
            idChat=idChat
          }}}
        {{else}}
          {{{NotFoundChat}}}
        {{/if}}
      </section>
    </main>
    `;
  }
}

export { ChatPage };
