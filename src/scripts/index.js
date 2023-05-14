import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from "../../DATA.json"
import "../scripts/components/list-resto.js";

const menuButtonElement = document.querySelector("#menu");
const mainElement = document.querySelector("main");
const hero = document.querySelector(".jumbotron");
const drawer = document.querySelector("#drawer");

document.addEventListener("DOMContentLoaded", _ => {
    const listRestoElement = document.querySelector("list-resto");
    const renderResult = results => { listRestoElement.restos = results };
    const callbackResult = errormessage => { listRestoElement.renderError(errormessage) };
    renderResult(data.restaurants)
        .then(renderResult)
        .catch(callbackResult);
})

menuButtonElement.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
});

hero.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

mainElement.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

