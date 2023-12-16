import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open(evt) {
        super.open(evt);
        const selectedEl = evt.target.closest(".cards__card");
        const selectedElementName = selectedEl.queryselector(".card__title").textContent;
        const selectedElementImageUrl = selectedEl.queryselector(".card__image").src;

        this._selectorPopup.queryselector(".popup__description").textContent = selectedElementName;
        this._selectorPopup.queryselector(".popup__image").src = selectedElementImageUrl;
        this._selectorPopup.classList.add("popup_opened");
    }

}