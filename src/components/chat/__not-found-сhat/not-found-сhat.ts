import { Block } from "../../../core";

import "./not-found-сhat.css";

class NotFoundChat extends Block {
  static componentName = "NotFoundChat";

  render(): string {
    return `
  <div class="chat__not-found">
    <p class="chat__notifications">
      Выберите чат чтобы отправить сообщение
    </p>
  </div>
      `;
  }
}

export { NotFoundChat };
