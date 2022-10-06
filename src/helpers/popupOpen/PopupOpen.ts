export class PopupOpen {
  openPopup(e: PointerEvent) {
    e.preventDefault();
    console.log(e);
    try {
      const idPopup: string = this.element?.querySelector(
        `#${e.target.attributes.for.value}`,
      );

      idPopup.classList.toggle("opened");
    } catch (error) {
      console.log(error);
    }
  }
}
