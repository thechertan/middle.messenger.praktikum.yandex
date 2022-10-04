import Block from "../../../core/Block";
interface ButtonProps {
  onClick: () => void;
}

export class ProfileButton extends Block {
  constructor({ onClick }: ButtonProps) {
    super({ events: { click: onClick } });
  }

  render(): string {
    // language=hbs
    return `
    <button
      type="submit"
      name="save"
      class="profile__form-submit"
      id='button_registor'
      disabled
    >Сохранить
    </button>
    `;
  }
}
