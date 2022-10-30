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
exports.ProfileMessage = void 0;
const core_1 = require("core");
const __succes_message_svg_1 = __importDefault(require("../../../../../image/__succes-message.svg"));
class ProfileMessage extends core_1.Block {
    constructor(_a) {
        var props = __rest(_a, []);
        super(Object.assign({}, props));
        this.setProps({
            isMyMessage: () => (Number(this.props.idAuthor) === Number(window.store.state.user.id)),
            getHours: () => {
                const endTime = new Date(this.props.time);
                const hours = endTime.getHours();
                let minutes = endTime.getMinutes();
                if (String(minutes).length === 1) {
                    minutes = `0${minutes}`;
                }
                return `${hours}:${minutes}`;
            },
        });
    }
    render() {
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
        {{#if isMyMessage}} <img src="${__succes_message_svg_1.default}" alt="Отправлено" />{{/if}}
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
            <img src="${__succes_message_svg_1.default}" alt="Отправлено" />
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
exports.ProfileMessage = ProfileMessage;
ProfileMessage.componentName = "ProfileMessage";
//# sourceMappingURL=profile-message.js.map