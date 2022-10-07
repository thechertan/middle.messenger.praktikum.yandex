import Block from "../../../core/Block";

interface IreadyInput {
  onInput?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
  text?: string;
}

export class ReadyInput extends Block {
  static componentName = "ReadyInput";

  constructor({ onBlur, onInput, onFocus, ...props }: IreadyInput) {
    super({
      onBlur,
      onInput,
      onFocus,
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
<div class="register__box">
<label for="{{label}}" class="register__label">{{text}}</label>
{{{Input
  onInput=onInput
  onBlur=onBlur
  onFocus=onFocus
  id="{{label}}" 
  type="{{type}}" 
  name="{{name}}"
  class="register__input" 
}}}
 </div>
    `;
  }
}
