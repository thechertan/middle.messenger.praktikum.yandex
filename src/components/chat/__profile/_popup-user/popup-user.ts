import { Block, registerComponent } from "core";
import { PopupCloseUser } from "./_close-user/close-user";
import { InputChatPopup } from "./_input-popup/input-popup";
import { PopupLoginSubmit } from "./_buttton-submit/popup-login-submit";

registerComponent(PopupCloseUser);
registerComponent(InputChatPopup);
registerComponent(PopupLoginSubmit);

interface IChatUserButtonPopup {
  onPopup?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onInput?: () => void;
  onSubmit?: () => void;
  idName?: string;
  class?: string;
  text?: string;
  textButton: string;
  idInput?: string;
  idButton?: string;
  nameLabel?: string;
}

export class PopupUser extends Block {
  static componentName = "PopupUser";

  constructor({
    onPopup,
    onFocus,
    onBlur,
    onInput,
    onSubmit,
    ...props
  }: IChatUserButtonPopup) {
    super({
      ...props,
      onPopup,
      onInput,
      onBlur,
      onFocus,
      onSubmit,
    });
  }

  render(): string {
    return `
    <div class="popup" id='{{idName}}'>
    <div class="popup__container" >
      {{{PopupCloseUser
      onClick=onPopup
      idName=idName
      }}}
      <div class="popup__content">
        <h2 class="popup__title">{{text}}</h2>
        <form
          class="popup__form popup_type-edit-avatar"
          name="popupForm-edit"
          novalidate
        >
          <fieldset class="popup__fieldset">
          {{#if nameLabel}}     
            <label class="popup__label-chat" for="login">
            {{nameLabel}}
            </label>
          {{else}}
            <label class="popup__label-chat" for="login">
            Логин
          </label>
           {{/if}}
            {{{InputChatPopup
              type='text'
              name=idInput
              onFocus=onFocus
              onBlur=onBlur
              onInput=onInput
            }}}
            {{{PopupLoginSubmit
            idInput=idInput
            textButton=textButton
            onSubmit=onSubmit
            }}}
            <div  class="popup__span-error">
              <span  id='error__{{idInput}}' class="popup__error"></span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  `;
  }
}
