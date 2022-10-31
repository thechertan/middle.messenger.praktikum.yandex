import Block from "core/Block";

interface ProfileLebelProps {
  for?: string;
  text?: string;
}

export class ProfileLable extends Block {
  static componentName = "ProfileLable";

  constructor({ ...props }: ProfileLebelProps) {
    super({ ...props });
  }

  render(): string {
    // language=hbs
    return `
    <label
    for="{{for}}"
    class="profile__general profile__general_cursor"
    >
    {{text}}
  </label>
    `;
  }
}
