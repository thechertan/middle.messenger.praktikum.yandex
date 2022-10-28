import { PopupOpen } from "utils/PopupOpen/PopupOpen";
import { webSocketApi } from "utils/api/WssMessage";
import { chatsAPI } from "utils/api/ChatApi";
import { userAPI } from "utils/api/UsersApi";
import { Block, registerComponent } from "../../../core";
import { Validator } from "../../../utils/FormValidator/FormValidator";
import { ChatFooter } from "../__footer/chat-footer";
import { ChatHeaderButtonPopup } from "./_button-popup/chat-button-popup";
import { ChatUserButtonPopup } from "./_button-popup-user/chat-button-popup-user";
import { PopupUser } from "./_popup-user/popup-user";
import { HeaderProfile } from "./_header/header-profile";
import { ProfileDateMessage } from "./_message/_date/profile-date-message";
import { ProfileMessage } from "./_message/_message/profile-message";
import "./chat-profile.css";

const popup = new PopupOpen();

const objectInputs = {
  login: false,
  count: 1,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);

registerComponent(ChatFooter);
registerComponent(ChatHeaderButtonPopup);
registerComponent(ChatUserButtonPopup);
registerComponent(PopupUser);
registerComponent(HeaderProfile);
registerComponent(ProfileMessage);
registerComponent(ProfileDateMessage);

class ChatProfile extends Block {
  static componentName = "ChatProfile";

  constructor({ ...props }) {
    super({ ...props });
    this.setProps({
      onPopup: popup.openPopup.bind(this),
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      activChat: this.getActivChat(),
      listMessages: window.store.getState().listMessages,
      onInputFileChat: this.onInputFileChat.bind(this),
      onSubmitFile: this.onSubmitFile.bind(this),
      onSubmintAddUser: this.onSubmintAddUser.bind(this),
      onSubmitRemoveUser: this.onSubmitRemoveUser.bind(this),
    });
    this.setWssEvent();
  }

  setWssEvent() {
    const { activChat } = this.props;
    if (!activChat) {
      return;
    }
    const { id } = activChat;

    chatsAPI
      .getChatToken(id)
      .then((token) => {
        webSocketApi.open(token, String(id));
      })
      .catch((err) => {
        console.log("Невозможно получить токен чата: ", err);
      });
  }

  onSubmintAddUser(e: Event) {
    e.preventDefault();
    const { activChat } = this.props;
    if (!activChat) {
      return;
    }
    const input = this.element?.querySelector(
      "[name=login]"
    ) as HTMLInputElement;
    const { id } = activChat;
    userAPI.searchUsers(input.value).then((res) => {
      if (JSON.parse(res).length !== 1) {
        console.log("Пользователь не найден или найден но => больше 1го");
        return;
      }
      userAPI.getUser(JSON.parse(res)[0].id).then((data: any) => {
        console.log(JSON.parse(data).id);
        const result: { id: number } = JSON.parse(data);
        if (!result) {
          return;
        }
        const idUser: number = result.id;
        chatsAPI.addUserToChat(idUser, id);
      });
    });
  }

  onSubmitRemoveUser(e: Event) {
    e.preventDefault();
    const { activChat } = this.props;
    if (!activChat) {
      return;
    }
    const input = this.element?.querySelector(
      "[name=login]"
    ) as HTMLInputElement;
    const spanError = this.element?.querySelector(
      "#error__login2"
    ) as HTMLSpanElement;
    console.log(spanError);

    const { id } = activChat;
    userAPI.searchUsers(input.value).then((res) => {
      if (JSON.parse(res).length < 1) {
        spanError.textContent = "Пользователь не найден!";
        setTimeout(() => {
          spanError.textContent = "";
        }, 5000);
        return;
      }
      if (JSON.parse(res).length > 1) {
        spanError.textContent = "Ошибка";
        setTimeout(() => {
          spanError.textContent = "";
        }, 5000);
        return;
      }
      userAPI.getUser(JSON.parse(res)[0].id).then((data: any) => {
        const result: { id: number } = JSON.parse(data);
        if (!result) {
          return;
        }
        const idUser: number = result.id;
        chatsAPI.deleteUserFromChat(idUser, id);
      });
    });
  }

