"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePage = void 0;
const _button_logout_1 = require("components/profile/__button/_button-logout");
const AuthApi_1 = __importDefault(require("utils/api/AuthApi"));
const core_1 = require("../../core");
const defaultAvatar_png_1 = __importDefault(require("../../image/defaultAvatar.png"));
(0, core_1.registerComponent)(_button_logout_1.ProfileButtonLogout);
class ProfilePage extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            onLogout: (e) => {
                e.preventDefault();
                AuthApi_1.default.logout();
                window.router.go("/");
            },
        });
    }
    render() {
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
    <img class="profile__elipse" src="${defaultAvatar_png_1.default}" alt='Аватар'>
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
exports.ProfilePage = ProfilePage;
ProfilePage.componentName = "ProfilePage";
exports.default = ProfilePage;
//# sourceMappingURL=profile.js.map