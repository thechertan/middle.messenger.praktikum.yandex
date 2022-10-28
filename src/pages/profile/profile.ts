import { ProfileButtonLogout } from "components/profile/__button/_button-logout";
import authAPI from "utils/api/AuthApi";
import { Block, registerComponent } from "../../core";
import defaultAvatar from "../../image/defaultAvatar.png";

registerComponent(ProfileButtonLogout);

export class ProfilePage extends Block {
  static componentName = "ProfilePage";

  constructor({ ...props }) {
    super({ ...props });
    this.setProps({
      onLogout: (e: MouseEvent) => {
        e.preventDefault();
        authAPI.logout();
        window.router.go("/");
      },
    });
  }

  render(): string {
    return `

  <main>
  <section class="profile">
  <div class="profile__back">
    <a href="/messenger" class="profile__back-button"></a>
  </div>

  <div class="profile__box">
    {{#if user.avatar}}
    <img class="profile__elipse" src="https://ya-praktikum.tech/api/v2/resources/{{user.avatar}}" alt='Аватар'>
    {{else}} 
    <img class="profile__elipse" src="${defaultAvatar}" alt='Аватар'>
    {{/if}}
    <h1 class="profile__name">{{user.first_name}}</h1>
    <ul class="profile__data">
      <li class="profile__data-item">
        <p class="profile__general">Почта</p>
        <p class="profile__general profile__general_user">{{user.email}}</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Логин</p>
        <p class="profile__general profile__general_user">{{user.login}}</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Имя</p>
        <p class="profile__general profile__general_user">{{user.first_name}}</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Фамилия</p>
        <p class="profile__general profile__general_user">{{user.second_name}}</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Имя в чате</p>
        <p class="profile__general profile__general_user">{{#if user.display_name}}{{user.display_name}}{{else}}Установите имя{{/if}}</p>
      </li>
      <li class="profile__data-item">
        <p class="profile__general">Телефон</p>
        <p class="profile__general profile__general_user">{{user.phone}}</p>
      </li>
    </ul>

    <ul class="profile__settings">
      <li class="profile__setings-item">
        <a href="/settings/changedata" class="profile__link">Изменить
          данные</a>
      </li>
      <li class="profile__setings-item">
        <a href="/settings/changepassword" class="profile__link">Изменить
          пароль</a>
      </li>
      <li class="profile__setings-item">
      {{{ProfileButtonLogout
        onClick=onLogout
      }}}
      </li>
    </ul>
  </img>
  </section>
  </main>

`;
  }
}

export default ProfilePage;
