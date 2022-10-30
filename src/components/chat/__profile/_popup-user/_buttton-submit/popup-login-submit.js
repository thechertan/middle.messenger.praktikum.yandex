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
exports.PopupLoginSubmit = void 0;
const core_1 = require("core");
class PopupLoginSubmit extends core_1.Block {
    constructor(_a) {
        var { onSubmit } = _a, props = __rest(_a, ["onSubmit"]);
        super(Object.assign({ events: { click: onSubmit } }, props));
    }
    render() {
        return `
      <button id='{{idInput}}' type="submit" name="save" class="popup__form-submit" disabled>
      {{textButton}}
    </button>
      `;
    }
}
exports.PopupLoginSubmit = PopupLoginSubmit;
PopupLoginSubmit.componentName = "PopupLoginSubmit";
//# sourceMappingURL=popup-login-submit.js.map