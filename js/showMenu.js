
const menu = document.querySelector("#menu");

export function showMenu(element) {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        element.innerText = 'menu';

    } else {
        menu.style.display = 'block';
        element.innerText = 'close';
    }
}
