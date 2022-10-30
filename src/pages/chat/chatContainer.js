"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const withStore_1 = require("utils/withStore/withStore");
const withLoading_1 = __importDefault(require("utils/withLoading/withLoading"));
const chat_1 = require("./chat");
// @ts-ignore
const HOCchatPage = (0, withStore_1.withStore)((0, withLoading_1.default)(chat_1.ChatPage));
exports.default = HOCchatPage;
//# sourceMappingURL=chatContainer.js.map