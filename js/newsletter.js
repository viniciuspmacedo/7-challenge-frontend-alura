const buttonSend = document.querySelector('.send');
const emailInput = document.querySelector('input[type=email]');
const invalidEmailField = document.querySelector('.invalid-email');
const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const newsletterModal = document.querySelector('[data-modal-newsletter]')
const closeNewsletterModal = newsletterModal.querySelector('.modal__close')


emailInput.addEventListener('focus', () => {
    invalidEmailField.innerHTML = ""
})

emailInput.addEventListener('blur', () => {
    if (validateEmail(emailInput)) {
        invalidEmailField.innerHTML = "Email inválido"
    }
})

buttonSend.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateEmail(emailInput)) {
        invalidEmailField.innerHTML = "Email inválido"
    } else {
        newsletterModal.showModal()
        emailInput.value = ''
    }

})

closeNewsletterModal.addEventListener('click', () => {
    newsletterModal.close()
})

function validateEmail(field) {
    const email = field.value
    const isEmailValid = regex.test(email)
    return (email.length < 5 || !isEmailValid)
}

