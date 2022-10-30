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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAdd = void 0;
const core_1 = require("core");
class ChatAdd extends core_1.Block {
    constructor(_a) {
        var { onPopupAddChat } = _a, props = __rest(_a, ["onPopupAddChat"]);
        super(Object.assign(Object.assign({}, props), { events: { click: onPopupAddChat } }));
    }
    render() {
        return ` 
    <button for={{for}} class="chat__button-add-chat">Добавить чат </button>

        `;
    }
}
exports.ChatAdd = ChatAdd;
ChatAdd.componentName = "ChatAdd";
//# sourceMappingURL=chat-add.js.map