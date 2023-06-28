import { showMenu } from "./showMenu.js";

const icon = document.querySelector(".menu-icon");

icon.addEventListener('click', (evento) => {
    showMenu(evento.target)
})