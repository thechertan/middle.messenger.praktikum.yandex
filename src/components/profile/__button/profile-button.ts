import { Block } from "core";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

export class ProfileButton extends Block {
  static componentName = "ProfileButton";

  constructor({ onClick, ...props }: ButtonProps) {
    super( { events: { click: onClick }, ...props });
  }

  render(): string {
    // language=hbs
    return `<button data-testid="custom-element" type="submit" name="save" class="{{#if className}}{{className}}{{else}}profile__form-submit{{/if}}" id="button_registor" disabled>Сохранить</button>`;
  }
}
