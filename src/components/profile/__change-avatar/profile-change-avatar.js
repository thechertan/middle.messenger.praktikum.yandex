"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileChangeAvatar = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
const defaultAvatar_png_1 = __importDefault(require("../../../image/defaultAvatar.png"));
class ProfileChangeAvatar extends Block_1.default {
    constructor({ onClick, onChange, userAvatar }) {
        super({
            userAvatar,
            events: { click: onClick, mouseover: onChange },
        });
    }
    render() {
        return `
    {{#if userAvatar}}
    <img id='avatar' class="profile__elipse profile__elipse_change" src="https://ya-praktikum.tech/api/v2/resources/{{userAvatar}}" alt='Аватар'>
    {{else}} 
    <img  id='avatar' class="profile__elipse profile__elipse_change" src="${defaultAvatar_png_1.default}" alt='Аватар'>
    {{/if}}
    `;
    }
}
exports.ProfileChangeAvatar = ProfileChangeAvatar;
ProfileChangeAvatar.componentName = "ProfileChangeAvatar";
//# sourceMappingURL=profile-change-avatar.js.map