import { Block } from "core";

interface IProfileDateMessage {
  date?: string;
}

export class ProfileDateMessage extends Block {
  static componentName = "ProfileDateMessage";

  constructor({ ...props }: IProfileDateMessage) {
    super({ ...props });
  }

  protected render(): string {
    return `
      <h2 class="chat__content-date">{{date}}</h2>
      `;
  }
}
