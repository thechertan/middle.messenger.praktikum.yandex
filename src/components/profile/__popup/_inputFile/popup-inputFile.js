"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupInputFile = void 0;
const Block_1 = __importDefault(require("../../../../core/Block"));
class PopupInputFile extends Block_1.default {
    constructor({ onInputFile }) {
        super({ events: { input: onInputFile } });
    }
    render() {
        return `
    <input
    class="popup__input-profile popup__input-avatar-chat"
    type="file"
    name="avatar"
    id="file"
    accept="image/*,.png,.jpg,"
    />
    `;
    }
}
exports.PopupInputFile = PopupInputFile;
PopupInputFile.componentName = "PopupInputFile";
//# sourceMappingURL=popup-inputFile.js.map