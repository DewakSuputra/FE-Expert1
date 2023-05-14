class ItemResto extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        this.innerHTML = `
        <article class="post-item">
            <img aria-label="ini adalah gambar ${this._resto.name}" class="post-item__thumbnail"
                    src="${this._resto.pictureId}"
                    alt="Suasana dari ${this._resto.name}">
            <div class="post-item__content">
                <p tabindex="0" class="post-item__rating"><span class="fa fa-star checked" style="color:orange;"></span> ${this._resto.rating}
                <h1 tabindex="0" class="post-item__title"><a href="#">${this._resto.name}</a></h1>
                <p tabindex="0" class="post-item__city"><a href="#" class="post-item__city">${this._resto.city}</a></p>
                <p tabindex="0" class="post-item__description">${this._resto.description}</p>
            </div>
        </article>`;
    }
}
customElements.define("item-resto", ItemResto);