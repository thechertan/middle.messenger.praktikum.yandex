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
exports.ChatHeaderButtonPopup = void 0;
const core_1 = require("../../../../core");
const __three_dot_svg_1 = __importDefault(require("../../../../image/__three_dot.svg"));
class ChatHeaderButtonPopup extends core_1.Block {
    constructor(_a) {
        var { onPopup } = _a, props = __rest(_a, ["onPopup"]);
        super(Object.assign(Object.assign({}, props), { events: { click: onPopup } }));
    }
    render() {
        return `
    <img
    for='header__popup'
    src="${__three_dot_svg_1.default}"
    alt="Настройки чата"
    class="chat__options-button"
    />
  `;
    }
}
exports.ChatHeaderButtonPopup = ChatHeaderButtonPopup;
ChatHeaderButtonPopup.componentName = "ChatHeaderButtonPopup";
//# sourceMappingURL=chat-button-popup.js.map