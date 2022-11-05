// @ts-nocheck
export class PopupOpen {
  openPopup(e: PointerEvent) {
    e.preventDefault();

    try {
      const idPopup = this.element?.querySelector(
        `#${e.target.attributes.for.value}`
      ) as HTMLElement;
      idPopup.classList.toggle("opened");
    } catch (error) {
      console.log(error);
    }
  }
}
