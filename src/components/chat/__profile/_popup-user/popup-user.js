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
exports.PopupUser = void 0;
const core_1 = require("core");
const close_user_1 = require("./_close-user/close-user");
const input_popup_1 = require("./_input-popup/input-popup");
const popup_login_submit_1 = require("./_buttton-submit/popup-login-submit");
(0, core_1.registerComponent)(close_user_1.PopupCloseUser);
(0, core_1.registerComponent)(input_popup_1.InputChatPopup);
(0, core_1.registerComponent)(popup_login_submit_1.PopupLoginSubmit);
class PopupUser extends core_1.Block {
    constructor(_a) {
        var { onPopup, onFocus, onBlur, onInput, onSubmit } = _a, props = __rest(_a, ["onPopup", "onFocus", "onBlur", "onInput", "onSubmit"]);
        super(Object.assign(Object.assign({}, props), { onPopup,
            onInput,
            onBlur,
            onFocus,
            onSubmit }));
    }
    render() {
        return `
    <div class="popup" id='{{idName}}'>
    <div class="popup__container" >
      {{{PopupCloseUser
      onClick=onPopup
      idName=idName
      }}}
      <div class="popup__content">
        <h2 class="popup__title">{{text}}</h2>
        <form
          class="popup__form popup_type-edit-avatar"
          name="popupForm-edit"
          novalidate
        >
          <fieldset class="popup__fieldset">
          {{#if nameLabel}}     
            <label class="popup__label-chat" for="login">
            {{nameLabel}}
            </label>
          {{else}}
            <label class="popup__label-chat" for="login">
            Логин
          </label>
           {{/if}}
            {{{InputChatPopup
              type='text'
              name=idInput
              onFocus=onFocus
              onBlur=onBlur
              onInput=onInput
            }}}
            {{{PopupLoginSubmit
            idInput=idInput
            textButton=textButton
            onSubmit=onSubmit
            }}}
            <div  class="popup__span-error">
              <span  id='error__{{idInput}}' class="popup__error"></span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  `;
    }
}
exports.PopupUser = PopupUser;
PopupUser.componentName = "PopupUser";
//# sourceMappingURL=popup-user.js.map