import { Block } from "../../core";

class NotFoundPage extends Block {
  constructor() {
    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      window.router.back();
    };
    super({ events: { click: onClick } });
  }

  render(): string {
    return `
    <main class="main">
      <section class="notfound">
      <h1 class="notfound__title">404</h1>
      <p class="notfound__subtitle">Не туда попали</p>
      <button class="notfound__link-back" onClick=onClick >Назад</button>
      </section>
    </main>
    `;
  }
}

export { NotFoundPage };
