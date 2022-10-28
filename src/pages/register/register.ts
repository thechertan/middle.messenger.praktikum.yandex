import authAPI from "utils/api/AuthApi";
import { Block, registerComponent } from "../../core";
import { Validator } from "../../utils/FormValidator/FormValidator";
import { Input } from "../../components/login-register/__ready-input/_input";
import { InputError } from "../../components/login-register/__input-error/index";
import { Button } from "../../components/login-register/__button";
import { Link } from "../../components/login-register/__link";
import { ReadyInput } from "../../components/login-register/__ready-input";
import Preloader from "../../components/preloader/preloader";

registerComponent(Preloader);
registerComponent(Input);
registerComponent(ReadyInput);
registerComponent(InputError);
registerComponent(Button);
registerComponent(Link);

const objectInputs = {
  email: false,
  login: false,
  first_name: false,
  second_name: false,
  phone: false,
  password: false,
  password_confirm: false,
  count: 7,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);

class RegisterPage extends Block {
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

  toggleAppLoading(state: boolean) {
    this.props.store?.dispatch({ isLoading: state });
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
    const inputPassword = this.element?.querySelector(
      "input[name=password]"
    ) as HTMLInputElement;

    this.toggleAppLoading(true);
    authAPI
      .signUp({
        email: inputEmail.value,
        login: inputLogin.value,
        first_name: inputFirstName.value,
        second_name: inputSecondName.value,
        phone: inputPhone.value,
        password: inputPassword.value,
      })
      .catch(() => {
        const spanError: HTMLElement | undefined | null =
          this.element?.querySelector(".register__error_center");
        if (spanError) {
          spanError.textContent = "Что то пошло не так!";
          setTimeout(() => {
            spanError!.textContent = "";
          }, 5000);
        }
      })
      .finally(() => {
        if (this.props.isLoading() === true) {
          this.toggleAppLoading(false);
        }
      });
  }

  render(): string {
    return `
  <main class="main">
  {{#if isLoading}}{{{Preloader}}}{{/if}}
  <section class="register">
  <div class="register__container">
    <h1 class="register__welcome">Регистрация</h1>
    <form class="register__form">
      <fieldset class="register__fieldset register__fieldset_register">
        {{{ReadyInput 
          onInput=onInput
          onBlur=onBlur 
          onFocus=onFocus
          type='email'
          label='email'
          name='email'
          text='Почта'
        }}}
        {{{InputError
          className='register__error'
          id='error__email'
        }}}
        {{{ReadyInput 
          onInput=onInput
          onBlur=onBlur
          onFocus=onFocus
          type='text'
          label='login'
          name='login'
          text='Логин'
        }}}
       {{{InputError
        className='register__error'
        id='error__login'
       }}}
       {{{ReadyInput 
        onInput=onInput
        onBlur=onBlur
        onFocus=onFocus
        type='text'
        label='first_name'
        name='first_name'
        text='Имя'
        }}}
       {{{InputError
        className='register__error'
        id='error__first_name'
       }}}
       {{{ReadyInput 
        onInput=onInput
        onBlur=onBlur
        onFocus=onFocus
        type='text'
        label='second_name'
        name='second_name'
        text='Фамилия'
        }}}
       {{{InputError
        className='register__error'
        id='error__second_name'
       }}}
       {{{ReadyInput 
        onInput=onInput
        onBlur=onBlur
        onFocus=onFocus
        type='text'
        label='phone'
        name='phone'
        text='Телефон'
        }}}
       {{{InputError
        className='register__error'
        id='error__phone'
       }}}
       {{{ReadyInput 
        onInput=onInput
        onBlur=onBlur
        onFocus=onFocus
        type='password'
        label='password'
        name='password'
        text='Пароль'
        }}}
       {{{InputError
        className='register__error'
        id='error__password'
       }}}
       {{{ReadyInput 
        onInput=onInputPasswordConfirm
        onBlur=onBlurPasswordConfirm
        onFocus=onFocusPasswordConfirm
        type='password'
        label='password'
        name='password_confirm'
        text='Пароль (ещё раз)'
        }}}
       {{{InputError
        className='register__error'
        id='error__password_confirm'
       }}}
      </fieldset>
      {{{Button
        className="register__form-submit register__form-submit_login" 
        onClick=onSubmit
        disabled=isActivButton
        text="Зарегистрироваться"
        id='button_registor'
      }}}
      {{{InputError
        text='' 
        className='register__error register__error_center'
       }}}
    </form>
    {{{Link to='/' text='Нет аккаунта?' className='register__link'}}}
</div>
</main>
`;
  }
}

export default RegisterPage;
