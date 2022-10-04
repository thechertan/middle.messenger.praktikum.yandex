import { Block } from "../../core";
import { Validator } from "../../helpers/validateInput/Validator";
const validator = new Validator();

class ErrorPage extends Block {
  constructor() {
    super();
  }


  render(): string {
    return `
    <main class="main">
      <section class="notfound">
        <h1 class="notfound__title">500</h1>
        <p class="notfound__subtitle">Мы уже фиксим</p>
        <a href="#" class="notfound__link-back">Назад к чатам</a>
      </section>
    </main>
    `;
  }
}

export { ErrorPage };
