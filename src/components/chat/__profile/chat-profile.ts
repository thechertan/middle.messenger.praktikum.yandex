import { Block, registerComponent } from "../../../core";
import { Validator } from "../../../helpers/validateInput/Validator";
import { ChatFooter } from "../__footer/chat-footer";
import { ChatHeaderButtonPopup } from "./_button-popup/chat-button-popup";

// image

import sum from "../../../image/__sum.svg";
import defaultMessage from "../../../image/__defaultsendmessage.png"
import successMessage from "../../../image/__succes-message.svg"
import image from "../../../image/1-9.jpg"
import { PopupOpen } from "helpers/popupOpen/PopupOpen";
const popup = new PopupOpen();
const validator = new Validator();
registerComponent(ChatFooter)
registerComponent(ChatHeaderButtonPopup)

import "./chat-profile.css";

class ChatProfile extends Block {
  constructor() {
    super(),
    this.setProps({
      onPopup: popup.openPopup.bind(this),
    })
  }

  render(): string {
    return `
    <div class="chat__profile">
  <div class="chat__container-profile">
    <div class="chat__header">
      <div class="chat__user-container">
        <div class="chat__user-avatar"></div>
        <h1 class="chat__name">Сергей Иванов</h1>
      </div>
    </div>
    <div class="chat__options">
      {{{ChatHeaderButtonPopup
        onPopup=onPopup
      }}}
      <div class="chat__container-options">
        <!-- чтобы открыть попап нужно добавить класс боксу chat__box-options_opened -->
        <div id='header__popup' class="chat__box-options chat__box-options_opened">
          <ul class="chat__options-choice">
            <li class="chat__options-item">
              <img
                src="${sum}"
                alt="Плюс"
                class="chat__button-icon"
              />
              <p class="chat__options-text">Добавить пользователя</p>
            </li>
            <li class="chat__options-item">
              <img
                src="${sum}"
                alt="Плюс"
                class="chat__button-icon chat__button-icon_rotate45"
              />
              <p class="chat__options-text">Удалить пользователя</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="chat__content-mesage">
    <h2 class="chat__content-date">19 июня</h2>
    <div class="chat__content-message-sender">
      <p class="chat__content-message-sender-text">a
      </p>
      <div class="chat__content-message-position">
        <span class="chat__content-message-time">11:56</span>
      </div>
    </div>
    <div class="chat__content-message-sender">
      <p class="chat__content-message-sender-text">Привет! Смотри, тут всплыл
        интересный кусок лунной космической истории — НАСА в какой-то момент
        попросила Хассельблад адаптировать модель SWC для полетов на Луну.
        Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову
        говоря, все тушки этих камер все еще находятся на поверхности Луны, так
        как астронавты с собой забрали только кассеты с пленкой. Хассельблад в
        итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету
        они так никогда и не попали. Всего их было произведено 25 штук, одну из
        них недавно продали на аукционе за 45000 евро.
      </p>
      <div class="chat__content-message-position">
        <span class="chat__content-message-time">11:56</span>
      </div>
    </div>

    <div class="chat__content-message-sender chat__content-message-sender_img">
      <img
        src="${defaultMessage}"
        alt="Картинка"
        class="chat__content-message-sender-image"
      />
      <div class="chat__content-message-position">
        <span
          class="chat__content-message-time chat__content-message-time_img"
        >11:56</span>
      </div>
    </div>
    <div
      class="chat__content-message-sender chat__content-message-sender_admin"
    >
      <p class="chat__content-message-sender-text">Привет!
      </p>
      <div class="chat__content-message-position">

        <span class="chat__content-message-time">
          <img src="${successMessage}" alt="Отправлено" />
          11:56
        </span>
      </div>
    </div>

    <div
      class="chat__content-message-sender chat__content-message-sender_img chat__content-message-sender_admin"
    >
      <img
        src="${image}"
        alt="Картинка"
        class="chat__content-message-sender-image"
      />
      <div class="chat__content-message-position">
        <span
          class="chat__content-message-time chat__content-message-time_img chat__content-message-time_admin"
        >
          <img src="${successMessage}" alt="Отправлено" />
          11:56</span>
      </div>
    </div>
    <div
      class="chat__content-message-sender chat__content-message-sender_img chat__content-message-sender_admin"
    >
      <img
        src="${image}"
        alt="Картинка"
        class="chat__content-message-sender-image"
      />
      <div class="chat__content-message-position">
        <span
          class="chat__content-message-time chat__content-message-time_img chat__content-message-time_admin"
        >
          <img src="${successMessage}" alt="Отправлено" />
          11:56</span>
      </div>
    </div>
  </div>
  {{{ChatFooter}}}
    `;
  }
}

export { ChatProfile };
