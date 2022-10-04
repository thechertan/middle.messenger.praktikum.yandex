import Block from "../../../core/Block";

interface ProfileErrorProps {
  id?: string;
}

export class ProfileError extends Block {
  constructor({ ...props }: ProfileErrorProps) {
    super({ ...props });
  }

  render(): string {
    // language=hbs
    return `
    <div class="profile__span-error">
      <span id="{{id}}" class="profile__error profile__error_input"></span>
    </div>
    `;
  }
}
