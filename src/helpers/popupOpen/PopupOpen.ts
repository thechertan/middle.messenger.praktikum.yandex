export class PopupOpen {
  openPopup(e: Event){
    e.preventDefault();
    const idPopup: string = this.element?.querySelector(`#${e.target.attributes.for.value}`)
    idPopup.classList.toggle('opened');
  }
}
