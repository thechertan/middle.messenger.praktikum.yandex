"use strict";
// God Mode => TODO SOLID
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    constructor(objectInputs) {
        this.inputs = objectInputs || {
            count: 1,
            modeOneChange: false,
            isButton: false,
        };
    }
    getInput(input, context) {
        var _a;
        // @ts-expect-error this is not typed
        const inputEl = (_a = context.element) === null || _a === void 0 ? void 0 : _a.querySelector(`input[name=${input}]`);
        return inputEl;
    }
    validateInput(name, text, text2) {
        let regexp;
        let result = "";
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
                }
                else if (text.length < 8) {
                    result = "Пароль не может быть меньше 8 символов";
                }
                else if (!text.match(regexp)) {
                    result = "Должна быть хотябы 1 заглавная и 1 цифра";
                }
                return result;
            case "password_confirm":
                regexp = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;
                if (text.length === 0) {
                    result = "Пароль не может быть пустым";
                }
                else if (text !== text2) {
                    result = "Пароли не совпадают";
                }
                else
                    result = "";
                return result;
            case "message":
                if (text.length === 0) {
                    result = "Поле не может быть пустым";
                }
                return result;
            default:
                if (text.length === 0) {
                    result = "Поле не может быть пустым";
                }
                else if (text.length < 3) {
                    result = "Поле должно быть меньше 3 символов";
                }
                return result;
        }
        if (result) {
            return result;
        }
        return "";
    }
    checkInput(name, textPwd, buttonAtribute, context) {
        var _a;
        if (!textPwd) {
            textPwd = "";
        }
        const input = this.getInput(name, context);
        const result = this.validateInput(name, input.value, textPwd);
        // @ts-expect-error this is not typed
        const spanError = (_a = context.element) === null || _a === void 0 ? void 0 : _a.querySelector(`#error__${name}`);
        if (spanError) {
            spanError.textContent = result;
        }
        // @ts-expect-error this is not typed
        if (this.inputs.isButton) {
            if (result.length === 0) {
                this.isActiveButton(name, true, buttonAtribute, context);
            }
            else
                this.isActiveButton(name, false, buttonAtribute, context);
        }
        return { input, result };
    }
    isActiveButton(name, status, buttonAtribute, context) {
        var _a;
        let count;
        // @ts-expect-error this is not typed
        if (this.inputs.modeOneChange) {
            count = -3;
        }
        else {
            count = -2;
        }
        // @ts-expect-error this is not typed
        const button = (_a = context.element) === null || _a === void 0 ? void 0 : _a.querySelector(`#${buttonAtribute}`);
        // @ts-expect-error this is not typed
        this.inputs[name] = status;
        // eslint-disable-next-line
        for (const value in this.inputs) {
            // @ts-expect-error this is not typed
            if (this.inputs[value]) {
                // eslint-disable-next-line
                count++;
            }
            // @ts-expect-error this is not typed
            if (this.inputs.modeOneChange) {
                if (count > 0) {
                    button.disabled = false;
                }
                else {
                    button.disabled = true;
                }
                // @ts-expect-error this is not typed
            }
            else if (count === this.inputs.count) {
                button.disabled = false;
            }
            else {
                button.disabled = true;
            }
        }
    }
    // Необходимо передать имя инпута(e.target.name events: idInput!), и для какой кнопки инпут, тег for в кнопке как в label
    onEvents(e, inputPwdUp, context) {
        let input;
        let name;
        const target = e.target;
        if (context) {
            if (target) {
                name = target.name;
                if (name) {
                    // @ts-expect-error this is not typed
                    if (target.attributes.for) {
                        // @ts-expect-error this is not typed
                        input = target.attributes.for.value;
                    }
                    else {
                        input = "button_registor";
                    }
                    this.checkInput(name, inputPwdUp, input, context);
                }
                else {
                    console.log("У инпута нет id");
                }
            }
            else {
                console.log("Передайте events");
            }
        }
        else {
            console.log("Передайте контекст");
        }
    }
    // Точка входа для события input
    onInput(e, context) {
        e.preventDefault();
        this.onEvents(e, "", context);
    }
    // Точка входа для события фокус
    onFocus(e, context) {
        e.preventDefault();
        this.onEvents(e, "", context);
    }
    // Точка входа для события блюр
    onBlur(e, context) {
        e.preventDefault();
        this.onEvents(e, "", context);
    }
    onInputPasswordConfirm(e, context) {
        e.preventDefault();
        const pwdUp = this.getInput("password", context).value;
        console.log(pwdUp);
        this.onEvents(e, pwdUp, context);
    }
    onFocusPasswordConfirm(e, context) {
        e.preventDefault();
        const pwdUp = this.getInput("password", context).value;
        this.onEvents(e, pwdUp, context);
    }
    onBlurPasswordConfirm(e, context) {
        e.preventDefault();
        const pwdUp = this.getInput("password", context).value;
        this.onEvents(e, pwdUp, context);
    }
}
exports.Validator = Validator;
//# sourceMappingURL=FormValidator.js.map