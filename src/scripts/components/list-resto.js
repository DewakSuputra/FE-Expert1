import "./item-resto.js";

class ListResto extends HTMLElement {
    set restos(restos){
        this._restos = restos;
        this.render();
    }

    render(){
        this.innerHTML = ``;
        this._restos.forEach(resto => {
            const listRestoElement = document.createElement('item-resto');
            listRestoElement.resto = resto;
            this.appendChild(listRestoElement);
        });
    }

    renderError(err){
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${err}</h2>`;
    }
}

customElements.define("list-resto", ListResto);