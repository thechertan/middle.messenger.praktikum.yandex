import { Block, registerComponent } from "../../../core";
import { ChatItemUser } from "./_item/chat-item-user";

import "./chat-list-users.css";

registerComponent(ChatItemUser);

class ChatListUsers extends Block {
  static componentName = "ChatListUsers";

  render(): string {
    return `
    <div class="chat__users">
    <div class="chat__profile-container">
      <a href="./profile.hbs" class="chat__link-profile">Профиль</a>
      <span class="chat__profile-icon"></span>
    </div>
    <label class="chat__search">
      <div class="chat__search-span-position">
        <!-- когда инпут активный .focus, нужно добавить класс спану chat__search-ico_active -->
        <span class="chat__search-ico chat__search-ico_active"></span>
      </div>
      <input type="text" class="chat__search-input" placeholder="Поиск" />
    </label>
    <div class="chat__list-users">
      <ul class="chat__list">
      {{{ChatItemUser
        name='Сергей Сергеевич'
        lastTimeMessage='12:02'
        itemText='Привет'
        countMessage=2
        avatar=''
      }}}
      {{{ChatItemUser
        name='Сергей Сергеевич'
        lastTimeMessage='12:02'
        itemText='Привет'
        countMessage=4
        avatar=''
      }}}
      {{{ChatItemUser
        name='Сергей Сергеевич'
        lastTimeMessage='12:02'
        itemText='Привет, на выходных выходил на улицу'
        countMessage=1
        avatar=''
      }}}  
      </ul>
    </div>
  </div>
    `;
  }
}

export { ChatListUsers };
