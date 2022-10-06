import { PopupOpen } from "helpers/popupOpen/PopupOpen";
import { Block, registerComponent } from "../../../core";
import { Validator } from "../../../helpers/validateInput/Validator";
import { ChatFooter } from "../__footer/chat-footer";
import { ChatHeaderButtonPopup } from "./_button-popup/chat-button-popup";
import { ChatUserButtonPopup } from "./_button-popup-user/chat-button-popup-user";
import { PopupUser } from "./_popup-user/popup-user";
import { HeaderProfile } from "./_header/header-profile";
import { ProfileDateMessage } from "./_message/_date/profile-date-message";
import { ProfileMessage } from "./_message/_message/profile-message";

// image
import defaultMessage from "../../../image/__defaultsendmessage.png";
import image from "../../../image/1-9.jpg";

import "./chat-profile.css";

const popup = new PopupOpen();
const validator = new Validator();

registerComponent(ChatFooter);
registerComponent(ChatHeaderButtonPopup);
registerComponent(ChatUserButtonPopup);
registerComponent(PopupUser);
registerComponent(HeaderProfile);
registerComponent(ProfileMessage);
registerComponent(ProfileDateMessage);

class ChatProfile extends Block {
  static componentName = "ChatProfile";

  constructor() {
    super();
    this.setProps({
      onPopup: popup.openPopup.bind(this),
      onInput: validator.onInput.bind(this),
      onFocus: validator.onFocus.bind(this),
      onBlur: validator.onBlur.bind(this),
      getInput: validator.getInput.bind(this),
      validateInput: validator.validateInput.bind(this),
      isActiveButton: validator.isActiveButton.bind(this),
      checkInput: validator.checkInput.bind(this),
      onSubmit: this.onSubmit.bind(this),
    });
    this.setState({
      count: 1,
    });
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("work");
  }

  render(): string {
    return `
  <div class="chat__profile">
  <div class="chat__container-profile">
      {{{HeaderProfile
        img=false
        name='Сергей Иванов'
      }}}
    <div class="chat__options">
      {{{ChatHeaderButtonPopup
        onPopup=onPopup
      }}}
      <div class="chat__container-options">
        <!-- чтобы открыть попап нужно добавить класс боксу chat__box-options_opened -->
        <div id='header__popup' class="chat__box-options">
          <ul class="chat__options-choice">
              {{{ChatUserButtonPopup
                for='add__user'
                onPopup=onPopup
                class='chat__button-icon'
                text='Добавить пользователя'
              }}}
                {{{ChatUserButtonPopup
                for='delete__user'
                onPopup=onPopup
                class='chat__button-icon chat__button-icon_rotate45'
                text='Удалить пользователя'
              }}}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="chat__content-mesage">
    {{{ProfileDateMessage
      date='19 июня'
    }}}

    {{{ProfileMessage
      isMyMessage=true
      text='Привет'
      time='12:45'
      isText=true
    }}}
    {{{ProfileMessage
      isMyMessage=false
      text='Привет'
      time='12:46'
      isText=true
    }}}

    {{{ProfileMessage
      isMyMessage=false
      src='${defaultMessage}'
      time='12:45'
      isImage=true
    }}}

    {{{ProfileMessage
      isMyMessage=true
      src='${image}'
      time='12:45'
      isImage=true
    }}}

  </div>

  {{{ChatFooter}}}
  {{{PopupUser
    onSubmit=onSubmit
    onPopup=onPopup
    idName='add__user'
    text='Добавить пользователя'
    textButton='Добавить'
    idInput='login'
    idButton='button__login'
    onPopup=onPopup
    onBlur=onBlur
    onFocus=onFocus
    onInput=onInput
  }}}

  {{{PopupUser
    onSubmit=onSubmit
    onPopup=onPopup
    idName='delete__user'
    text='Удалить пользователя'
    textButton='Удалить'
    idInput='login2'
    idButton='button__login2'
    onPopup=onPopup
    onBlur=onBlur
    onFocus=onFocus
    onInput=onInput
  }}}
  `;
  }
}

export { ChatProfile };
