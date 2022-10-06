import { Block } from "core";
import successMessage from "../../../../../image/__succes-message.svg";

interface IProfileMessage {
  isMyMessage?: boolean;
  isText?: boolean;
  isImage?: boolean;
  text?: string;
  src?: string;
  file?: string;
  time?: string;
}

export class ProfileMessage extends Block {
  static componentName = "ProfileMessage";

  constructor({ ...props }: IProfileMessage) {
    super({ ...props });
  }

  render(): string {
    return `
  <div class="
    {{#if isMyMessage}}chat__content-message-sender chat__content-message-sender_admin
      {{#if isImage}}chat__content-message-sender_img{{/if}}
    {{else}}
      {{#if isImage}}chat__content-message-sender_img{{/if}}
      chat__content-message-sender
    {{/if}}
    ">
      {{#if isText}}      
      <p class="chat__content-message-sender-text">{{text}}</p>
      <div class="chat__content-message-position">
        <span class="chat__content-message-time">
        {{#if isMyMessage}} <img src="${successMessage}" alt="Отправлено" />{{/if}}
        {{time}}
        </span>
      </div>
      {{/if}}
      {{#if isImage}}
        <img
          src="{{src}}"
          alt="Картинка"
          class="chat__content-message-sender-image"
        />
        <div class="chat__content-message-position">
          <span
            class="chat__content-message-time chat__content-message-time_img 
            {{#if isMyMessage}} 
              chat__content-message-time_admin\
            {{/if}}"
          >
          {{#if isMyMessage}} 
            <img src="${successMessage}" alt="Отправлено" />
          {{/if}}
          {{time}}
          </span>
        </div>
      </div>
      {{/if}}
  </div>
      `;
  }
}
