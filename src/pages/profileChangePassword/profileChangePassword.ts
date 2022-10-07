import { Block, registerComponent } from "core";
import { Validator } from "../../helpers/Validator/Validator";
import { ProfileInput } from "../../components/profile/__input/profile-input";
import { ProfileError } from "../../components/profile/__error/profile-error";
import { ProfileLable } from "../../components/profile/__label/profile-label";
import { ProfileButton } from "../../components/profile/__button/profile-button";
import { ProfileChangeAvatar } from "../../components/profile/__change-avatar/profile-change-avatar";
import { ProfilePopup } from "../../components/profile/__popup/profile-popup";

import "./profileChangePassword.css";

const objectInputs = {
  oldPassword: false,
  password: false,
  password_confirm: false,
  count: 3,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);

registerComponent(ProfileInput);
registerComponent(ProfileError);
registerComponent(ProfileLable);
registerComponent(ProfileButton);
registerComponent(ProfileChangeAvatar);
registerComponent(ProfilePopup);

export class ProfileChangePassword extends Block {
  constructor() {
    super();
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      onInputPasswordConfirm: this.onInputPasswordConfirm.bind(this),
      onFocusPasswordConfirm: this.onFocusPasswordConfirm.bind(this),
      onBlurPasswordConfirm: this.onBlurPasswordConfirm.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
  }

  onInput(e: Event) {
    validator.onInput(e, this);
  }

  onFocus(e: Event) {
    validator.onFocus(e, this);
  }
  onBlur(e: Event) {
    validator.onBlur(e, this);
  }

  onInputPasswordConfirm(e: Event) {
    validator.onInputPasswordConfirm(e, this);
  }
  onFocusPasswordConfirm(e: Event) {
    validator.onFocusPasswordConfirm(e, this);
  }

  onBlurPasswordConfirm(e: Event) {
    validator.onBlurPasswordConfirm(e, this);
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const inputOldPwd = this.element?.querySelector(
      "input[name=oldPassword]"
    ) as HTMLInputElement;
    const inputNewPwd = this.element?.querySelector(
      "input[name=password]"
    ) as HTMLInputElement;

    console.log({
      oldPassword: inputOldPwd.value,
      newPassword: inputNewPwd.value,
    });
    const button = this.element?.querySelector("#button_registor");
    if (button) {
      button.disabled = true;
    } else {
      console.log("Кнопка не найдена");
    }
  }

  render() {
    return `
  <main>
    <section class="profile">
    <div class="profile__back">
      <a href="./profile.hbs" class="profile__back-button"></a>
    </div>
    <div class="profile__box">
      <div class="profile__elipse"></div>
      <h1 class="profile__name">Иван</h1>
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
