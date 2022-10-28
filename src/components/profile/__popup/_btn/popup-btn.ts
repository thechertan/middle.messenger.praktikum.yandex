import Block from "core/Block";

interface IPopupButton {
  onSubmitPopup?: () => void;
}

export class PopupButton extends Block {
  static componentName = "PopupButton";

  constructor({ onSubmitPopup }: IPopupButton) {
    super({ events: { click: onSubmitPopup } });
  }

  render(): string {
    return `
    <button type="click" name="save" class="popup__form-submit popup__form-file-submit" disabled>
    Поменять
    </button>
       `;
  }
}
