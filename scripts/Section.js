class Section {
    constructor({items, renderer}, selectorClass){
        this._items = items;
        this._renderer = renderer;
        this._selector = document.querySelector(selectorClass);
    }

    rendererItem (){
        this._items.forEach(element => {
            this._renderer (element)
        });
    }

    addItem (element){
        this._selector.append(element)
    }
}



