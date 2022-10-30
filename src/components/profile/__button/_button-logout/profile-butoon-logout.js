"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileButtonLogout = void 0;
const Block_1 = __importDefault(require("core/Block"));
class ProfileButtonLogout extends Block_1.default {
    constructor({ onClick }) {
        super({ events: { click: onClick } });
    }
    render() {
        // language=hbs
        return `
    <button class="profile__link profile__link_red profile__link_btn" >Выйти</button>
    `;
    }
}
exports.ProfileButtonLogout = ProfileButtonLogout;
ProfileButtonLogout.componentName = "ProfileButtonLogout";
//# sourceMappingURL=profile-butoon-logout.js.map