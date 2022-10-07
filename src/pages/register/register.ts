import { Block, registerComponent } from "../../core";
import { Validator } from "../../helpers/validateInput/Validator";
import { Input } from "../../components/login-register/__ready-input/_input";
import { InputError } from "../../components/login-register/__input-error/index";
import { Button } from "../../components/login-register/__button";
import { Link } from "../../components/login-register/__link";
import { ReadyInput } from "../../components/login-register/__ready-input";

registerComponent(Input);
registerComponent(ReadyInput);
registerComponent(InputError);
registerComponent(Button);
registerComponent(Link);

const validator = new Validator();

class RegisterPage extends Block {
  constructor() {
    super();
    this.setProps({
      onInput: validator.onInput.bind(this),
      onFocus: validator.onFocus.bind(this),
      onBlur: validator.onBlur.bind(this),
      onInputPasswordConfirm: validator.onInputPasswordConfirm.bind(this),
      onFocusPasswordConfirm: validator.onFocusPasswordConfirm.bind(this),
      onBlurPasswordConfirm: validator.onBlurPasswordConfirm.bind(this),
      getInput: validator.getInput.bind(this),
      validateInput: validator.validateInput.bind(this),
      isActiveButton: validator.isActiveButton.bind(this),
      checkInput: validator.checkInput.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
    this.setState({
      count: 7,
      oneChange: false,
    });
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

    console.log({
      email: inputEmail.value,
      login: inputLogin.value,
      first_name: inputFirstName.value,
      second_name: inputSecondName.value,
      phone: inputPhone.value,
      password: inputPassword.value,
    });
  }

  render(): string {
    return `
  <main class="main">
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
    {{{Link to='./login.hbs' text='Нет аккаунта?' className='register__link'}}}
</div>
</main>
`;
  }
}

export { RegisterPage };
