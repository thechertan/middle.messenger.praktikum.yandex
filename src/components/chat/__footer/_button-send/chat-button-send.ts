import { Block } from "core";
import buttonBack from "../../../../image/__button-back.svg";

interface IChatButtonSend {
  onClick: () => void;
}

class ChatButtonSend extends Block {
  static componentName = "ChatButtonSend";

  constructor({ onClick }: IChatButtonSend) {
    super({ events: { click: onClick } });
  }

  render(): string {
    return `
    <button 
      id="button-send"
      class="chat__footer-button chat__footer-button_send" 
      disabled
    >
        <img
        src="${buttonBack}"
        alt="Отправить"
        class="chat__footer-send "
        />
    </button>
    `;
  }
}

export { ChatButtonSend };
