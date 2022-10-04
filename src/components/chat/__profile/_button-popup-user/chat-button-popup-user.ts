import { Block } from "../../../../core";
import threeDot from "../../../../image/__three_dot.svg";


interface IChatUserButtonPopup {
  onPopup?: () => void;
  for?: string;
}

export class ChatUserButtonPopup extends Block {
  constructor({ onPopup, ...props }: IChatUserButtonPopup) {
    super({
      ...props,
      events: { click: onPopup },
    });
  }

  render(): string {
    return `
    <img
    for='header__popup'
    src="${threeDot}"
    alt="Настройки чата"
    class="chat__options-button"
    />
  
  `;
  }
}
