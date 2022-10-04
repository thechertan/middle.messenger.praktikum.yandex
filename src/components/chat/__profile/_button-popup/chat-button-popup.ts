import { Block } from "../../../../core";
import threeDot from "../../../../image/__three_dot.svg";


interface IChatHeaderButtonPopup {
  onPopup?: () => void;
  for?: string;
}

export class ChatHeaderButtonPopup extends Block {
  constructor({ onPopup, ...props }: IChatHeaderButtonPopup) {
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
