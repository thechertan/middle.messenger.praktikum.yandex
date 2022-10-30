"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetch = void 0;
const HTTPTransport_1 = __importDefault(require("./HTTPTransport"));
const parentPath = "https://ya-praktikum.tech/api/v2";
const httpFetch = new HTTPTransport_1.default(parentPath);
exports.httpFetch = httpFetch;
//# sourceMappingURL=index.js.map