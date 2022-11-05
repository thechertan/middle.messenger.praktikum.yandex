import { Block } from "core";
import successMessage from "../../../../../image/__succes-message.svg";

interface IProfileMessage {
  idAuthor?: string;
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
    this.setProps({
      isMyMessage: () => (
          Number(this.props.idAuthor) === Number(window.store.state.user.id)
        ),
      getHours: () => {
        const endTime = new Date(this.props.time);
        const hours: number | string = endTime.getHours();
        let minutes: number | string = endTime.getMinutes();
        if (String(minutes).length === 1) {
          minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`;
      },
    });
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
        {{getHours}}
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
              chat__content-message-time_admin
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
