import { Block, registerComponent } from "../../core";
import { Validator } from "../../helpers/validateInput/Validator";
import { ChatFooter } from "../../components/chat/__footer/chat-footer";
import { ChatListUsers } from "./__list-users/chat-list-users";
import { ChatProfile } from "../../components/chat/__profile/chat-profile";
import { NotFoundChat } from "../../components/chat/__not-found-сhat/not-found-сhat";

import './chat.css'
registerComponent(NotFoundChat);
registerComponent(ChatFooter);
registerComponent(ChatListUsers);
registerComponent(ChatProfile);

const validator = new Validator();

class ChatPage extends Block {
  constructor() {
    super();
  }

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
