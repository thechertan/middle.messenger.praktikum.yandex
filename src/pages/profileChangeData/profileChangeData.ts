import { usersApi } from "utils/api/user/";
import { Store, Block, registerComponent } from "../../core";
import { Validator } from "../../utils/FormValidator/FormValidator";
import { ProfileInput } from "../../components/profile/__input/profile-input";
import { ProfileError } from "../../components/profile/__error/profile-error";
import { ProfileLable } from "../../components/profile/__label/profile-label";
import { ProfileButton } from "../../components/profile/__button/profile-button";
import { ProfileChangeAvatar } from "../../components/profile/__change-avatar/profile-change-avatar";
import { ProfilePopup } from "../../components/profile/__popup/profile-popup";

import "./profileChangeData.css";

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

type TProfileChangeDataPage = {
  store?: Store<AppState>;
  onInput?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onBlur?: (e: Event) => void;
  onPopup?: (e: Event) => void;
  onSubmit?: (e: Event) => void;
  user?: () => any;
  onSubmitPopup?: (e: Event) => void;
  onInputFile?: (e: Event) => void;
};

const validator = new Validator(objectInputs);

registerComponent(ProfileInput);
registerComponent(ProfileError);
registerComponent(ProfileLable);
registerComponent(ProfileButton);
registerComponent(ProfileChangeAvatar);
registerComponent(ProfilePopup);

class ProfileChangeDataPage extends Block<TProfileChangeDataPage> {
  constructor({ ...props }) {
    super({ ...props });
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

  onInput(e: Event) {
    validator.onInput(e, this);
  }

  onFocus(e: Event) {
    validator.onFocus(e, this);
  }

  onBlur(e: Event) {
    validator.onBlur(e, this);
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
    const button = this.element?.querySelector("#button_registor");
    const buttonError = this.element?.querySelector(".profile__error_button");

    const data = {
      email: inputEmail.value,
      login: inputLogin.value,
      first_name: inputFirstName.value,
      second_name: inputSecondName.value,
      phone: inputPhone.value,
      display_name: inputChatName.value,
    };

    usersApi
      .changeProfile(data)
      .then(() => {
        buttonError!.style.color = "green";
        buttonError!.textContent = "Данные обновленны успешно!";
        setTimeout(() => {
          buttonError!.style.color = "red";
          buttonError!.textContent = "";
        }, 5000);
      })
      .catch(() => {
        buttonError!.textContent = "Произошла ошибка попробуйте позже!";
      });

    button!.disabled = true;
  }

  onInputFile(e: Event) {
    e.preventDefault();
    const button = this.element?.querySelector(
      ".popup__form-file-submit"
    ) as HTMLButtonElement;
    const inputLabel = this.element?.querySelector(
      ".popup__input-profile_label"
    ) as HTMLInputElement;

    if (e.target) {
      button!.disabled = false;
      const inputElement = e.target as HTMLInputElement;
      inputLabel!.textContent = inputElement.files[0].name;
    }
  }

  onSubmitPopup(e: Event) {
    e.preventDefault();
    const inputFile = this.element?.querySelector(
      ".popup__input-profile"
    ) as HTMLInputElement;
    console.log(inputFile);
    const errorText = this.element?.querySelector(
      ".popup__error"
    ) as HTMLSpanElement;

    const formData = new FormData();
    formData.append("avatar", inputFile.files[0]);
    usersApi
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
export default ProfileChangeDataPage;
