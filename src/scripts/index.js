import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import DataSource from './data/data_source.js';
import "../scripts/components/list-resto.js";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".jumbotron");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

document.addEventListener("DOMContentLoaded", _ => {
    const listRestoElement = document.querySelector("list-resto");
    const renderResult = results => { listRestoElement.restos = results };
    const callbackResult = errormessage => { listRestoElement.renderError(errormessage) };
    DataSource.getData()
        .then(renderResult)
        .catch(callbackResult);
})

menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
});

hero.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

main.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

// console.log('Hello Coders! :)');
