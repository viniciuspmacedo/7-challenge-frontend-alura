import { api } from "./apiConection.js";
const categoriesContainer = document.querySelector('.categories-container');


function showCategories(categories, showProducts, screen, modal) {

    categoriesContainer.innerHTML = '';

    categories.forEach(category => {
        categoriesContainer.
        appendChild(createCategoryCard(category, showProducts, screen, modal));

    });

}

function createCategoryCard(category, showProducts, screen, modal) {

    const name = category.name.replace(category.name[0], (category.name)[0].toUpperCase())
    const image = screen < 768 ? category.image[2] :
        screen < 1440 ? category.image[1] : category.image[0]

    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card'
    categoryCard.innerHTML = `
    <img src="${image}" alt="${category.name}">
    <p>${name}</p>`;

    categoryCard.addEventListener('click', async () => {
        const result = await searchByCategory(name);
        showProducts(result, screen, modal);
        window.location.href = "#products"
    })
    
    return categoryCard;

}

export const categories = {
    showCategories
}

async function searchByCategory(category){
    const result = await api.searchInProducts(category)
    return result;
}

//showCategories(categoriesList)
