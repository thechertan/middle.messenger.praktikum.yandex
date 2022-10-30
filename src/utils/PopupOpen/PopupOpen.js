"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupOpen = void 0;
// @ts-nocheck
class PopupOpen {
    openPopup(e) {
        var _a;
        e.preventDefault();
        try {
            const idPopup = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(`#${e.target.attributes.for.value}`);
            idPopup.classList.toggle("opened");
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.PopupOpen = PopupOpen;
//# sourceMappingURL=PopupOpen.js.map