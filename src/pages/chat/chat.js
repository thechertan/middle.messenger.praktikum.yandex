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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatPage = void 0;
const core_1 = require("core");
const ChatApi_1 = require("utils/api/ChatApi");
const chat_footer_1 = require("../../components/chat/__footer/chat-footer");
const chat_list_users_1 = require("../../components/chat/__list-users/chat-list-users");
const chat_profile_1 = require("../../components/chat/__profile/chat-profile");
const not_found__hat_1 = require("../../components/chat/__not-found-\u0441hat/not-found-\u0441hat");
const preloader_1 = __importDefault(require("../../components/preloader/preloader"));
require("./chat.css");
(0, core_1.registerComponent)(preloader_1.default);
(0, core_1.registerComponent)(not_found__hat_1.NotFoundChat);
(0, core_1.registerComponent)(chat_footer_1.ChatFooter);
(0, core_1.registerComponent)(chat_list_users_1.ChatListUsers);
(0, core_1.registerComponent)(chat_profile_1.ChatProfile);
class ChatPage extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        ChatApi_1.chatsAPI.getChats();
        this.checkChat();
        this.setProps({
            chats: () => window.store.getState().chats,
            isActivChat: () => window.store.getState().isActivChat,
        });
    }
    checkChat() {
        window.store.dispatch({ isLoading: true });
        setTimeout(() => {
            window.store.dispatch({ isLoading: false });
        }, 2000);
        let result;
        if (!localStorage.getItem("chatId")) {
            result = { chatId: null, isChat: false };
            window.store.dispatch({ isActivChat: result.isChat });
        }
        else {
            result = JSON.parse(localStorage.getItem("chatId"));
            window.store.dispatch({ isActivChat: result.isChat });
        }
    }
    render() {
        return `
    <main>
      <section class="chat">
      {{#if isLoading}}{{{Preloader}}}{{/if}}
        {{{ChatListUsers
          chats=chats
        }}}
        {{#if isActivChat}}
          {{{ChatProfile
            chats=chats
            idChat=idChat
          }}}
        {{else}}
          {{{NotFoundChat}}}
        {{/if}}
      </section>
    </main>
    `;
    }
}
exports.ChatPage = ChatPage;
ChatPage.componentName = "ChatPage";
//# sourceMappingURL=chat.js.map