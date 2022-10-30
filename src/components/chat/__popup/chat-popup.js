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
exports.ChatPopup = void 0;
const core_1 = require("../../../core");
const popup_close_1 = require("./_close/popup-close");
require("./chat-popup.css");
(0, core_1.registerComponent)(popup_close_1.PopupClose);
class ChatPopup extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
    }
    render() {
        // language=hbs
        return `
    <!--Чтобы открыть попап нужно добавить клас  popup_opened-->
    <div class="popup" id='popup_type-edit-avatar'>
      <div class="popup__container">
        {{{PopupClose
          onClick=onClick
        }}}  
        <div class="popup__content">
          <h2 class="popup__title">Загрузите файл</h2>
          <form class="popup__form popup_type-edit-avatar" name="popupForm-edit">
            <fieldset class="popup__fieldset">
              <input
                class="popup__input-profile"
                type="file"
                name="avatar"
                id="file"
              />
              <label class="popup__input-profile_label" for="file"></label>
              <button type="submit" name="save" class="popup__form-submit">
                Поменять
              </button>
              <div class="popup__span-error">
                <span class="popup__error"></span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>="profile__message">Поменять аватар</p>
  </div>
    `;
    }
}
exports.ChatPopup = ChatPopup;
ChatPopup.componentName = "ChatPopup";
//# sourceMappingURL=chat-popup.js.map