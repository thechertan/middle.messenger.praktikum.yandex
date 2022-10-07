import { Block } from "core";

interface IChatItemUser {
  name: string;
  itemText: string;
  lastTimeMessage: string;
  countMessage?: number;
  avatar?: string;
}

export class ChatItemUser extends Block {
  static componentName = "ChatItemUser";

  constructor({ ...props }: IChatItemUser) {
    super({ ...props });
  }

  render(): string {
    return ` 
  <li class="chat__list-item">
    <div class="chat__remove-position">
      <span class="chat__remove"></span>
    </div>
    <span class="chat__avatar-ico"></span>
    <div class="chat__user-info">
      <h2 class="chat__user-name">{{name}}</h2>
      <p class="chat__message">{{itemText}}</p>
    </div>
    <div class="chat__push">
      <p class="chat__time">{{lastTimeMessage}}</p>
      {{#if countMessage}}
      <span class="chat__count-message chat__count-message_active">{{countMessage}}</span>
      {{/if}}
    </div>
  </li> 
        `;
  }
}
