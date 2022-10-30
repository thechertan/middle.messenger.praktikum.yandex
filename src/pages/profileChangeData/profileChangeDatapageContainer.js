"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOCProfileChangeDataPage = void 0;
const withStore_1 = require("utils/withStore/withStore");
const withUser_1 = require("utils/withUser/withUser");
const withLoading_1 = __importDefault(require("utils/withLoading/withLoading"));
const profileChangeData_1 = __importDefault(require("./profileChangeData"));
const HOCProfileChangeDataPage = (0, withStore_1.withStore)(
// @ts-ignore
(0, withUser_1.withUser)((0, withLoading_1.default)(profileChangeData_1.default)));
exports.HOCProfileChangeDataPage = HOCProfileChangeDataPage;
//# sourceMappingURL=profileChangeDatapageContainer.js.map