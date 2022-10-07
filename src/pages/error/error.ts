import { Block } from "../../core";

class ErrorPage extends Block {

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
