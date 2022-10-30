"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const withStore_1 = require("utils/withStore/withStore");
const withLoading_1 = __importDefault(require("utils/withLoading/withLoading"));
const register_1 = __importDefault(require("./register"));
// @ts-ignore
const HOCPRegisterPage = (0, withStore_1.withStore)((0, withLoading_1.default)(register_1.default));
exports.default = HOCPRegisterPage;
//# sourceMappingURL=registerContainer.js.map