import { Block } from "core";

interface IPopupLoginSumbit {
  onSubmit?: () => void;
  textButton?: string;
  idInput?: string;
}

export class PopupLoginSubmit extends Block {
  static componentName = "PopupLoginSubmit";

  constructor({ onSubmit, ...props }: IPopupLoginSumbit) {
    super({
      events: { click: onSubmit },
      ...props
    });
  }


  protected render(): string {

    return `
      <button id='{{idInput}}' type="submit" name="save" class="popup__form-submit" disabled>
      {{textButton}}
    </button>
      `
  }
}
