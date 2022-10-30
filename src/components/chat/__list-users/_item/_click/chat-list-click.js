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
exports.ChatItemClick = void 0;
const core_1 = require("core");
class ChatItemClick extends core_1.Block {
    constructor(_a) {
        var { onClickChat } = _a, props = __rest(_a, ["onClickChat"]);
        super(Object.assign(Object.assign({}, props), { events: { click: onClickChat } }));
    }
    render() {
        return ` 
    <div class="chat__user-info">
      <h2 class="chat__user-name">{{title}}</h2>
      <p class="chat__message">{{last_message}}</p>
    </div>
        `;
    }
}
exports.ChatItemClick = ChatItemClick;
ChatItemClick.componentName = "ChatItemClick";
//# sourceMappingURL=chat-list-click.js.map