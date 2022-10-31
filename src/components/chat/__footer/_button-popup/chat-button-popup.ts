import { Block } from "core";
import paperClip from "../../../../image/__paper-clip.svg";

interface IChatFooterButtonPopup {
  onPopup?: () => void;
  for?: string;
}

export class ChatFooterButtonPopup extends Block {
  static componentName = "ChatFooterButtonPopup";

  constructor({ onPopup, ...props }: IChatFooterButtonPopup) {
    super({
      ...props,
      events: { click: onPopup },
    });
  }

  render(): string {
    return `
  <button for="footer__popup" type="button" class="chat__footer-button">
    <img
      src="${paperClip}"
      alt="Прикрепить"
      class="chat__footer-img"
      for='footer__popup'
    />
  </button>
  
  `;
  }
}
