// God Mode => TODO SOLID

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
  count: number;
  modeOneChange: boolean;
  isButton: boolean;
}

export class Validator {
  inputs!: {};

  constructor(objectInputs: IisActivButton) {
    this.inputs = objectInputs || {
      count: 1,
      modeOneChange: false,
      isButton: false,
    };
  }

  public getInput(input: string, context: object): HTMLInputElement {
    const inputEl = context.element?.querySelector(
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
          // eslint-disable-next-line
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
        return result;
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
        } else if (text !== text2) {
          result = "Пароли не совпадают";
        } else result = "";
        return result;
      case "message":
        if (text.length === 0) {
          result = "Поле не может быть пустым";
        }
        return result;

      default:
        if (text.length === 0) {
          result = "Поле не может быть пустым";
        } else if (text.length < 3) {
          result = "Поле должно быть меньше 3 символов";
        }
        return result;
    }
    if (result) {
      return result;
    }
    return "";
  }

  public checkInput(
    name: string,
    textPwd: string,
    buttonAtribute: string | null,
    context: object
  ): {} {
    const input = this.getInput(name, context);
    const result: string = this.validateInput(name, input.value, textPwd);
    const spanError = context.element?.querySelector(
      `#error__${name}`
    ) as HTMLSpanElement;
    if (spanError) {
      spanError.textContent = result;
    }
    if (this.inputs.isButton) {
      if (result.length === 0) {
        this.isActiveButton(name, true, buttonAtribute, context);
      } else this.isActiveButton(name, false, buttonAtribute, context);
    }
    return { input, result };
  }

  public isActiveButton(
    name: string,
    status: boolean,
    buttonAtribute: string | null,
    context: object
  ) {
    let count: number;
    if (this.inputs.modeOneChange) {
      count = -3;
    } else {
      count = -2;
    }
    const button = context.element?.querySelector(
      `#${buttonAtribute}`
    ) as HTMLButtonElement;
    this.inputs[name] = status;
    // eslint-disable-next-line
    for (const value in this.inputs) {
      if (this.inputs[value]) {
        // eslint-disable-next-line
        count++;
      }
      if (this.inputs.modeOneChange) {
        if (count > 0) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      } else if (count === this.inputs.count) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  }

  // Необходимо передать имя инпута(e.target.name events: idInput!), и для какой кнопки инпут, тег for в кнопке как в label
  public onEvents(e: Event, inputPwdUp: string | null, context: object) {
    let input: string;
    let name: string;
    const { target } = e;
    if (context) {
      if (target) {
        name = target.name;
        if (name) {
          if (target.attributes.for) {
            input = target.attributes.for.value;
          } else {
            input = "button_registor";
          }
          this.checkInput(name, (inputPwdUp = ""), input, context);
        } else {
          console.log("У инпута нет id");
        }
      } else {
        console.log("Передайте events");
      }
    } else {
      console.log("Передайте контекст");
    }
  }

  // Точка входа для события input
  public onInput(e: Event, context: object) {
    e.preventDefault();
    this.onEvents(e, "", context);
  }

  // Точка входа для события фокус
  public onFocus(e: Event, context: object) {
    e.preventDefault();
    this.onEvents(e, "", context);
  }

  // Точка входа для события блюр
  public onBlur(e: Event, context: object) {
    e.preventDefault();
    this.onEvents(e, "", context);
  }

  public onInputPasswordConfirm(e: Event, context: object) {
    e.preventDefault();
    const pwdUp: string = this.getInput("password", context).value;
    this.onEvents(e, pwdUp, context);
  }

  public onFocusPasswordConfirm(e: Event, context: object) {
    e.preventDefault();
    const pwdUp: string = this.getInput("password", context).value;
    this.onEvents(e, pwdUp, context);
  }

  public onBlurPasswordConfirm(e: Event, context: object) {
    e.preventDefault();
    const pwdUp: string = this.getInput("password", context).value;
    this.onEvents(e, pwdUp, context);
  }
}
