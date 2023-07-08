
export function openModal(elementId) {
    const modal = document.querySelector(`#${elementId}`)
    modal.style.display = 'block';
}

export function closeModal(element) {
    element.style.display = 'none';
}
