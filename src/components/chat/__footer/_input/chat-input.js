"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFooterInput = void 0;
const core_1 = require("core");
class ChatFooterInput extends core_1.Block {
    constructor({ onInput, onBlur, onFocus }) {
        super({ events: { focus: onFocus, input: onInput, blur: onBlur } });
    }
    render() {
        return `
    <input
      for='button-send'
      placeholder="Сообщение"
      type="text"
      name="message"
      class="chat__footer-send-message"
    />
    `;
    }
}
exports.ChatFooterInput = ChatFooterInput;
ChatFooterInput.componentName = "ChatFooterInput";
//# sourceMappingURL=chat-input.js.map