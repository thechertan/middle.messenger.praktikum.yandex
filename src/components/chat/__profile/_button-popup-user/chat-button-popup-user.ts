import { Block } from "core";
import sum from "image/__sum.svg";

interface IChatUserButtonPopup {
  onPopup?: () => void;
  for?: string;
  class?: string;
  text?: string;
}

export class ChatUserButtonPopup extends Block {
  static componentName = "ChatUserButtonPopup";

  constructor({ onPopup, ...props }: IChatUserButtonPopup) {
    super({
      ...props,
      events: { click: onPopup },
    });
  }

  render(): string {
    return `
    <li for='{{for}}' class="chat__options-item">
        <img
          for='{{for}}'
          src="${sum}"
          alt="Плюс"
          class="{{class}}"
        />
        <p for='{{for}}' class="chat__options-text">{{text}}</p>
    </li>
  `;
  }
}
