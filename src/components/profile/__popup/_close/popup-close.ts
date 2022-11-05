import Block from "core/Block";

interface IPopupClose {
  onClick?: () => void;
  for?: string;
}

export class PopupClose extends Block {
  static componentName = "PopupClose";

  constructor({ onClick, ...props }: IPopupClose) {
    super({ ...props, events: { click: onClick } });
  }

  render(): string {
    return `
      <button  {{#if for}}for='{{for}}'{{/if}} class="popup__button-close" name="close" type="button"></button>
    `;
  }
}
