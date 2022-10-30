"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorPage = void 0;
const core_1 = require("../../core");
class ErrorPage extends core_1.Block {
    render() {
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
exports.ErrorPage = ErrorPage;
//# sourceMappingURL=error.js.map