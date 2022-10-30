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
const user_1 = require("utils/api/user/");
const core_1 = require("../../core");
const FormValidator_1 = require("../../utils/FormValidator/FormValidator");
const profile_input_1 = require("../../components/profile/__input/profile-input");
const profile_error_1 = require("../../components/profile/__error/profile-error");
const profile_label_1 = require("../../components/profile/__label/profile-label");
const profile_button_1 = require("../../components/profile/__button/profile-button");
const profile_change_avatar_1 = require("../../components/profile/__change-avatar/profile-change-avatar");
const profile_popup_1 = require("../../components/profile/__popup/profile-popup");
require("./profileChangeData.css");
const objectInputs = {
    email: true,
    login: true,
    first_name: true,
    second_name: true,
    display_name: true,
    phone: true,
    count: 6,
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
class ProfileChangeDataPage extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onInput: this.onInput.bind(this),
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onPopup: this.onPopup.bind(this),
            onSubmit: this.onSubmit.bind(this),
            onSubmitPopup: this.onSubmitPopup.bind(this),
            onInputFile: this.onInputFile.bind(this),
        });
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
    onPopup(e) {
        var _a;
        e.stopPropagation();
        const popup = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("#popup_type-edit-avatar");
        popup === null || popup === void 0 ? void 0 : popup.classList.toggle("popup_opened");
    }
    onSubmit(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        e.preventDefault();
        const inputEmail = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=email]");
        const inputLogin = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("input[name=login]");
        const inputFirstName = (_c = this.element) === null || _c === void 0 ? void 0 : _c.querySelector("input[name=first_name]");
        const inputSecondName = (_d = this.element) === null || _d === void 0 ? void 0 : _d.querySelector("input[name=second_name]");
        const inputPhone = (_e = this.element) === null || _e === void 0 ? void 0 : _e.querySelector("input[name=phone]");
        const inputChatName = (_f = this.element) === null || _f === void 0 ? void 0 : _f.querySelector("input[name=display_name]");
        const button = (_g = this.element) === null || _g === void 0 ? void 0 : _g.querySelector("#button_registor");
        const buttonError = (_h = this.element) === null || _h === void 0 ? void 0 : _h.querySelector(".profile__error_button");
        const data = {
            email: inputEmail.value,
            login: inputLogin.value,
            first_name: inputFirstName.value,
            second_name: inputSecondName.value,
            phone: inputPhone.value,
            display_name: inputChatName.value,
        };
        user_1.usersApi
            .changeProfile(data)
            .then(() => {
            buttonError.style.color = "green";
            buttonError.textContent = "Данные обновленны успешно!";
            setTimeout(() => {
                buttonError.style.color = "red";
                buttonError.textContent = "";
            }, 5000);
        })
            .catch(() => {
            buttonError.textContent = "Произошла ошибка попробуйте позже!";
        });
        button.disabled = true;
    }
    onInputFile(e) {
        var _a, _b;
        e.preventDefault();
        const button = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(".popup__form-file-submit");
        const inputLabel = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector(".popup__input-profile_label");
        if (e.target) {
            button.disabled = false;
            const inputElement = e.target;
            if (inputElement.files)
                inputLabel.textContent = inputElement.files[0].name;
        }
    }
    onSubmitPopup(e) {
        var _a, _b;
        e.preventDefault();
        const inputFile = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(".popup__input-profile");
        console.log(inputFile);
        const errorText = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector(".popup__error");
        const formData = new FormData();
        if (!inputFile.files)
            return;
        formData.append("avatar", inputFile.files[0]);
        user_1.usersApi
            .changeProfileAvatar(formData)
            .then((res) => {
            window.store.dispatch({ user: JSON.parse(res.response) });
            console.log(res);
        })
            .catch((err) => {
            if (errorText) {
                errorText.textContent = "Произошла ошибка";
                setTimeout(() => {
                    errorText.textContent = "";
                }, 5000);
            }
            console.log(err);
        });
    }
    render() {
        return `

  <main>
  <section class="profile">
  <div class="profile__back">
    <a href="/settings" class="profile__back-button"></a>
  </div>
  <div class="profile__box" >
    {{{ProfileChangeAvatar
      onClick=onPopup
      onChange=handlerAvatar
      userAvatar=user.avatar
    }}}
    <h1 class="profile__name">{{{user.first_name}}}</h1>
    <form class="profile__form" name="profileData">
      <fieldset class="profile__fieldset">
        <ul class="profile__data">
          <li class="profile__data-item">
            {{{ProfileLable
              text='Почта'
              for='email'
            }}}
            {{{ProfileError
              id='error__email'
            }}}
            {{{ProfileInput
              value=user.email
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='email'
              name='email'
              text='Почта'
            }}}
          </li>
          <li class="profile__data-item">
            {{{ProfileLable
              text='Логин'
              for='login'
            }}}
            {{{ProfileError
              id='error__login'
            }}}
            {{{ProfileInput
              value=user.login
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='text'
              name='login'
              text='Почта'
            }}}
          </li>
          <li class="profile__data-item">
            {{{ProfileLable
               text='Имя'
               for='first_name' 
            }}}
            {{{ProfileError
              id='error__first_name'
            }}}
            {{{ProfileInput
              value=user.first_name
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='text'
              name='first_name'
              text='Имя'
            }}}
          </li>
          <li class="profile__data-item">
            {{{ProfileLable
              text='Фамилия'
              for='second_name' 
            }}}
            {{{ProfileError
              id='error__second_name'
            }}}
            {{{ProfileInput
              value=user.second_name
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='text'
              name='second_name'
              text='Фамилия'
            }}}
          </li>
          <li class="profile__data-item">
            {{{ProfileLable
              text='Имя в чате'
              for='display_name' 
            }}}
            {{{ProfileError
              id='error__display_name'
            }}}
            {{{ProfileInput
              value=user.display_name
              onInput=onInput
              onBlur=onBlur
              onFocus=onFocus
              type='text'
              name='display_name'
              text='Имя'
            }}}
          </li>
        <li class="profile__data-item">
          {{{ProfileLable
            text='Телефон'
            for='phone' 
          }}}
          {{{ProfileError
            id='error__phone'
          }}}
          {{{ProfileInput
            value=user.phone
            onInput=onInput
            onBlur=onBlur
            onFocus=onFocus
            type='text'
            name='phone'
            text='Телефон'
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
  {{{ProfilePopup
    onInputFile=onInputFile
    onClick=onPopup
    onSubmitPopup=onSubmitPopup
    onInputFile=onInputFile
  }}}
</main>

`;
    }
}
exports.default = ProfileChangeDataPage;
//# sourceMappingURL=profileChangeData.js.map