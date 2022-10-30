"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupClose = void 0;
const Block_1 = __importDefault(require("../../../../core/Block"));
class PopupClose extends Block_1.default {
    constructor({ onClick }) {
        super({ events: { click: onClick } });
    }
    render() {
        return `
      <button for={{for}}  class="popup__button-close" name="close" type="button" for='add__user'></button>
    `;
    }
}
exports.PopupClose = PopupClose;
PopupClose.componentName = "PopupClose";
//# sourceMappingURL=popup-close.js.map