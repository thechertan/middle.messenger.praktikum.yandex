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
exports.ChatItemUser = void 0;
const core_1 = require("core");
const _deleteChat_1 = require("../_deleteChat");
const _click_1 = require("./_click");
(0, core_1.registerComponent)(_deleteChat_1.ChatDelete);
(0, core_1.registerComponent)(_click_1.ChatItemClick);
class ChatItemUser extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onClickChat: this.onClickChat.bind(this),
            isMyChat: () => {
                if (!window.store.state.user) {
                    return false;
                }
                const myId = window.store.state.user.id;
                if (!myId) {
                    return false;
                }
                const createdChat = this.props.chats.created_by;
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
    onClickChat(e) {
        e.preventDefault();
        const htmEl = (e.currentTarget.parentNode);
        const id = htmEl.getAttribute("id");
        if (!id) {
            return;
        }
        const result = JSON.stringify({ chatId: id, isChat: true });
        localStorage.setItem("chatId", result);
        window.store.dispatch({ isActivChat: true });
    }
    render() {
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
exports.ChatItemUser = ChatItemUser;
ChatItemUser.componentName = "ChatItemUser";
//# sourceMappingURL=chat-item-user.js.map