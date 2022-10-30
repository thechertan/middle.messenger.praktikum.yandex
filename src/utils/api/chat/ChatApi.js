"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPTransport_1 = require("../../HTTPTransport");
class ChatApi {
    _checkAnswer(res) {
        if (res.response) {
            return JSON.parse(res.response);
        }
        return res;
    }
    async getChats() {
        const result = await HTTPTransport_1.httpFetch.get("/chats", {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
        return this._checkAnswer(result);
    }
    createChat(titleId) {
        const data = JSON.stringify({ title: titleId });
        return HTTPTransport_1.httpFetch.post("/chats", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    deleteChat(id) {
        const data = JSON.stringify({ chatId: id });
        return HTTPTransport_1.httpFetch.delete("/chats", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    async getChatUsers(id) {
        return HTTPTransport_1.httpFetch.get(`/chats/${id}/users`, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    addUsersToChat(users, chatId) {
        const data = JSON.stringify({ users, chatId });
        return HTTPTransport_1.httpFetch.put(`/chats/users`, {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    deleteUserFromChat(users, chatId) {
        return HTTPTransport_1.httpFetch.delete(`/chats/users`, {
            data: {
                users,
                chatId,
            },
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    async getChatToken(chatId) {
        const result = await HTTPTransport_1.httpFetch.post(`/chats/token/${chatId}`, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
        return this._checkAnswer(result);
    }
    changeChatAvatar(file) {
        const data = file;
        return HTTPTransport_1.httpFetch.put("/chats/avatar", {
            data,
            headers: {
                accept: "application/json",
            },
            withCredentials: true,
        });
    }
}
exports.default = ChatApi;
//# sourceMappingURL=ChatApi.js.map