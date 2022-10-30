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
exports.ProfileChangePassword = void 0;
const core_1 = require("core");
const user_1 = require("utils/api/user/");
const FormValidator_1 = require("../../utils/FormValidator/FormValidator");
const profile_input_1 = require("../../components/profile/__input/profile-input");
const profile_error_1 = require("../../components/profile/__error/profile-error");
const profile_label_1 = require("../../components/profile/__label/profile-label");
const profile_button_1 = require("../../components/profile/__button/profile-button");
const profile_change_avatar_1 = require("../../components/profile/__change-avatar/profile-change-avatar");
const profile_popup_1 = require("../../components/profile/__popup/profile-popup");
const defaultAvatar_png_1 = __importDefault(require("../../image/defaultAvatar.png"));
require("./profileChangePassword.css");
const objectInputs = {
    oldPassword: false,
    password: false,
    password_confirm: false,
    count: 3,
    modeOneChange: false,
    isButton: true,
};
const validator = new FormValidator_1.Validator(objectInputs);
(0, core_1.registerComponent)(profile_input_1.ProfileInput);
(0, core_1.registerComponent)(profile_error_1.ProfileError);
(0, core_1.registerComponent)(profile_label_1.ProfileLable);
(0, core_1.registerComponent)(profile_button_1.ProfileButton);
(0, core_1.registerComponent)(profile_change_avatar_1.ProfileChangeAvatar);
(0, core_1.registerComponent)(profile_popup_1.ProfilePopup);
class ProfileChangePassword extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onInput: this.onInput.bind(this),
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onInputPasswordConfirm: this.onInputPasswordConfirm.bind(this),
            onFocusPasswordConfirm: this.onFocusPasswordConfirm.bind(this),
            onBlurPasswordConfirm: this.onBlurPasswordConfirm.bind(this),
            onSubmit: this.onSubmit.bind(this),
        });
        console.log(this.props);
    }
    onInput(e) {
        validator.onInput(e, this);
    }
    onFocus(e) {
        validator.onFocus(e, this);
    }
    onBlur(e) {
        validator.onBlur(e, this);
    }
    onInputPasswordConfirm(e) {
        validator.onInputPasswordConfirm(e, this);
    }
    onFocusPasswordConfirm(e) {
        validator.onFocusPasswordConfirm(e, this);
    }
    onBlurPasswordConfirm(e) {
        validator.onBlurPasswordConfirm(e, this);
    }
    onSubmit(e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        const inputOldPwd = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=oldPassword]");
        const inputNewPwd = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("input[name=password]");
        const button = (_c = this.element) === null || _c === void 0 ? void 0 : _c.querySelector("#button_registor");
        const spanTextError = (_d = this.element) === null || _d === void 0 ? void 0 : _d.querySelector(".profile__error_button");
        user_1.usersApi
            .changePassword(inputOldPwd.value, inputNewPwd.value)
            .then(() => {
            button.disabled = true;
            spanTextError.style.color = "green";
            spanTextError.textContent = "Данные обновлены успешно!";
            setTimeout(() => {
                spanTextError.textContent = "";
            }, 10000);
        })
            .catch(() => {
            button.disabled = false;
            spanTextError.style.color = "red";
            spanTextError.textContent = "Произошла ошибка!";
            setTimeout(() => {
                spanTextError.textContent = "";
            }, 10000);
        });
    }
    render() {
        return `
  <main>
    <section class="profile">
    <div class="profile__back">
      <a href="/settings" class="profile__back-button"></a>
    </div>
    <div class="profile__box">
    {{#if user.avatar}}
    <img class="profile__elipse" src="https://ya-praktikum.tech/api/v2/resources/{{user.avatar}}" alt='Аватар'>
    {{else}} 
    <img class="profile__elipse" src="${defaultAvatar_png_1.default}" alt='Аватар'>
    {{/if}}
      <h1 class="profile__name">{{{user.first_name}}}</h1>
      <form class="profile__form" name="profileData">
        <fieldset class="profile__fieldset">
          <ul class="profile__data">
            <li class="profile__data-item">
            {{{ProfileLable
              text='Старый пароль'
              for='oldPassword' 
            }}}
            {{{ProfileError
              id='error__oldPassword'
            }}}
            {{{ProfileInput
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='password'
              name='oldPassword'
              placeholder='•••••••••••'
            }}}
            </li>
            <li class="profile__data-item">
            {{{ProfileLable
              text='Новый пароль'
              for='password' 
            }}}
            {{{ProfileError
              id='error__password'
            }}}
            {{{ProfileInput
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='password'
              name='password'
              placeholder='•••••••••••'
            }}}
            </li>
            <li class="profile__data-item">
            {{{ProfileLable
              text='Повторите новый пароль'
              for='password_confirm' 
            }}}
            {{{ProfileError
              id='error__password_confirm'
            }}}
            {{{ProfileInput
              onInput=onInputPasswordConfirm
              onBlur=onBlurPasswordConfirm
              onFocus=onFocusPasswordConfirm
              type='password'
              name='password_confirm'
              placeholder='•••••••••••'
            }}}
            </li>
          </ul>
            {{{ProfileButton
              onClick=onSubmit
            }}}
          <div class="profile__span-error">
            <span class="profile__error profile__error_button"></span>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
</main>
`;
    }
}
exports.ProfileChangePassword = ProfileChangePassword;
//# sourceMappingURL=profileChangePassword.js.map