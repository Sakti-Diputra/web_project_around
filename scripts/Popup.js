class Popup {
    constructor(selectorPopup){
        this._selectorPopup = selectorPopup;
    }

    open (){
        this._selectorPopup.classList.add("popup_opened")
    }

    close (){
        this._selectorPopup.classList.remove("popup_opened")
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
            if(this._selectorPopup.classList.contain("popup_opened")){
                this.close();
            }
        }
    }

    setEventListeners(){
        document.addEventListener("keyup", this._handleEscClose.bind(this));
        const handleCloseBtnPopup = this._selectorPopup.querySelector(".popup_close");
        handleCloseBtnPopup.addEventListener("click", () => {
            this.close();
        });
        document.addEventListener("mousedown", () => this.close ());
    }
}