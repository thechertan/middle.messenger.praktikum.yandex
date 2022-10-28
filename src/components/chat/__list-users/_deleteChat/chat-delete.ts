import { Block } from "core";

interface IChatDelete {
  onDeleteClick: () => void;
}

export class ChatDelete extends Block {
  static componentName = "ChatDelete";

  constructor({ onDeleteClick }: IChatDelete) {
    super({ events: { click: onDeleteClick } });
  }

  render(): string {
    return ` 
  <div class="chat__remove-position">
    <span class="chat__remove"></span>
  </div>
        `;
  }
}
