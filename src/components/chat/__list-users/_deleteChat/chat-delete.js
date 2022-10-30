"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDelete = void 0;
const core_1 = require("core");
class ChatDelete extends core_1.Block {
    constructor({ onDeleteClick }) {
        super({ events: { click: onDeleteClick } });
    }
    render() {
        return ` 
  <div class="chat__remove-position">
    <span class="chat__remove"></span>
  </div>
        `;
    }
}
exports.ChatDelete = ChatDelete;
ChatDelete.componentName = "ChatDelete";
//# sourceMappingURL=chat-delete.js.map