"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthApi_1 = __importDefault(require("utils/api/AuthApi"));
const ChatApi_1 = require("utils/api/ChatApi");
async function allSettled() {
    const promises = [
        AuthApi_1.default
            .me()
            .then((res) => res)
            .catch((err) => err),
    ];
    const result = await Promise.all(promises.map((value) => value
        .then((val) => {
        if (val.status >= 300) {
            throw val;
        }
        else {
            return { status: "resolved", value: val };
        }
    })
        .catch((err) => ({ status: "rejected", reason: err })))).then((value) => value);
    const resultRequest = Promise.resolve(result);
    return resultRequest.then((res) => {
        res.map((promis) => {
            var _a;
            if (promis.status !== "resolved") {
                const isAuth = localStorage.getItem("isAuth");
                if (isAuth) {
                    AuthApi_1.default.logout();
                }
                return promis;
            }
            ChatApi_1.chatsAPI.getChats();
            (_a = window.store) === null || _a === void 0 ? void 0 : _a.dispatch({ user: JSON.parse(promis.value.response) });
            return promis;
        });
    });
}
exports.default = allSettled;
//# sourceMappingURL=allSettled.js.map