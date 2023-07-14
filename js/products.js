import { api } from "./apiConection.js";

const productsList = await api.apiConection();
const productsContainerElement = document.querySelector('.products-container');
const productModal = document.querySelector('[data-modal-products]')
const closeProductModal = productModal.querySelector('.modal__close');



function createProductCard(product) {

    const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(product.price)

    const productCard = document.createElement('div');
    const productImage = document.createElement('img');
    const productTitle = document.createElement('h3');
    const productDescription = document.createElement('p');
    const productPrice = document.createElement('span');
    const productButton = document.createElement('button');

    productImage.setAttribute('src', `${product.image[0]}`)
    productImage.setAttribute('alt', `${product.name}`)

    productTitle.className = 'title';
    productTitle.innerText = `${product.name}`;

    productDescription.className = 'text';
    productDescription.innerText = `${product.description}`;

    productPrice.className = 'price';
    productPrice.innerText = `${price}`;

    productButton.className = 'ver-mais';
    productButton.innerText = 'Ver mais'

    productCard.className = 'product-card';
    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);
    productCard.appendChild(productButton);

    productButton.addEventListener('click', () => {

        productModal.appendChild(createModalContent(product.id));
        productModal.showModal();
    })

    return productCard
}

function showProducts(listOfProducts) {
    for (const product of listOfProducts) {
        productsContainerElement.appendChild(createProductCard(product))
    }
}



function createModalContent(id) {

    const product = productsList.find(item => item.id === id);

    const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
        .format(product.price)

    const contentElement = document.createElement('div');
    const elementModalProduct = document.createElement('div');
    const elementModalImage = document.createElement('div');
    const elementModalDetails = document.createElement('div');
    const elementModalForm = document.createElement('form');
    const buttonAddToCart = document.createElement('button');

    contentElement.className = 'modal__content';

    elementModalProduct.className = 'modal__product';
    elementModalImage.className = 'modal__imagem';
    elementModalDetails.className = 'modal__details';

    elementModalImage.innerHTML = `
    <img class="product__image" src=${product.image[2]} alt=${product.name}>`;

    elementModalDetails.innerHTML = `
                <h3 class="product__title">${product.name}</h3>
                <p class="product__description">${product.description}
                </p>
                <span class="product__price">${price}</span>
                <p class="product__seller">Vendido e entregue por ${product.seller}</p>`;

    buttonAddToCart.innerText = 'Adicionar à sacola'
    elementModalForm.appendChild(createColorsMenu(product));
    elementModalForm.appendChild(createSizesMenu(product));
    elementModalForm.appendChild(buttonAddToCart);

    elementModalDetails.appendChild(elementModalForm)

    elementModalProduct.appendChild(elementModalImage);
    elementModalProduct.appendChild(elementModalDetails);

    contentElement.appendChild(elementModalProduct);

    return contentElement

}


function createSizesMenu(product) {
    const sizes = product.sizes
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend')
    legend.innerText = 'Tamanho'

    fieldset.appendChild(legend)

    sizes.forEach((element) => {
        let id = 's' + element.toLowerCase()

        fieldset.innerHTML +=

            `
        <div>
            <input type="radio" name="size" id=${id}>
            <label for=${id}>${element}</label>
        </div>
        `
    });

    return fieldset
}

function createColorsMenu(product) {

    const colors = product.colors;
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.innerText = 'Cores';
    fieldset.appendChild(legend)

    colors.forEach(element => {
        let value = (element.name).toLowerCase().replace(" ", "-")
        fieldset.innerHTML +=
            `<div>
            <input type="radio" name="color" value=${value} id=${value}
             style="background: ${element.color}">
            <label for=${value}>${element.name}</label>
        </div>`
    })

    return fieldset
}

showProducts(productsList)

closeProductModal.addEventListener('click', () => {
    closeModal()
})

function closeModal() {
    const node = productModal.querySelector('.modal__content')
    node.parentNode.removeChild(node)
    productModal.close();
}