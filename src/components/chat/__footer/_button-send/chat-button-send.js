"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatButtonSend = void 0;
const core_1 = require("../../../../core");
const __button_back_svg_1 = __importDefault(require("../../../../image/__button-back.svg"));
class ChatButtonSend extends core_1.Block {
    constructor({ onClick }) {
        super({ events: { click: onClick } });
    }
    render() {
        return `
    <button 
      id="button-send"
      class="chat__footer-button chat__footer-button_send" 
      disabled
    >
        <img
        src="${__button_back_svg_1.default}"
        alt="Отправить"
        class="chat__footer-send "
        />
    </button>
    `;
    }
}
exports.ChatButtonSend = ChatButtonSend;
ChatButtonSend.componentName = "ChatButtonSend";
//# sourceMappingURL=chat-button-send.js.map