  onInputFileChat(e: Event) {
    e.preventDefault();
    const button = this.element?.querySelector(
      ".popup__form-file-submit"
    ) as HTMLButtonElement;

    const inputLabel = this.element?.querySelector(
      ".popup__input-profile_label"
    ) as HTMLInputElement;

    if (e.target) {
      button!.disabled = false;
      const inputElement = e.target as HTMLInputElement;
      // @ts-expect-error this is not typed
      inputLabel!.textContent = inputElement.files[0].name;
    }
  }

  onSubmitFile(e: Event) {
    e.preventDefault();
    const { activChat } = this.props;
    if (!activChat) {
      return;
    }
    const { id } = activChat;
    const inputFile = this.element?.querySelector(
      ".popup__input-avatar-chat"
    ) as HTMLInputElement;

    const errorText = this.element?.querySelector(
      ".popup__errror_change-chat-avatar"
    ) as HTMLSpanElement;
    if (!inputFile || !errorText) {
      return;
    }
    const formData = new FormData();
    // @ts-expect-error this is not typed
    formData.append("avatar", inputFile.files[0]);
    formData.append("chatId", String(id));
    chatsAPI.changeChatAvatar(formData).catch(() => {
      errorText.textContent = "Произошла ошибка";
      setTimeout(() => {
        errorText.textContent = "";
      }, 5000);
    });
  }

  getActivChat(): {} | null {
    const allChats = this.props.chats();
    if (!allChats) {
      return null;
    }
    const activChatId: string | null = localStorage.getItem("chatId");
    if (!activChatId) {
      return null;
    }

    const activChatJson: { chatId: number; isChat: boolean } =
      JSON.parse(activChatId);

    const activChat = allChats.reduce((acc: {}, value: any) => {
      if (value.id === Number(activChatJson.chatId)) {
        return value;
      }
      return acc;
    }, {});

    return activChat;
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

  render(): string {
    return `
  <div class="chat__profile">
  <div class="chat__container-profile">
      {{{HeaderProfile
        img=activChat.avatar
        name=activChat.title
      }}}
    <div class="chat__options">
      {{{ChatHeaderButtonPopup
        onPopup=onPopup
      }}}
      <div class="chat__container-options">
        <!-- чтобы открыть попап нужно добавить класс боксу chat__box-options_opened -->
        <div id='header__popup' class="chat__box-options">
          <ul class="chat__options-choice">
              {{{ChatUserButtonPopup
                for='add__user'
                onPopup=onPopup
                class='chat__button-icon'
                text='Добавить пользователя'
              }}}
                {{{ChatUserButtonPopup
                for='delete__user'
                onPopup=onPopup
                class='chat__button-icon chat__button-icon_rotate45'
                text='Удалить пользователя'
              }}}
                {{{ChatUserButtonPopup
                for='popup_type-edit-avatar'
                onPopup=onPopup
                class='chat__button-icon chat__button-icon_avatar'
                text='Изменить аватар'
                ico='avatar'
                }}}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="chat__content-mesage">

    {{#each listMessages}}
    {{{ProfileMessage
      idAuthor=this.user_id
      text=this.content
      time=this.time
      isText=true
    }}}
    {{/each}}
  </div>

  {{{ChatFooter}}}
  {{{PopupUser
    onSubmit=onSubmintAddUser
    onPopup=onPopup
    idName='add__user'
    text='Добавить пользователя'
    textButton='Добавить'
    idInput='login'
    idButton='button__login'
    onBlur=onBlur
    onFocus=onFocus
    onInput=onInput
  }}}

  {{{PopupUser
    onSubmit=onSubmitRemoveUser
    onPopup=onPopup
    idName='delete__user'
    text='Удалить пользователя'
    textButton='Удалить'
    idInput='login2'
    idButton='button__login2'
    onBlur=onBlur
    onFocus=onFocus
    onInput=onInput
  }}}

  {{{ProfilePopup
    onInputFile=onInputFileChat
    idName='popup_type-edit-avatar'
    onClick=onPopup
    onSubmitPopup=onSubmitFile
    classNameButton='poupup'
  }}}
  `;
  }
}

export { ChatProfile };

// TODO Date chat
// {{#if listMessages}}
// {{{ProfileDateMessage
//   date='19 июня'
// }}}
// {{/if}}
