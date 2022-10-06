import Block from "core/Block";

interface IinputChatPopup {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  name?: string;
}

export class InputChatPopup extends Block {
  static componentName = "InputChatPopup";

  constructor({ onBlur, onInput, onFocus, ...props }: IinputChatPopup) {
    super({
      ...props,
      events: { focus: onFocus, input: onInput, blur: onBlur },
    });
  }

  render(): string {
    // language=hbs
    return `
      <input
          placeholder="{{placeholder}}"
          class="popup__input-chat-login"
          name={{name}}
          type={{type}}
          for={{name}}
      />
    `;
  }
}
