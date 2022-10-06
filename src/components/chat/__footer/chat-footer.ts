import { Block, registerComponent } from "core";

import { PopupOpen } from "helpers/popupOpen/PopupOpen";
import { Validator } from "helpers/validateInput/Validator";

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
const validator = new Validator();

class ChatFooter extends Block {
  static componentName = "ChatFooter";

  constructor() {
    super();
    this.setProps({
      onInput: validator.onInput.bind(this),
      onFocus: validator.onFocus.bind(this),
      onBlur: validator.onBlur.bind(this),
      getInput: validator.getInput.bind(this),
      validateInput: validator.validateInput.bind(this),
      isActiveButton: validator.isActiveButton.bind(this),
      checkInput: validator.checkInput.bind(this),
      popupOpen: popupOpen.openPopup.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
    this.setState({
      count: 1,
      oneChange: false,
    });
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
