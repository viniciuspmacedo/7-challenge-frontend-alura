import { showMenu } from "./showMenu.js";
import { openModal, closeModal } from "./modal.js";


const icon = document.querySelector(".menu-icon");
const buttons = document.querySelectorAll("button");
const buttonCloseModal = document.querySelectorAll('.modal__close');

icon.addEventListener('click', (evento) => {
    showMenu(evento.target)
})


buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.className === "send") {
            openModal('newsletter-modal');
        } else if (event.target.className === "ver-mais") {
            openModal('products-modal');
        }

    })
})


buttonCloseModal.forEach(element => {
    element.addEventListener('click', (event) => {
        const modal = event.target.parentNode.parentNode.parentNode;
        closeModal(modal);
    })
})


window.onclick = function (event) {

    if (event.target == document.getElementById("products-modal") ||
        event.target == document.getElementById("newsletter-modal")) {
        closeModal(event.target);
    }
}
