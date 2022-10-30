"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatFooter = void 0;
const core_1 = require("core");
const PopupOpen_1 = require("utils/PopupOpen/PopupOpen");
const FormValidator_1 = require("utils/FormValidator/FormValidator");
const __photo_or_video_svg_1 = __importDefault(require("image/__photo_or_video.svg"));
const __file_send_png_1 = __importDefault(require("image/__file-send.png"));
const __location_send_svg_1 = __importDefault(require("image/__location-send.svg"));
const WssMessage_1 = require("utils/api/WssMessage");
const ChatApi_1 = require("utils/api/ChatApi");
const _input_1 = require("./_input");
const _button_popup_1 = require("./_button-popup");
const _button_send_1 = require("./_button-send");
require("./chat-footer.css");
(0, core_1.registerComponent)(_button_send_1.ChatButtonSend);
(0, core_1.registerComponent)(_button_popup_1.ChatFooterButtonPopup);
(0, core_1.registerComponent)(_input_1.ChatFooterInput);
const popupOpen = new PopupOpen_1.PopupOpen();
const objectInputs = {
    message: false,
    count: 1,
    modeOneChange: false,
    isButton: true,
};
const validator = new FormValidator_1.Validator(objectInputs);
class ChatFooter extends core_1.Block {
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
    onInput(e) {
        validator.onInput(e, this);
    }
    onFocus(e) {
        validator.onFocus(e, this);
    }
    onBlur(e) {
        validator.onBlur(e, this);
    }
    onSubmit(e) {
        var _a;
        e.preventDefault();
        const inputEl = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector("input[name=message]");
        WssMessage_1.webSocketApi.sendMessage(inputEl.value);
        ChatApi_1.chatsAPI.getChats();
    }
    render() {
        return `
    <div class="chat__footer">
    <div class="chat__footer-box">
      <!-- чтобы открыть попап нужно добавить класс боксу chat__footer-options_opened -->
      <div id='footer__popup' class="chat__footer-options">
        <ul class="chat__footer-options-choice">
          <li class="chat__footer-options-item">
            <img
              src="${__photo_or_video_svg_1.default}"
              alt="Плюс"
              class="chat__button-icon_fix"
            />
            <p class="chat__options-text">Фото или Видео</p>
          </li>
          <li class="chat__footer-options-item">
            <img
              src="${__file_send_png_1.default}"
              alt="Плюс"
              class="chat__button-icon_fix"
            />
            <p class="chat__options-text">Файл</p>
          </li>
          <li class="chat__footer-options-item">
            <img
              src="${__location_send_svg_1.default}"
              alt="Плюс"
              class="chat__button-icon_fix"
            />
            <p class="chat__options-text">Локация</p>
          </li>
        </ul>
      </div>
    </div>

    {{{ChatFooterInput
      onInput=onInput
      onBlur=onBlur
      onFocus=onFocus
    }}}
    {{{ChatButtonSend
      onClick=onSubmit
    }}}
    
  </div>
</div>
    `;
    }
}
exports.ChatFooter = ChatFooter;
ChatFooter.componentName = "ChatFooter";
// TODO отправка файлов
// {{{ChatFooterButtonPopup
//   for='footer__popup'
//   onPopup=popupOpen
// }}}
//# sourceMappingURL=chat-footer.js.map