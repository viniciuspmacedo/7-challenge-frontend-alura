const buttons = document.querySelectorAll("button");
const buttonCloseModal = document.querySelectorAll('.modal__close');
const modal = document.querySelector('.modal');

window.onclick = function (event) {

    if (event.target == document.getElementById("products-modal") ||
        event.target == document.getElementById("newsletter-modal")) {
        closeModal(event.target);
    }
}

function openModal(content) {
    const modal = document.querySelector(`.modal`)
    modal.appendChild(content)
    modal.style.display = 'block';
    console.log('teste', (modal.childNodes))
}

function closeModal() {
    modal.style.display = 'none';
    modal.removeChild(modal.firstElementChild);
}
