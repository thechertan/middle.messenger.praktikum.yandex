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
const clearLocalStorage_1 = __importDefault(require("helpers/clearLocalStorage"));
const auth_1 = require("./auth");
const WssMessage_1 = require("./WssMessage");
class AuthAPI {
    signIn(_a) {
        var data = __rest(_a, []);
        return auth_1.auth
            .signIn(Object.assign({}, data))
            .then((res) => {
            localStorage.setItem("isAuth", "true");
            window.router.go("/messenger");
            return res;
        })
            .catch((err) => err);
    }
    signUp(_a) {
        var data = __rest(_a, []);
        return auth_1.auth
            .signUp(Object.assign({}, data))
            .then((res) => {
            localStorage.setItem("isAuth", "true");
            window.router.go("/messenger");
            return res;
        })
            .catch((err) => err);
    }
    logout() {
        return auth_1.auth
            .logout()
            .then(() => {
            WssMessage_1.webSocketApi.close();
            window.store.dispatch({ isActivChat: false });
            (0, clearLocalStorage_1.default)();
        })
            .catch((err) => err);
    }
    me() {
        return auth_1.auth
            .me()
            .then((data) => data)
            .catch((err) => err);
    }
}
const authAPI = new AuthAPI();
exports.default = authAPI;
//# sourceMappingURL=AuthApi.js.map