import { Block, registerComponent } from "core";
import { ChatDelete } from "../_deleteChat";
import { ChatItemClick } from "./_click";

registerComponent(ChatDelete);
registerComponent(ChatItemClick);

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
    this.setProps({
      onClickChat: this.onClickChat.bind(this),
      isMyChat: () => {
        if (!window.store.state.user) {
          return false;
        }
        const myId: number = window.store.state.user.id;
        if (!myId) {
          return false;
        }
        const createdChat: number = this.props.chats.created_by;
        return Number(myId) === Number(createdChat);
      },
      getTime: () => {
        if (!this.props.chats.last_message) {
          return "";
        }
        const endTime = new Date(this.props.chats.last_message.time);
        const hours = endTime.getHours();
        const minutes = endTime.getMinutes();
        return `${hours}:${minutes}`;
      },
    });
  }

  onClickChat(e: Event) {
    e.preventDefault();
    const htmEl: HTMLElement = <HTMLElement>(
      (<HTMLElement>e.currentTarget!).parentNode
    );
    const id: string | null = htmEl.getAttribute("id");
    if (!id) {
      return;
    }

    const result = JSON.stringify({ chatId: id, isChat: true });
    localStorage.setItem("chatId", result);
    window.store.dispatch({ isActivChat: true });
  }

  render(): string {
    return ` 
  <li id='{{chats.id}}' class="chat__list-item">
        {{#if isMyChat}}
          {{{ChatDelete
            onDeleteClick=onDeleteClick
          }}}
        {{/if}}

        {{#if chats.avatar}}
        <img src="https://ya-praktikum.tech/api/v2/resources/{{chats.avatar}}" alt="аватарка" class="chat__avatar-link"></img>
        {{else}}
        <span class="chat__avatar-ico"></span>
        {{/if}}
   
      {{{ChatItemClick
        title=chats.title
        last_message=chats.last_message.content
        onClickChat=onClickChat
      }}}
    <div class="chat__push">
      <p class="chat__time">{{getTime}}</p>
      {{#if chats.unread_count}}
      <span class="chat__count-message chat__count-message_active">{{chats.unread_count}}</span>
      {{/if}}
    </div>
  </li > 
        `;
  }
}
