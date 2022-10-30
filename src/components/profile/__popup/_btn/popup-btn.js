"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupButton = void 0;
const Block_1 = __importDefault(require("core/Block"));
class PopupButton extends Block_1.default {
    constructor({ onSubmitPopup }) {
        super({ events: { click: onSubmitPopup } });
    }
    render() {
        return `
    <button type="click" name="save" class="popup__form-submit popup__form-file-submit" disabled>
    Поменять
    </button>
       `;
    }
}
exports.PopupButton = PopupButton;
PopupButton.componentName = "PopupButton";
//# sourceMappingURL=popup-btn.js.map