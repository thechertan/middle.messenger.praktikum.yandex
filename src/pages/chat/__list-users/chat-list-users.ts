import { Block } from "../../../core";
import { Validator } from "../../../helpers/validateInput/Validator";
const validator = new Validator();

import photoOrVideo from "../../../image/__photo_or_video.svg"
import fileSend from "../../../image/__file-send.png"
import "./chat-list-users.css";

class ChatListUsers extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
    <div class="chat__users">
    <div class="chat__profile-container">
      <a href="./profile.hbs" class="chat__link-profile">Профиль</a>
      <span class="chat__profile-icon"></span>
    </div>
    <label class="chat__search">
      <div class="chat__search-span-position">
        <!-- когда инпут активный .focus, нужно добавить класс спану chat__search-ico_active -->
        <span class="chat__search-ico"></span>
      </div>
      <input type="text" class="chat__search-input" placeholder="Поиск" />
    </label>
    <div class="chat__list-users">
      <ul class="chat__list">
        <li class="chat__list-item">
          <div class="chat__remove-position">
            <span class="chat__remove"></span>
          </div>
          <span class="chat__avatar-ico"></span>
          <div class="chat__user-info">
            <h2 class="chat__user-name">Сергей Иванов</h2>
            <p class="chat__message">В 2008 году художник Jon Rafman  начал
              собирать...</p>
          </div>
          <div class="chat__push">
            <p class="chat__time">12:02</p>
            <span class="chat__count-message chat__count-message_active">4</span>
          </div>
        </li>
        <li class="chat__list-item">
          <div class="chat__remove-position">
            <span class="chat__remove"></span>
          </div>
          <span class="chat__avatar-ico"></span>
          <div class="chat__user-info">
            <h2 class="chat__user-name">Сергей Иванов</h2>
            <p class="chat__message">В 2008 году художник Jon Rafman  начал
              собирать...</p>
          </div>
          <div class="chat__push">
            <p class="chat__time">12:02</p>
            <span class="chat__count-message chat__count-message_active">4</span>
          </div>
        </li>
        <li class="chat__list-item">
          <div class="chat__remove-position">
            <span class="chat__remove"></span>
          </div>
          <span class="chat__avatar-ico"></span>
          <div class="chat__user-info">
            <h2 class="chat__user-name">Сергей Иванов</h2>
            <p class="chat__message">В 2008 году художник Jon Rafman  начал
              собирать...</p>
          </div>
          <div class="chat__push">
            <p class="chat__time">12:02</p>
            <span class="chat__count-message chat__count-message_active">4</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
    `;
  }
}

export { ChatListUsers };
