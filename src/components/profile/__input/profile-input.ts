import Block from "../../../core/Block";

interface ProfileIinputProps {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  name?: string;
}

export class ProfileInput extends Block {
  static componentName = "ProfileInput";

  constructor({ onBlur, onInput, onFocus, ...props }: ProfileIinputProps) {
    super({
      ...props,
      events: { focus: onFocus, input: onInput, blur: onBlur },
    });
  }

  render(): string {
    // language=hbs
    return `
    <input
    value="{{value}}"
    placeholder="{{placeholder}}"
    class="profile__input"
    name={{name}}
    type={{type}}
    id={{name}}
  />
    `;
  }
}
// {{{Input
//   onInput=onInput
//   onBlur=onBlur
//   onFocus=onFocus
//   id="{{label}}"
//   type="{{type}}"
//   name="{{name}}"
//   class="register__input"
// }}}
