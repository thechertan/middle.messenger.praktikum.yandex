import { Block } from "core";

interface IChatButtonPopup {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
}
export class ChatFooterInput extends Block {
  constructor({ onInput, onBlur, onFocus }: IChatButtonPopup) {
    super({ events: { focus: onFocus, input: onInput, blur: onBlur } });
  }

  render(): string {

   return `
    <input
      for='button-send'
      placeholder="Сообщение"
      type="text"
      name="message"
      class="chat__footer-send-message"
    />
    `;
  }
}
