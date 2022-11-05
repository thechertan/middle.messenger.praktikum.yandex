import { Block } from "core";

// import "./button.css";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick: () => void;
  id?: string;
}

export class Button extends Block {
  static componentName = "Button";

  constructor({ className, text, id, onClick }: ButtonProps) {
    super({ className, text, id, events: { click: onClick } });
  }

  render() {
    return `
  <button
    type="submit"
    name="save"
    id="{{id}}"
    class="{{className}}"
  disabled
  >
  {{text}}
  </button>
    `;
  }
}
