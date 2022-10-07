import { Block, registerComponent } from "core";
import { Validator } from "helpers/Validator/Validator";
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

const objectInputs = {
  login: false,
  password: false,
  count: 2,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);
export class LoginPage extends Block {
  static componentName = "LoginPage";
  constructor() {
    super();
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
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

  render(): string {
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
        type='password'
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
