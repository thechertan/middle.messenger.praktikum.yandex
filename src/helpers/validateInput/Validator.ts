import { validatePasswordConfirm } from "./validate.password-confirm";
import { validateMessage } from "./validator.message";

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
    let regexp: any;
    let result: string = "";
    switch (name) {
      case "email":
        regexp =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!text.match(regexp)) {
          result = "Это не E-mail";
        }
        break;
      case "login":
      case "login2":
        regexp = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
        if (!text.match(regexp)) {
          result = "Не логин!";
        }
        break;
      case "display_name":
      case "first_name":
      case "second_name":
        regexp = /^[А-Я]{1}[а-я]+$/g;
        if (!text.match(regexp)) {
          result = "Поле заполнено не верно";
        }
        break;
      case "phone":
        regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
        if (!text.match(regexp)) {
          result = "Это не номер телефона";
        }
        return result;
      case "oldPassword":
      case "password":
        regexp = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;
        if (text.length === 0) {
          result = "Пароль не может быть пустым";
        } else if (text.length < 8) {
          result = "Пароль не может быть меньше 8 символов";
        } else if (!text.match(regexp)) {
          result = "Должна быть хотябы 1 заглавная и 1 цифра";
        }
        return result;
      case "password_confirm":
        regexp = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;
        if (text.length === 0) {
          result = "Пароль не может быть пустым";
        } else if (text != text2) {
          result = "Пароли не совпадают";
        } else result = "";
        return result;
      case "message":
        if (text.length === 0) {
          result = "Поле не может быть пустым";
        }
        return result;
    }
    if (text.length === 0) {
      result = "Поле не может быть пустым";
    } else if (text.length < 3) {
      result = "Поле должно быть меньше 3 символов";
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
    console.log(result);

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
  public onInput(e: Event, ) {
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
