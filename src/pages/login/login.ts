import { Block, registerComponent } from "core";
import { Validator } from "utils/FormValidator/FormValidator";
import authAPI from "utils/api/AuthApi";
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
  login: false,
  password: false,
  count: 2,
  modeOneChange: false,
  isButton: true,
};

type TLoginPage = {
  onInput?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onBlur?: (e: Event) => void;
  onPopup?: (e: Event) => void;
  handlerAvatar?: (e: Event) => void;
  onSubmit?: (e: Event) => void;
  toggleAppLoading?: () => void;
  isLoading?: () => boolean;
};

const validator = new Validator(objectInputs);
export default class LoginPage extends Block<TLoginPage> {
  static componentName = "LoginPage";

  constructor({ ...props }) {
    super({ ...props });
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
  }

  toggleAppLoading(state: boolean) {
    this.props.store!.dispatch({ isLoading: state });
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
    const spanButtonError = this.element?.querySelector(
      "#error__button"
    ) as HTMLSpanElement;

    authAPI
      .signIn({ login: inputLogin.value, password: inputPassword.value })
      .then(() => {
        this.toggleAppLoading(true);
      })
      .catch((res) => {
        if (res.status === 401) {
          spanButtonError.textContent = "Произошла ошибка";
          setTimeout(() => {
            spanButtonError.textContent = "";
          }, 5000);
        }
      })
      .finally(() => {
        // @ts-expect-error this is not typed
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
    {{{Link to='/sign-up' text='Нет аккаунта?' className='register__link'}}}
  </div>
</section>
</main>
`;
  }
}
