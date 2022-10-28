import Block from "../../../../core/Block";

interface IPopupInputFile {
  onInputFile?: () => void;
}

export class PopupInputFile extends Block {
  static componentName = "PopupInputFile";

  constructor({ onInputFile }: IPopupInputFile) {
    super({ events: { input: onInputFile } });
  }

  render(): string {
    return `
    <input
    class="popup__input-profile popup__input-avatar-chat"
    type="file"
    name="avatar"
    id="file"
    accept="image/*,.png,.jpg,"
    />
    `;
  }
}
