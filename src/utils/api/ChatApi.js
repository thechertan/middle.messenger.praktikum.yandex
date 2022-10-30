"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsAPI = void 0;
const index_1 = require("./chat/index");
class ChatAPI {
    getChats() {
        return index_1.chatApi
            .getChats()
            .then((res) => {
            window.store.dispatch({ chats: res });
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    createChat(title) {
        return index_1.chatApi
            .createChat(title)
            .then(() => {
            this.getChats();
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    getChatToken(chatId) {
        return index_1.chatApi
            .getChatToken(chatId)
            .then((data) => data.token)
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    deleteChat(chatId) {
        return index_1.chatApi
            .deleteChat(chatId)
            .then(() => {
            this.getChats();
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    getChatUsers(id) {
        return index_1.chatApi
            .getChatUsers(id)
            .then((users) => {
            console.log(users);
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    changeChatAvatar(file) {
        return index_1.chatApi.changeChatAvatar(file).then((res) => {
            this.getChats();
            return res;
        });
    }
    addUserToChat(idUser, id) {
        index_1.chatApi
            .addUsersToChat([idUser], id)
            .then((res) => res)
            .catch((err) => {
            console.log("Произошла ошибка при добавлении юзера в чат: ", err);
        });
    }
    deleteUserFromChat(userId, id) {
        index_1.chatApi
            .deleteUserFromChat([userId], id)
            .then((data) => data)
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const chatsAPI = new ChatAPI();
exports.chatsAPI = chatsAPI;
//# sourceMappingURL=ChatApi.js.map