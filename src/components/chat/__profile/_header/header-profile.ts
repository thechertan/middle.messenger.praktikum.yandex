import { Block } from "core";

interface IProfileHeader {
  img?: string;
  name?: string;
}

export class HeaderProfile extends Block {
  static componentName = "HeaderProfile";

  constructor({ ...porps }: IProfileHeader) {
    super({ ...porps });
    this.setProps({

    });
  }

  render(): string {
    return `
    <div class="chat__header">
      <div class="chat__user-container">
      {{#if img}}
      <img  src="https://ya-praktikum.tech/api/v2/resources/{{img}}" alt="Аватар" class="chat__avatar-activ-chat"/>
      {{else}}
        <div class="chat__user-avatar"></div>
      {{/if}}
        <h1 class="chat__name">{{name}}</h1>
      </div>
    </div>
      `;
  }
}
