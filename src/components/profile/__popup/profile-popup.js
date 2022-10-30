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
exports.ProfilePopup = void 0;
const core_1 = require("../../../core");
const popup_close_1 = require("./_close/popup-close");
const _btn_1 = require("./_btn");
const index_1 = require("./_inputFile/index");
(0, core_1.registerComponent)(index_1.PopupInputFile);
(0, core_1.registerComponent)(popup_close_1.PopupClose);
(0, core_1.registerComponent)(_btn_1.PopupButton);
class ProfilePopup extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
    }
    render() {
        // language=hbs
        return `
    <!--Чтобы открыть попап нужно добавить клас  popup_opened-->
    <div class="popup" for="{{idName}}" id='popup_type-edit-avatar'>
      <div class="popup__container">
        {{{PopupClose
          onClick=onClick
          for=idName
        }}}  
        <div class="popup__content">
              <h2 class="popup__title">Загрузите файл</h2>
          <form class="popup__form popup_type-edit-avatar" name="popupForm-edit">
            <fieldset class="popup__fieldset">
            {{{PopupInputFile
              onInputFile=onInputFile     
            }}}
              <label class="popup__input-profile_label" for="file">Выбрать файл на компьютере</label>
              {{{PopupButton
                onSubmitPopup=onSubmitPopup
              }}}
              <div class="popup__span-error">
                <span class="popup__error popup__errror_change-chat-avatar"></span>
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
exports.ProfilePopup = ProfilePopup;
ProfilePopup.componentName = "ProfilePopup";
//# sourceMappingURL=profile-popup.js.map