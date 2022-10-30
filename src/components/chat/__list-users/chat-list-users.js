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
exports.ChatListUsers = void 0;
const FormValidator_1 = require("utils/FormValidator/FormValidator");
const PopupOpen_1 = require("utils/PopupOpen/PopupOpen");
const ChatApi_1 = require("utils/api/ChatApi");
const core_1 = require("../../../core");
const chat_item_user_1 = require("./_item/chat-item-user");
const _deleteChat_1 = require("./_deleteChat");
const _addChat_1 = require("./_addChat");
require("./chat-list-users.css");
(0, core_1.registerComponent)(chat_item_user_1.ChatItemUser);
(0, core_1.registerComponent)(_deleteChat_1.ChatDelete);
(0, core_1.registerComponent)(_addChat_1.ChatAdd);
const objectInputs = {
    nameChat: false,
    count: 1,
    modeOneChange: false,
    isButton: true,
};
const validator = new FormValidator_1.Validator(objectInputs);
const popup = new PopupOpen_1.PopupOpen();
class ChatListUsers extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onInput: this.onInput.bind(this),
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onDeleteClick: this.onDeleteClick.bind(this),
            onPopupAddChat: popup.openPopup.bind(this),
            onSubmitChat: this.onSubmitChat.bind(this),
            getLastTimeMessage: () => { },
        });
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
    onSubmitChat(e) {
        var _a;
        e.preventDefault();
        const inputChatName = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=nameChat]");
        ChatApi_1.chatsAPI.createChat(inputChatName.value);
    }
    onDeleteClick(e) {
        e.preventDefault();
        const id = (e.target.parentNode.parentNode).getAttribute("id");
        if (id) {
            const chatId = JSON.parse(localStorage.getItem("chatId"));
            if (chatId) {
                const idWindow = chatId.chatId;
                if (idWindow === id) {
                    window.store.dispatch({ isActivChat: false });
                    localStorage.removeItem("chatId");
                }
            }
            window.store.dispatch({ isLoading: true });
            ChatApi_1.chatsAPI.deleteChat(Number(id));
            setTimeout(() => {
                window.store.dispatch({ isLoading: false });
            }, 5000);
        }
        else {
            console.log("id чата не найден");
        }
    }
    render() {
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
exports.ChatListUsers = ChatListUsers;
ChatListUsers.componentName = "ChatListUsers";
// TODO Search listChat
// <label class="chat__search">
// <div class="chat__search-span-position">
//   <!-- когда инпут активный .focus, нужно добавить класс спану chat__search-ico_active -->
//   <span class="chat__search-ico chat__search-ico_active"></span>
// </div>
// <input type="text" class="chat__search-input" placeholder="Поиск" />
// </label>
//# sourceMappingURL=chat-list-users.js.map