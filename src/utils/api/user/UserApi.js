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
class UsersApi {
    changeProfile(_a) {
        var props = __rest(_a, []);
        const data = JSON.stringify(Object.assign({}, props));
        return HTTPTransport_1.httpFetch.put("/user/profile", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    changePassword(oldPassword, newPassword) {
        const dataRequest = {
            newPassword,
            oldPassword,
        };
        const data = JSON.stringify(dataRequest);
        return HTTPTransport_1.httpFetch.put("/user/password", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    changeProfileAvatar(file) {
        const data = file;
        return HTTPTransport_1.httpFetch.put("/user/profile/avatar", {
            data,
            headers: {
                accept: "application/json",
            },
            withCredentials: true,
        });
    }
    getUser(id) {
        return HTTPTransport_1.httpFetch.get(`/user/${id}`, {
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
    searchUsers(login) {
        const data = JSON.stringify({ login });
        return HTTPTransport_1.httpFetch.post("/user/search", {
            data,
            headers: {
                "content-type": "application/json",
            },
            withCredentials: true,
        });
    }
}
exports.default = UsersApi;
//# sourceMappingURL=UserApi.js.map