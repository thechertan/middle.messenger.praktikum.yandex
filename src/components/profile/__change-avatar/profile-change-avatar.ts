import Block from "../../../core/Block";

interface ProfileChangeAvatarProps {
  onClick?: () => void;
  onChange?: () => void;
}

export class ProfileChangeAvatar extends Block {
  static componentName = "ProfileChangeAvatar";

  constructor({ onClick, onChange }: ProfileChangeAvatarProps) {
    super({ events: { click: onClick,  mouseover: onChange, mouseout: onChange} });
  }

  render(): string {
    return `
  <div class="profile__elipse profile__elipse_change">
    <p id='avatar' class="profile__message"></p>
  </div>
    `;
  }
}
