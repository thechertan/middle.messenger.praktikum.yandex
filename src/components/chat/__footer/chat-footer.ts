import { Block, registerComponent } from "core";

import { PopupOpen } from "helpers/PopupOpen/PopupOpen";
import { Validator } from "helpers/Validator/Validator";

import photoOrVideo from "image/__photo_or_video.svg";
import fileSend from "image/__file-send.png";
import locationSend from "image/__location-send.svg";
import { ChatFooterInput } from "./_input";
import { ChatFooterButtonPopup } from "./_button-popup";
import { ChatButtonSend } from "./_button-send";

import "./chat-footer.css";

registerComponent(ChatButtonSend);
registerComponent(ChatFooterButtonPopup);
registerComponent(ChatFooterInput);
const popupOpen = new PopupOpen();

const objectInputs = {
  message: false,
  count: 1,
  modeOneChange: false,
  isButton: true,
};

const validator = new Validator(objectInputs);

class ChatFooter extends Block {
  static componentName = "ChatFooter";

  constructor() {
    super();
    this.setProps({
      onInput: this.onInput.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      popupOpen: popupOpen.openPopup.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
  }


  onInput(e: Event) {
    validator.onInput(e, this);
  }

  onFocus(e: Event) {
    validator.onFocus(e, this);
  }
  onBlur(e: Event) {
    validator.onBlur(e, this);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log("work");
  }

  render(): string {
    return `
    <div class="chat__footer">
    <div class="chat__footer-box">
      <!-- чтобы открыть попап нужно добавить класс боксу chat__footer-options_opened -->
      <div id='footer__popup' class="chat__footer-options">
        <ul class="chat__footer-options-choice">
          <li class="chat__footer-options-item">
            <img
              src="${photoOrVideo}"
              alt="Плюс"
              class=" chat__button-icon_fix"
            />
            <p class="chat__options-text">Фото или Видео</p>
          </li>
          <li class="chat__footer-options-item">
            <img
              src="${fileSend}"
              alt="Плюс"
              class="chat__button-icon_fix"
            />
            <p class="chat__options-text">Файл</p>
          </li>
          <li class="chat__footer-options-item">
            <img
              src="${locationSend}"
              alt="Плюс"
              class="chat__button-icon_fix"
            />
            <p class="chat__options-text">Локация</p>
          </li>
        </ul>
      </div>
    </div>
    {{{ChatFooterButtonPopup
      for='footer__popup'
      onPopup=popupOpen
    }}}
    {{{ChatFooterInput
      onInput=onInput
      onBlur=onBlur
      onFocus=onFocus
    }}}
    {{{ChatButtonSend
      onClick=onSubmit
    }}}
    </button>
  </div>
</div>
    `;
  }
}

export { ChatFooter };
