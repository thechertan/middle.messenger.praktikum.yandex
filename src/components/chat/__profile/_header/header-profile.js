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
exports.HeaderProfile = void 0;
const core_1 = require("core");
class HeaderProfile extends core_1.Block {
    constructor(_a) {
        var porps = __rest(_a, []);
        super(Object.assign({}, porps));
        this.setProps({});
    }
    render() {
        return `
    <div class="chat__header">
      <div class="chat__user-container">
      {{#if img}}
      <img  src="https://ya-praktikum.tech/api/v2/resources/{{img}}" alt="Аватар" class="chat__avatar-activ-chat"/>
      {{else}}
        <div class="chat__user-avatar"></div>
      {{/if}}
        <h1 class="chat__name">{{name}}</h1>
      </div>
    </div>
      `;
    }
}
exports.HeaderProfile = HeaderProfile;
HeaderProfile.componentName = "HeaderProfile";
//# sourceMappingURL=header-profile.js.map