import { Block, registerComponent } from "../../core";
import { Validator } from "../../helpers/Validator/Validator";
import { ProfileInput } from "../../components/profile/__input/profile-input";
import { ProfileError } from "../../components/profile/__error/profile-error";
import { ProfileLable } from "../../components/profile/__label/profile-label";
import { ProfileButton } from "../../components/profile/__button/profile-button";
import { ProfileChangeAvatar } from "../../components/profile/__change-avatar/profile-change-avatar";
import { ProfilePopup } from "../../components/profile/__popup/profile-popup";

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

const validator = new Validator(objectInputs);

registerComponent(ProfileInput);
registerComponent(ProfileError);
registerComponent(ProfileLable);
registerComponent(ProfileButton);
registerComponent(ProfileChangeAvatar);
registerComponent(ProfilePopup);

import "./profileChangeData.css";

class ProfileChangeDataPage extends Block {
  constructor() {
    super();
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      onPopup: this.onPopup.bind(this),
      handlerAvatar: this.handlerAvatar.bind(this),
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

  handlerAvatar(e: Event) {
    e.stopPropagation();
    const profileAvatar: HTMLElement | null | undefined =
      this.element?.querySelector("#avatar");
    if (profileAvatar?.textContent) {
      profileAvatar.textContent = "";
    } else {
      profileAvatar.textContent = "Поменять аватар?";
    }
  }

  onPopup(e: Event) {
    e.stopPropagation();
    const popup: HTMLElement | null | undefined = this.element?.querySelector(
      "#popup_type-edit-avatar"
    );
    popup?.classList.toggle("popup_opened");
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const inputEmail = this.element?.querySelector(
      "input[name=email]"
    ) as HTMLInputElement;
    const inputLogin = this.element?.querySelector(
      "input[name=login]"
    ) as HTMLInputElement;
    const inputFirstName = this.element?.querySelector(
      "input[name=first_name]"
    ) as HTMLInputElement;
    const inputSecondName = this.element?.querySelector(
      "input[name=second_name]"
    ) as HTMLInputElement;
    const inputPhone = this.element?.querySelector(
      "input[name=phone]"
    ) as HTMLInputElement;
    const inputChatName = this.element?.querySelector(
      "input[name=display_name]"
    ) as HTMLInputElement;

    console.log({
      email: inputEmail.value,
      login: inputLogin.value,
      first_name: inputFirstName.value,
      second_name: inputSecondName.value,
      phone: inputPhone.value,
      display_name: inputChatName.value,
    });
    const button = this.element?.querySelector("#button_registor");
    button.disabled = true;
  }

  render() {
    return `
  <main>
  <section class="profile">
  <div class="profile__back">
    <a href="./profile.hbs" class="profile__back-button"></a>
  </div>
  <div class="profile__box" >
    {{{ProfileChangeAvatar
      onClick=onPopup
      onChange=handlerAvatar
    }}}
    <h1 class="profile__name">Иван</h1>
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
              value='login@mail.ru'
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
              value='Login'
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
              value='Имя'
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
              value='Фамилия'
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
              value='Иван'
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
            value='+7 (909) 967 30 30'
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
    onClick=onPopup
  }}}
</main>
`;
  }
}

export { ProfileChangeDataPage };
