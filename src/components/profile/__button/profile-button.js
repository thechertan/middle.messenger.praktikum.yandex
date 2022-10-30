"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileButton = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
class ProfileButton extends Block_1.default {
    constructor({ onClick }) {
        super({ events: { click: onClick } });
    }
    render() {
        // language=hbs
        return `
    <button
      type="submit"
      name="save"
      class="profile__form-submit"
      id='button_registor'
      disabled
    >Сохранить
    </button>
    `;
    }
}
exports.ProfileButton = ProfileButton;
ProfileButton.componentName = "ProfileButton";
//# sourceMappingURL=profile-button.js.map