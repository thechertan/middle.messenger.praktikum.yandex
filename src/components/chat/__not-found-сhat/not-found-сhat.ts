import { Block } from "../../../core";
import { Validator } from "../../../helpers/validateInput/Validator";
const validator = new Validator();

import "./not-found-сhat.css";

class NotFoundChat extends Block {
  constructor() {
    super();
  }

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
