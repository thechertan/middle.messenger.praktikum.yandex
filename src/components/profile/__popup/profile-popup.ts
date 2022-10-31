import { Block, registerComponent } from "core";
import { PopupClose } from "./_close/popup-close";
import { PopupButton } from "./_btn";
import { PopupInputFile } from "./_inputFile/index";

registerComponent(PopupInputFile);
registerComponent(PopupClose);
registerComponent(PopupButton);

interface IprofilePopup {
  onClick?: () => void;
  onSubmitPopup?: () => void;
  onInputFile?: () => void;
  idName?: string;
}

export class ProfilePopup extends Block {
  static componentName = "ProfilePopup";

  constructor({ ...props }: IprofilePopup) {
    super({ ...props });
  }

  render(): string {
    // language=hbs
    return `
    <!--Чтобы открыть попап нужно добавить клас  popup_opened-->
    <div class="popup" for="{{idName}}" id='popup_type-edit-avatar'>
      <div class="popup__container">
        {{{PopupClose
          onClick=onClick
          for=idName
        }}}  
        <div class="popup__content">
              <h2 class="popup__title">Загрузите файл</h2>
          <form class="popup__form popup_type-edit-avatar" name="popupForm-edit">
            <fieldset class="popup__fieldset">
            {{{PopupInputFile
              onInputFile=onInputFile     
            }}}
              <label class="popup__input-profile_label" for="file">Выбрать файл на компьютере</label>
              {{{PopupButton
                onSubmitPopup=onSubmitPopup
              }}}
              <div class="popup__span-error">
                <span class="popup__error popup__errror_change-chat-avatar"></span>
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
