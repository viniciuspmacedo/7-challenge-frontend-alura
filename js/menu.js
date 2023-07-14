
const menu = document.querySelector("#menu");
const icon = document.querySelector(".menu-icon");

icon.addEventListener('click', (evento) => {
    showMenu(evento.target)
})


function showMenu(element) {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        element.innerText = 'menu';

    } else {
        menu.style.display = 'block';
        element.innerText = 'close';
    }
}
