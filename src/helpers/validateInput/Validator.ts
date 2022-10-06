import { validateLogin } from "./validate.login";
import { validatePassword } from "./validate.password";
import { validateEmail } from "./validate.email";
import { validateNameLastName } from "./validate.name";
import { validatePhone } from "./validate.phone";
import { validatePasswordConfirm } from "./validate.password-confirm";
import { validateMessage } from "./validator.message";
import { stringify } from "querystring";

interface IisActivButton {
  email?: boolean;
  login?: boolean;
  first_name?: boolean;
  second_name?: boolean;
  phone?: boolean;
  password?: boolean;
  password_confirm?: boolean;
  display_name?: boolean;
  newPassword?: boolean;
  message?: boolean;
}
const isActivButton: IisActivButton = {
  email: false,
  login: false,
  first_name: false,
  second_name: false,
  phone: false,
  password: false,
  password_confirm: false,
  newPassword: false,
  message: false,
};

const isActivButtonProfile: IisActivButton = {
  email: true,
  login: true,
  first_name: true,
  second_name: true,
  display_name: true,
  phone: true,
};

export class Validator {
  public getInput(input: string): HTMLInputElement {
    const inputEl = this.element?.querySelector(
      `input[name=${input}]`
    ) as HTMLInputElement;
    return inputEl;
  }

  public validateInput(name: string, text: string, text2?: string): string {
    let result: string = "";
    switch (name) {
      case "email":
        result = validateEmail(text);
        break;
      case "login":
        result = validateLogin(text);
        break;
      case "login2":
        result = validateLogin(text);
        break;
      case "first_name":
        result = validateNameLastName(text);
        break;
      case "display_name":
        result = validateNameLastName(text);
        break;
      case "second_name":
        result = validateNameLastName(text);
        break;
      case "phone":
        result = validatePhone(text);
        break;
      case "password":
        result = validatePassword(text);
        break;
      case "oldPassword":
        result = validatePassword(text);
        break;
      case "password_confirm":
        result = validatePasswordConfirm(text, text2);
        break;
      case "message":
        result = validateMessage(text);
        break;
      default:
        break;
    }
    return result;
  }
  public checkInput(
    name: string,
    textPwd: string = "",
    buttonAtribute: string
  ): {} {
    const input = this.props.getInput(name);
    const result: string = this.props.validateInput(name, input.value, textPwd);
    const spanError = this.element?.querySelector(
      `#error__${name}`
    ) as HTMLSpanElement;
    if (spanError) {
      spanError.textContent = result;
    }
    if (result.length === 0) {
      this.props.isActiveButton(name, true, buttonAtribute);
    } else this.props.isActiveButton(name, false, buttonAtribute);
    return { input, result };
  }

  public isActiveButton(name: string, status: boolean, buttonAtribute: string) {
    let count: number = 0;
    let isActivButtonRegistor: any;
    const button = this.element?.querySelector(
      `#${buttonAtribute}`
    ) as HTMLButtonElement;
    if (this.state.oneChange) {
      isActivButtonRegistor = isActivButtonProfile;
    } else {
      isActivButtonRegistor = isActivButton;
    }
    isActivButtonRegistor[name] = status;
    for (let value in isActivButtonRegistor) {
      if (isActivButtonRegistor[value]) {
        count++;
      }
      if (count === this.state.count) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  }
// Необходимо передать имя инпута(e.target.name events: idInput!), и для какой кнопки инпут, тег for в кнопке как в label
  public onInput(e: Event) {
    e.preventDefault();
    let input: string;
    try {
      input = e.target.attributes.for.value;      
    } catch (error) {
      input = "button_registor";
    }
    this.props.checkInput(e.target.name, false, input);
  }

  public onFocus(e: Event) {
    e.preventDefault();
    let input: string;
    try {
      input = e.target.attributes.for.value;
    } catch (error) {
      input = "button_registor";
    }
    this.props.checkInput(e.target.name, false, input);
  }

  public onBlur(e: Event) {
    e.preventDefault();
    let input: string;
    try {
      input = e.target.attributes.for.value;
    } catch (error) {
      input = "button_registor";
    }
    this.props.checkInput(e.target.name, false, input);
  }

  public onInputPasswordConfirm(e: Event) {
    e.preventDefault();
    const pwdUp = this.props.getInput("password");
    let input: string;
    try {
      input = e.target.attributes.for.value;
    } catch (error) {
      input = "button_registor";
    }
    this.props.checkInput(e.target.name, pwdUp.value, input);
  }
  public onFocusPasswordConfirm(e: Event) {
    e.preventDefault();
    const pwdUp = this.props.getInput("password");
    let input: string;
    try {
      input = e.target.attributes.for.value;
    } catch (error) {
      input = "button_registor";
    }

    this.props.checkInput(e.target.name, pwdUp.value, input);
  }
  public onBlurPasswordConfirm(e: Event) {
    e.preventDefault();
    const pwdUp = this.props.getInput("password");
    let input: string;
    try {
      input = e.target.attributes.for.value;
    } catch (error) {
      input = "button_registor";
    }
    this.props.checkInput(e.target.name, pwdUp.value, input);
  }
}
