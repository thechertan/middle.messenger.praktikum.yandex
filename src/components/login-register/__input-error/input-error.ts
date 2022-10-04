


import Block from "../../../core/Block";

interface InputErrorProps {
  text?: string;
  className?: string;
  id?: string;
}

export class InputError extends Block {
  constructor({
    text,
    className,
    id
  }: InputErrorProps) {
    super({
      text,
      className,
      id
    });
  }

  protected render(): string {
    // language=hbs
    return `
  <div class="register__span-error">
    <span id="{{id}}" class="{{className}}">{{#if text}}{{text}}{{/if}}</span>
  </div>
    `;
  }
}
