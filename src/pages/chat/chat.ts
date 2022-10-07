import { Block, registerComponent } from "../../core";
import { ChatFooter } from "../../components/chat/__footer/chat-footer";
import { ChatListUsers } from "../../components/chat/__list-users/chat-list-users";
import { ChatProfile } from "../../components/chat/__profile/chat-profile";
import { NotFoundChat } from "../../components/chat/__not-found-сhat/not-found-сhat";

import "./chat.css";

registerComponent(NotFoundChat);
registerComponent(ChatFooter);
registerComponent(ChatListUsers);
registerComponent(ChatProfile);

class ChatPage extends Block {
  static componentName = 'ChatPage'
  render(): string {
    return `
    <main>
      <section class="chat">
        {{{ChatListUsers}}}
        {{{ChatProfile}}}
      </section>
    </main>
    `;
  }
}

export { ChatPage };
