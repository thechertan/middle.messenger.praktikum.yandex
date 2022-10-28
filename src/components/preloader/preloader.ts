import Block from "core/Block";
import "./index.css";

export default class Preloader extends Block {
  static componentName = "Preloader";

  render(): string {
    // language=hbs
    return `
  <div class="preloader ">
    <div class="preloader__container">
      <span class="preloader__round"></span>
    </div>
  </div>
    `;
  }
}
