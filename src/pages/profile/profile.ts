import { Block } from "../../core";
import { Validator } from "../../helpers/validateInput/Validator";
const validator = new Validator();

class ProfilePage extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
  <main>
  <section class="profile">
  <div class="profile__back">
    <a href="./profile.hbs" class="profile__back-button"></a>
  </div>
  <div class="profile__box">
    <div class="profile__elipse"></div>
    <h1 class="profile__name">Иван</h1>
    <ul class="profile__data">
      <li class="profile__data-item">
        <p class="profile__general">Почта</p>
        <p class="profile__general profile__general_user">pochta@yandex.ru</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Логин</p>
        <p class="profile__general profile__general_user">ivanivanov</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Имя</p>
        <p class="profile__general profile__general_user">Иван</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Фамилия</p>
        <p class="profile__general profile__general_user">Иванов</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Имя в чате</p>
        <p class="profile__general profile__general_user">Иван</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Телефон</p>
        <p class="profile__general profile__general_user">+7 (909) 967 30 30</p>
      </li>
    </ul>
    <ul class="profile__settings">
      <li class="profile__setings-item">
        <a href="./profile-change-data.hbs" class="profile__link">Изменить
          данные</a>
      </li>
      <li class="profile__setings-item">
        <a href="./profile-change-password.hbs" class="profile__link">Изменить
          пароль</a>
      </li>
      <li class="profile__setings-item">
        <a href="#" class="profile__link profile__link_red">Выйти</a>
      </li>
    </ul>
  </div>
  </section>
  </main>
`;
  }
}

export { ProfilePage };
