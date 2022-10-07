import { Block } from "core";

interface IProfileHeader {
  img?: string;
  name?: string;
}

export class HeaderProfile extends Block {
  static componentName = "HeaderProfile";

  constructor({ ...porps }: IProfileHeader) {
    super({ ...porps });
  }

  render(): string {
    return `
    <div class="chat__header">
      <div class="chat__user-container">
        <div class="chat__user-avatar"></div>
        <h1 class="chat__name">{{name}}</h1>
      </div>
    </div>
      `;
  }
}
