import { Block } from "core";
import defaultAvatar from "../../../image/defaultAvatar.png";

interface ProfileChangeAvatarProps {
  onClick?: () => void;
  onChange?: () => void;
  userAvatar?: string;
}

export class ProfileChangeAvatar extends Block {
  static componentName = "ProfileChangeAvatar";

  constructor({ onClick, onChange, userAvatar }: ProfileChangeAvatarProps) {
    super({
      userAvatar,
      events: { click: onClick, mouseover: onChange },
    });
  }

  render(): string {
    return `
    {{#if userAvatar}}
    <img id='avatar' class="profile__elipse profile__elipse_change" src="https://ya-praktikum.tech/api/v2/resources/{{userAvatar}}" alt='Аватар'>
    {{else}} 
    <img  id='avatar' class="profile__elipse profile__elipse_change" src="${defaultAvatar}" alt='Аватар'>
    {{/if}}
    `;
  }
}
