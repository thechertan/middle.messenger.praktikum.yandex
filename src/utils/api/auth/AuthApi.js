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
const HTTPTransport_1 = require("../../HTTPTransport");
class AuthApi {
    signIn(_a) {
        var props = __rest(_a, []);
        const data = JSON.stringify(Object.assign({}, props));
        return HTTPTransport_1.httpFetch.post("/auth/signin", {
            data,
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            withCredentials: true,
        });
    }
    signUp(_a) {
        var props = __rest(_a, []);
        const data = JSON.stringify(Object.assign({}, props));
        return HTTPTransport_1.httpFetch.post("/auth/signup", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    async logout() {
        return HTTPTransport_1.httpFetch.post("/auth/logout", {
            withCredentials: true,
        });
    }
    async me() {
        return HTTPTransport_1.httpFetch.get("/auth/user", {
            withCredentials: true,
        });
    }
}
exports.default = AuthApi;
//# sourceMappingURL=AuthApi.js.map