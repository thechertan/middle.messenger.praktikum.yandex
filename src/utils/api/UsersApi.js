"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAPI = void 0;
const index_1 = require("./user/index");
class UserAPI {
    searchUsers(login) {
        return index_1.usersApi
            .searchUsers(login)
            .then((res) => res.response)
            .catch((err) => err);
    }
    getUser(id) {
        return index_1.usersApi
            .getUser(id)
            .then((res) => res.response)
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const userAPI = new UserAPI();
exports.userAPI = userAPI;
//# sourceMappingURL=UsersApi.js.map