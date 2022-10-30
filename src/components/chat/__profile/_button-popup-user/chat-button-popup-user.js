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
exports.ChatUserButtonPopup = void 0;
const core_1 = require("core");
const __sum_svg_1 = __importDefault(require("image/__sum.svg"));
const avatarChat_svg_1 = __importDefault(require("image/avatarChat.svg"));
class ChatUserButtonPopup extends core_1.Block {
    constructor(_a) {
        var { onPopup } = _a, props = __rest(_a, ["onPopup"]);
        super(Object.assign(Object.assign({}, props), { events: { click: onPopup } }));
    }
    render() {
        return `
    <li for='{{for}}' class="chat__options-item">
        <img
          for='{{for}}'
          {{#if ico}} 
          src="${avatarChat_svg_1.default}" 
          {{else}} 
          src="${__sum_svg_1.default}
          "{{/if}}
         
          alt="Плюс"
          class="{{class}}"
        />
        <p for='{{for}}' class="chat__options-text">{{text}}</p>
    </li>
  `;
    }
}
exports.ChatUserButtonPopup = ChatUserButtonPopup;
ChatUserButtonPopup.componentName = "ChatUserButtonPopup";
//# sourceMappingURL=chat-button-popup-user.js.map