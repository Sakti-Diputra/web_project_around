import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(handleSubmitForm, popupSelector) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValue(inputSelector) {
        const input = document.querySelector(inputSelector);
        return input.value;
    }

    setEventListeners() {
        super.setEventListeners();
        const formPopup = this._selectorPopup.querySelector(".popup__container");
        formPopup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm();
        })
    }

    close() {
        super.setEventListeners();
        const allPopupField = this._selectorPopup.querySelectorAll(".popup");
        allPopupField.forEach((field) => {
            const input = field.firstElementChild;
            const span = field.firstElementChild;
            input.value = "";
            span.textContent = "";
            input.classList.remove(".popup__input-error");
            span.classList.remove(".popup__input-error_active");
        })
        const button = this._selectorPopup.querySelector(".popup__submit");
        button.classList.add(".popup__submit_disabled");
    }
}
