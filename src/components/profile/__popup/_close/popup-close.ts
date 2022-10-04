import Block from "../../../../core/Block";

interface IPopupClose {
  onClick?: () => void;
}

export class PopupClose extends Block {
  constructor({ onClick }: IPopupClose) {
    super({ events: { click: onClick } });
  }

  render(): string {
    return `
      <button  class="popup__button-close" name="close" type="button"></button>
    `;
  }
}
