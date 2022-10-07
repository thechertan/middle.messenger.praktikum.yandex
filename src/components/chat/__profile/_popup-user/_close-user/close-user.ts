import Block from "core/Block";

interface IPopupClose {
  onClick?: () => void;
  idName: string;
}

export class PopupCloseUser extends Block {
  static componentName = "PopupCloseUser";

  constructor({ onClick, idName }: IPopupClose) {
    super({ idName, events: { click: onClick } });
  }

  render(): string {
    return `
      <button for='{{idName}}' class="popup__button-close" name="close" type="button"></button>
    `;
  }
}
