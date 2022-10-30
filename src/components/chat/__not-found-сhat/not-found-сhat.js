"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundChat = void 0;
const core_1 = require("../../../core");
require("./not-found-\u0441hat.css");
class NotFoundChat extends core_1.Block {
    render() {
        return `
  <div class="chat__not-found">
    <p class="chat__notifications">
      Выберите чат чтобы отправить сообщение
    </p>
  </div>
      `;
    }
}
exports.NotFoundChat = NotFoundChat;
NotFoundChat.componentName = "NotFoundChat";
//# sourceMappingURL=not-found-%D1%81hat.js.map