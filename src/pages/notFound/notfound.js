"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundPage = void 0;
const core_1 = require("../../core");
class NotFoundPage extends core_1.Block {
    constructor() {
        const onClick = (e) => {
            e.preventDefault();
            window.router.back();
        };
        super({ events: { click: onClick } });
    }
    render() {
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
exports.NotFoundPage = NotFoundPage;
//# sourceMappingURL=notfound.js.map