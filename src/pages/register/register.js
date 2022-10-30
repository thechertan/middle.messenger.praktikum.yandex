"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthApi_1 = __importDefault(require("utils/api/AuthApi"));
const core_1 = require("../../core");
const FormValidator_1 = require("../../utils/FormValidator/FormValidator");
const _input_1 = require("../../components/login-register/__ready-input/_input");
const index_1 = require("../../components/login-register/__input-error/index");
const __button_1 = require("../../components/login-register/__button");
const __link_1 = require("../../components/login-register/__link");
const __ready_input_1 = require("../../components/login-register/__ready-input");
const preloader_1 = __importDefault(require("../../components/preloader/preloader"));
(0, core_1.registerComponent)(preloader_1.default);
(0, core_1.registerComponent)(_input_1.Input);
(0, core_1.registerComponent)(__ready_input_1.ReadyInput);
(0, core_1.registerComponent)(index_1.InputError);
(0, core_1.registerComponent)(__button_1.Button);
(0, core_1.registerComponent)(__link_1.Link);
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
const validator = new FormValidator_1.Validator(objectInputs);
class RegisterPage extends core_1.Block {
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
    toggleAppLoading(state) {
        var _a;
        (_a = this.props.store) === null || _a === void 0 ? void 0 : _a.dispatch({ isLoading: state });
    }
    onSubmit(e) {
        var _a, _b, _c, _d, _e, _f;
        e.preventDefault();
        const inputEmail = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=email]");
        const inputLogin = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("input[name=login]");
        const inputFirstName = (_c = this.element) === null || _c === void 0 ? void 0 : _c.querySelector("input[name=first_name]");
        const inputSecondName = (_d = this.element) === null || _d === void 0 ? void 0 : _d.querySelector("input[name=second_name]");
        const inputPhone = (_e = this.element) === null || _e === void 0 ? void 0 : _e.querySelector("input[name=phone]");
        const inputPassword = (_f = this.element) === null || _f === void 0 ? void 0 : _f.querySelector("input[name=password]");
        this.toggleAppLoading(true);
        AuthApi_1.default
            .signUp({
            email: inputEmail.value,
            login: inputLogin.value,
            first_name: inputFirstName.value,
            second_name: inputSecondName.value,
            phone: inputPhone.value,
            password: inputPassword.value,
        })
            .catch(() => {
            var _a;
            const spanError = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(".register__error_center");
            if (spanError) {
                spanError.textContent = "Что то пошло не так!";
                setTimeout(() => {
                    spanError.textContent = "";
                }, 5000);
            }
        })
            .finally(() => {
            if (this.props.isLoading() === true) {
                this.toggleAppLoading(false);
            }
        });
    }
    render() {
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
exports.default = RegisterPage;
//# sourceMappingURL=register.js.map