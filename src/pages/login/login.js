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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const FormValidator_1 = require("utils/FormValidator/FormValidator");
const AuthApi_1 = __importDefault(require("utils/api/AuthApi"));
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
    login: false,
    password: false,
    count: 2,
    modeOneChange: false,
    isButton: true,
};
const validator = new FormValidator_1.Validator(objectInputs);
class LoginPage extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onInput: this.onInput.bind(this),
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onSubmit: this.onSubmit.bind(this),
        });
    }
    toggleAppLoading(state) {
        window.store.dispatch({ isLoading: state });
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
    onSubmit(e) {
        var _a, _b, _c;
        e.preventDefault();
        const inputLogin = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=login]");
        const inputPassword = (_b = this.element) === null || _b === void 0 ? void 0 : _b.querySelector("input[name=password]");
        const spanButtonError = (_c = this.element) === null || _c === void 0 ? void 0 : _c.querySelector("#error__button");
        AuthApi_1.default.logout();
        AuthApi_1.default
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
    render() {
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
exports.default = LoginPage;
LoginPage.componentName = "LoginPage";
//# sourceMappingURL=login.js.map