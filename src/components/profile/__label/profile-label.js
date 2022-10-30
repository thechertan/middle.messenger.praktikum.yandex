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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileLable = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
class ProfileLable extends Block_1.default {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
    }
    render() {
        // language=hbs
        return `
    <label
    for="{{for}}"
    class="profile__general profile__general_cursor"
    >
    {{text}}
  </label>
    `;
    }
}
exports.ProfileLable = ProfileLable;
ProfileLable.componentName = "ProfileLable";
//# sourceMappingURL=profile-label.js.map