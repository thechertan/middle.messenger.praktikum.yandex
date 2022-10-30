"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/styles.css");
const Router_1 = __importDefault(require("utils/Router/Router"));
const Store_1 = require("core/Store");
const allSettled_1 = __importDefault(require("helpers/allSettled"));
const register_1 = __importDefault(require("./pages/register"));
const profile_1 = require("./pages/profile");
const profileChangeData_1 = require("./pages/profileChangeData");
const notFound_1 = require("./pages/notFound");
const login_1 = __importDefault(require("./pages/login"));
const chat_1 = require("./pages/chat");
const profileChangePassword_1 = require("./pages/profileChangePassword");
const error_1 = require("./pages/error");
const store_1 = require("./store");
(async function () {
    const store = new Store_1.Store(store_1.defaultState);
    const router = new Router_1.default();
    window.store = store;
    window.router = router;
    await (0, allSettled_1.default)();
    router
        .use("/settings", profile_1.HOCprofilePage)
        .use("/settings/changedata", profileChangeData_1.HOCProfileChangeDataPage)
        .use("/settings/changepassword", profileChangePassword_1.HOCProfileChangePassword)
        .use("/messenger", chat_1.HOCchatPage)
        .use("/", login_1.default)
        .use("/sign-up", register_1.default)
        .use("/404", notFound_1.NotFoundPage)
        .use("/500", error_1.ErrorPage);
    router.start();
})();
//# sourceMappingURL=index.js.map