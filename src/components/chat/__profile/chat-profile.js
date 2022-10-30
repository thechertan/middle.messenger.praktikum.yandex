"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatProfile = void 0;
const PopupOpen_1 = require("utils/PopupOpen/PopupOpen");
const WssMessage_1 = require("utils/api/WssMessage");
const ChatApi_1 = require("utils/api/ChatApi");
const UsersApi_1 = require("utils/api/UsersApi");
const core_1 = require("../../../core");
const FormValidator_1 = require("../../../utils/FormValidator/FormValidator");
const chat_footer_1 = require("../__footer/chat-footer");
const chat_button_popup_1 = require("./_button-popup/chat-button-popup");
const chat_button_popup_user_1 = require("./_button-popup-user/chat-button-popup-user");
const popup_user_1 = require("./_popup-user/popup-user");
const header_profile_1 = require("./_header/header-profile");
const profile_date_message_1 = require("./_message/_date/profile-date-message");
const profile_message_1 = require("./_message/_message/profile-message");
require("./chat-profile.css");
const popup = new PopupOpen_1.PopupOpen();
const objectInputs = {
    login: false,
    count: 1,
    modeOneChange: false,
    isButton: true,
};
const validator = new FormValidator_1.Validator(objectInputs);
(0, core_1.registerComponent)(chat_footer_1.ChatFooter);
(0, core_1.registerComponent)(chat_button_popup_1.ChatHeaderButtonPopup);
(0, core_1.registerComponent)(chat_button_popup_user_1.ChatUserButtonPopup);
(0, core_1.registerComponent)(popup_user_1.PopupUser);
(0, core_1.registerComponent)(header_profile_1.HeaderProfile);
(0, core_1.registerComponent)(profile_message_1.ProfileMessage);
(0, core_1.registerComponent)(profile_date_message_1.ProfileDateMessage);
class ChatProfile extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
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
        ChatApi_1.chatsAPI
            .getChatToken(id)
            .then((token) => {
            WssMessage_1.webSocketApi.open(token, String(id));
        })
            .catch((err) => {
            console.log("Невозможно получить токен чата: ", err);
        });
    }
    onSubmintAddUser(e) {
        var _a;
        e.preventDefault();
        const { activChat } = this.props;
        if (!activChat) {
            return;
        }
        const input = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("[name=login]");
        const { id } = activChat;
        UsersApi_1.userAPI.searchUsers(input.value).then((res) => {
            if (JSON.parse(res).length !== 1) {
                console.log("Пользователь не найден или найден но => больше 1го");
                return;
            }
            UsersApi_1.userAPI.getUser(JSON.parse(res)[0].id).then((data) => {
                console.log(JSON.parse(data).id);
                const result = JSON.parse(data);
                if (!result) {
                    return;
                }
                const idUser = result.id;
                ChatApi_1.chatsAPI.addUserToChat(idUser, id);
            });
        });
    }
    onSubmitRemoveUser(e) {
        var _a, _b;
        e.preventDefault();
        const { activChat } = this.props;
        if (!activChat) {
            return;
        }
        const input = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("[name=login]");
        const spanError = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("#error__login2");
        console.log(spanError);
        const { id } = activChat;
        UsersApi_1.userAPI.searchUsers(input.value).then((res) => {
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
            UsersApi_1.userAPI.getUser(JSON.parse(res)[0].id).then((data) => {
                const result = JSON.parse(data);
                if (!result) {
                    return;
                }
                const idUser = result.id;
                ChatApi_1.chatsAPI.deleteUserFromChat(idUser, id);
            });
        });
    }
    onInputFileChat(e) {
        var _a, _b;
        e.preventDefault();
        const button = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(".popup__form-file-submit");
        const inputLabel = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector(".popup__input-profile_label");
        if (e.target) {
            button.disabled = false;
            const inputElement = e.target;
            // @ts-expect-error this is not typed
            inputLabel.textContent = inputElement.files[0].name;
        }
    }
    onSubmitFile(e) {
        var _a, _b;
        e.preventDefault();
        const { activChat } = this.props;
        if (!activChat) {
            return;
        }
        const { id } = activChat;
        const inputFile = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(".popup__input-avatar-chat");
        const errorText = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector(".popup__errror_change-chat-avatar");
        if (!inputFile || !errorText) {
            return;
        }
        const formData = new FormData();
        // @ts-expect-error this is not typed
        formData.append("avatar", inputFile.files[0]);
        formData.append("chatId", String(id));
        ChatApi_1.chatsAPI.changeChatAvatar(formData).catch(() => {
            errorText.textContent = "Произошла ошибка";
            setTimeout(() => {
                errorText.textContent = "";
            }, 5000);
        });
    }
    getActivChat() {
        const allChats = this.props.chats();
        if (!allChats) {
            return null;
        }
        const activChatId = localStorage.getItem("chatId");
        if (!activChatId) {
            return null;
        }
        const activChatJson = JSON.parse(activChatId);
        const activChat = allChats.reduce((acc, value) => {
            if (value.id === Number(activChatJson.chatId)) {
                return value;
            }
            return acc;
        }, {});
        return activChat;
    }
    onInput(e) {
        validator.onInput(e, this);
    }
    onFocus(e) {
        validator.onFocus(e, this);
    }
    onBlur(e) {
        validator.onBlur(e, this);
    }
    render() {
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
exports.ChatProfile = ChatProfile;
ChatProfile.componentName = "ChatProfile";
// TODO Date chat
// {{#if listMessages}}
// {{{ProfileDateMessage
//   date='19 июня'
// }}}
// {{/if}}
//# sourceMappingURL=chat-profile.js.map