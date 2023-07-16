import { categories } from "./categories.js";
import { api } from "./apiConection.js";
import { products } from "./products.js";
import { search } from "./search.js";

let screen = window.screen.width
const categoriesList = await api.apiCategories();
const productsList = await api.apiProducts();
const productModal = document.querySelector('[data-modal-products]');
const iconCloseProductModal = productModal.querySelector('.modal__close');
const newsletterModal = document.querySelector("[data-modal-newsletter]")

const buttonSearch = document.querySelector('[data-button-search]');
const searchText = document.querySelector('[data-search-text]');

categories.showCategories(categoriesList, products.showProducts, screen, productModal);
products.showProducts(productsList, screen, productModal)

iconCloseProductModal.addEventListener('click', () => {
    products.closeProdctModal(productModal)
})

buttonSearch.addEventListener('click', async (e) => {
    e.preventDefault();
    const result = await search.searchProduct(searchText.value)
    products.showProducts(result, screen, productModal)
})

window.addEventListener('resize', () => {
    screen = window.screen.width
    categories.showCategories(categoriesList, products.showProducts, screen, productModal);
    products.showProducts(productsList, screen, productModal)
})

window.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
        newsletterModal.close()
    } else if (e.target === productModal) {
        products.closeProdctModal(productModal)
    }
})