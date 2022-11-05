import Block from "core/Block";

interface IPopupClose {
  onClick?: () => void;
  for?: string;
}

export class PopupClose extends Block {
  static componentName = "PopupClose";

  constructor({ onClick }: IPopupClose) {
    super({ events: { click: onClick } });
  }

  render(): string {
    return `
      <button for={{for}}  class="popup__button-close" name="close" type="button" for='add__user'></button>
    `;
  }
}
