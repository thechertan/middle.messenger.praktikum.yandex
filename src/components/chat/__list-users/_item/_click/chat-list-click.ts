import { Block } from "core";

interface IChatItemClick {
  title?: string;
  last_message?: string;
  onClickChat?: () => void;
}

export class ChatItemClick extends Block {
  static componentName = "ChatItemClick";

  constructor({ onClickChat, ...props }: IChatItemClick) {
    super({ ...props, events: { click: onClickChat } });
  }

  render(): string {

    return ` 
    <div class="chat__user-info">
      <h2 class="chat__user-name">{{title}}</h2>
      <p class="chat__message">{{last_message}}</p>
    </div>
        `;
  }
}
