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
exports.ChatFooterButtonPopup = void 0;
const core_1 = require("../../../../core");
const __paper_clip_svg_1 = __importDefault(require("../../../../image/__paper-clip.svg"));
class ChatFooterButtonPopup extends core_1.Block {
    constructor(_a) {
        var { onPopup } = _a, props = __rest(_a, ["onPopup"]);
        super(Object.assign(Object.assign({}, props), { events: { click: onPopup } }));
    }
    render() {
        return `
  <button for="footer__popup" type="button" class="chat__footer-button">
    <img
      src="${__paper_clip_svg_1.default}"
      alt="Прикрепить"
      class="chat__footer-img"
      for='footer__popup'
    />
  </button>
  
  `;
    }
}
exports.ChatFooterButtonPopup = ChatFooterButtonPopup;
ChatFooterButtonPopup.componentName = "ChatFooterButtonPopup";
//# sourceMappingURL=chat-button-popup.js.map