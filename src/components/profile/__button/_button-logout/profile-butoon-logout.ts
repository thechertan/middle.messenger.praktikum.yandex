import Block from "core/Block";

interface ButtonProps {
  onClick: () => void;
}

export class ProfileButtonLogout extends Block {
  static componentName = "ProfileButtonLogout";

  constructor({ onClick }: ButtonProps) {
    super({ events: { click: onClick } });
  }

  render(): string {
    // language=hbs
    return `
    <button class="profile__link profile__link_red profile__link_btn" onClick=onClick >Выйти</button>
    `;
  }
}
