import { Block } from "core";
import { Validator } from "helpers/validateInput/Validator";
const validator = new Validator();

class LoginPage extends Block {
  constructor() {
    super();
    this.setProps({
      onInput: validator.onInput.bind(this),
      onFocus: validator.onFocus.bind(this),
      onBlur: validator.onBlur.bind(this),
      getInput: validator.getInput.bind(this),
      validateInput: validator.validateInput.bind(this),
      isActiveButton: validator.isActiveButton.bind(this),
      checkInput: validator.checkInput.bind(this),
      onSubmit: this.onSubmit.bind(this),
    }), 
    this.setState({
      count: 2,
      oneChange: false,
    })
  }

public onSubmit(e: Event): void {
    e.preventDefault();
    const inputLogin = this.element?.querySelector(
      "input[name=login]"
    ) as HTMLInputElement;
    const inputPassword = this.element?.querySelector(
      "input[name=password]"
    ) as HTMLInputElement;
    console.log({
      login: inputLogin.value,
      password: inputPassword.value,
    });
  }

public render(): string {
    return `
  <main class="main">
  <section class="register">
  <div class="register__container">
    <h1 class="register__welcome">Вход</h1>
    <form class="register__form">
      <fieldset class="register__fieldset">
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
        text='Пароль' 
        label='password' 
        name='password'
      }}}
      {{{InputError 
        className='register__error'
        id='error__password'
      }}}
      </fieldset>
      {{{Button 
        text="Авторизоваться" 
        className="register__form-submit register__form-submit_login" 
        disabled=isActivButton
        onClick=onSubmit
        id='button_registor'
      }}}
      {{{InputError
        text=''
        className='register__error register__error_center'
        id='error__button'
      }}}
    </form>
    {{{Link to='./register.hbs' text='Нет аккаунта?' className='register__link'}}}
  </div>
</section>
</main>
`;
  }
}

export { LoginPage };
