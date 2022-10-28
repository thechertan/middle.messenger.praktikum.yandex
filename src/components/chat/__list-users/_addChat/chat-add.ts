import { Block } from "core";

interface IChatAdd {
  onPopupAddChat: () => void;
  for?: string;
}

export class ChatAdd extends Block {
  static componentName = "ChatAdd";

  constructor({ onPopupAddChat, ...props }: IChatAdd) {
    super({ ...props, events: { click: onPopupAddChat } });
  }

  render(): string {
    return ` 
    <button for={{for}} class="chat__button-add-chat">Добавить чат </button>

        `;
  }
}
