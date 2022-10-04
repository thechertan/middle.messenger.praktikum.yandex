import { Block, registerComponent } from "../../../core";
import { PopupClose } from "./popup-close/popup-close";

registerComponent(PopupClose);

import './chat-popup.css'

interface IchatPopup {
  onClick?: () => void;
}

export class ChatPopup extends Block {
  constructor({ ...props }: IchatPopup) {
    super({ ...props });
  }

  render(): string {
    // language=hbs
    return `
    <!--Чтобы открыть попап нужно добавить клас  popup_opened-->
    <div class="popup" id='popup_type-edit-avatar'>
      <div class="popup__container">
        {{{PopupClose
          onClick=onClick
        }}}  
        <div class="popup__content">
          <h2 class="popup__title">Загрузите файл</h2>
          <form class="popup__form popup_type-edit-avatar" name="popupForm-edit">
            <fieldset class="popup__fieldset">
              <input
                class="popup__input-profile"
                type="file"
                name="avatar"
                id="file"
              />
              <label class="popup__input-profile_label" for="file"></label>
              <button type="submit" name="save" class="popup__form-submit">
                Поменять
              </button>
              <div class="popup__span-error">
                <span class="popup__error">Нужно выбрать файл</span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>="profile__message">Поменять аватар</p>
  </div>
    `;
  }
}
