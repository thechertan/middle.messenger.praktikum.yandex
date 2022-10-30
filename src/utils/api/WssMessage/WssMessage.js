"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WssMessage = void 0;
const isEqual_1 = require("helpers/isEqual");
class WssMessage {
    open(token, currentChatId) {
        const userId = window.store.getState().user.id;
        if (!userId) {
            console.log("Ошибка userID не найден!");
            return;
        }
        if (this.socket) {
            this.close();
        }
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${currentChatId}/${token}`);
        this.initEventOpen();
        this.initEventMessage();
        this.initEventClose();
        this.initEventError();
    }
    close() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.close();
        setTimeout(() => {
            clearInterval(this.interval);
        }, 5000);
    }
    initEventOpen() {
        this.socket.addEventListener("open", () => {
            this.offset = 0;
            this.socket.send(JSON.stringify({
                content: this.offset,
                type: "get old",
            }));
        });
        this.interval = setInterval(() => {
            this.socket.send(JSON.stringify({
                type: "ping",
            }));
        }, 5000);
    }
    initEventMessage() {
        this.socket.addEventListener("message", (event) => {
            const result = (0, isEqual_1.isEqual)(window.store.state.listMessages, JSON.parse(event.data));
            if (JSON.parse(event.data).type !== "pong") {
                if (!result) {
                    window.store.dispatch({ listMessages: JSON.parse(event.data) });
                }
            }
        });
    }
    initEventClose() {
        this.socket.addEventListener("close", (event) => {
            this.offset = 0;
            if (event.wasClean) {
                console.log("Соединение закрыто чисто");
            }
            else {
                console.log("Обрыв соединения");
            }
        });
    }
    initEventError() {
        this.socket.addEventListener("error", (event) => {
            console.log("Ошибка", event.message);
        });
    }
    sendMessage(message) {
        if (!message.trim())
            return;
        this.socket.send(JSON.stringify({
            content: message,
            type: "message",
        }));
    }
}
exports.WssMessage = WssMessage;
//# sourceMappingURL=WssMessage.js.map