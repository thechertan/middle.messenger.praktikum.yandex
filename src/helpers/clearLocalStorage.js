"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clearLocalStorage() {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("chatId");
    window.router.go("/");
}
exports.default = clearLocalStorage;
//# sourceMappingURL=clearLocalStorage.js.map