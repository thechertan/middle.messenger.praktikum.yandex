import Block from "../../../../core/Block";

// import './input.css';

interface IinputProps {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  name?: string;
  label?: string;
}

export class Input extends Block {
  constructor({ onBlur, onInput, onFocus, ...props }: IinputProps) {
    super({
      ...props,
      events: { focus: onFocus, input: onInput, blur: onBlur },
    })
  }

  render(): string {
    // language=hbs
    return `
    <input
    id="{{label}}" 
    type="{{type}}" 
    name="{{name}}"
    class="register__input" />
    `
  }
}
