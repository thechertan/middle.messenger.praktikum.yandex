"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupCloseUser = void 0;
const Block_1 = __importDefault(require("core/Block"));
class PopupCloseUser extends Block_1.default {
    constructor({ onClick, idName }) {
        super({ idName, events: { click: onClick } });
    }
    render() {
        return `
      <button for='{{idName}}' class="popup__button-close" name="close" type="button"></button>
    `;
    }
}
exports.PopupCloseUser = PopupCloseUser;
PopupCloseUser.componentName = "PopupCloseUser";
//# sourceMappingURL=close-user.js.map