import { Validator } from "utils/FormValidator/FormValidator";
import { PopupOpen } from "utils/PopupOpen/PopupOpen";
import { chatsAPI } from "utils/api/ChatApi";
import { Block, registerComponent } from "core";
import { ChatItemUser } from "./_item/chat-item-user";
import { ChatDelete } from "./_deleteChat";
import { ChatAdd } from "./_addChat";
import "./chat-list-users.css";

interface IChatListUsers {}

registerComponent(ChatItemUser);
registerComponent(ChatDelete);
registerComponent(ChatAdd);

const objectInputs = {
  nameChat: false,
  count: 1,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);
const popup = new PopupOpen();

class ChatListUsers extends Block {
  static componentName = "ChatListUsers";

  constructor({ ...props }: IChatListUsers) {
    super({ ...props });
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      onDeleteClick: this.onDeleteClick.bind(this),
      onPopupAddChat: popup.openPopup.bind(this),
      onSubmitChat: this.onSubmitChat.bind(this),
      getLastTimeMessage: () => {},
    });
  }

  onInput(e: Event) {
    validator.onInput(e, this);
  }

  onFocus(e: Event) {
    validator.onFocus(e, this);
  }

  onBlur(e: Event) {
    validator.onBlur(e, this);
  }

  onSubmitChat(e: Event) {
    e.preventDefault();
    const inputChatName = this.element?.querySelector(
      "input[name=nameChat]"
    ) as HTMLInputElement;
    chatsAPI.createChat(inputChatName.value);
  }

  onDeleteClick(e: Event) {
    e.preventDefault();
    const id: string | null = (<HTMLElement>(
      (<HTMLElement>(<HTMLElement>e.target).parentNode).parentNode
    )).getAttribute("id");

    if (id) {
      const chatId: { chatId: string } | null = JSON.parse(
        localStorage.getItem("chatId") as string
      );
      if (chatId) {
        const idWindow = chatId.chatId;
        if (idWindow === id) {
          window.store.dispatch({ isActivChat: false });
          localStorage.removeItem("chatId");
        }
      }
      window.store.dispatch({ isLoading: true });
      chatsAPI.deleteChat(Number(id));
      setTimeout(() => {
        window.store.dispatch({ isLoading: false });
      }, 5000);
    } else {
      console.log("id чата не найден");
    }
  }

  render(): string {
    return `
    <div class="chat__users">
    <div class="chat__profile-container">
    {{{ChatAdd
      onPopupAddChat=onPopupAddChat
      for='add__chat'
    }}}
    <div class="chat__profile-link"> 
      <a href="/settings" class="chat__link-profile">Профиль</a>
      <div class="chat__profile-icon"></div>
    </div>
    </div>

    <div class="chat__list-users">
      <ul class="chat__list">
        {{#each chats}}
          {{{ChatItemUser
            chats=this
            onDeleteClick=@root.onDeleteClick
          }}}      
        {{/each}} 
      </ul>
    </div>
    {{{PopupUser
      onSubmit=onSubmitChat
      onPopup=onPopupAddChat
      nameLabel='Имя чата'
      idName='add__chat'
      text='Добавить чат'
      textButton='Добавить'
      idInput='nameChat'
      idButton='button__nameChat'
      onBlur=onBlur
      onFocus=onFocus
      onInput=onInput
    }}}
  </div>



    `;
  }
}

export { ChatListUsers };

// TODO Search listChat
// <label class="chat__search">
// <div class="chat__search-span-position">
//   <!-- когда инпут активный .focus, нужно добавить класс спану chat__search-ico_active -->
//   <span class="chat__search-ico chat__search-ico_active"></span>
// </div>
// <input type="text" class="chat__search-input" placeholder="Поиск" />
// </label>
