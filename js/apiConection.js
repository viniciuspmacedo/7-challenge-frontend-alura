async function apiProducts() {
    const response = await fetch("http://localhost:3000/products");
    const productsList = await response.json();
    return productsList;
}

async function apiCategories(){
    const apiResponse = await fetch("http://localhost:3000/categories");
    const categoriesList = await apiResponse.json();
    return categoriesList;
}

async function searchInProducts(searchedTerm) {
    const apiResponse = await fetch(`http://localhost:3000/products/?q=${searchedTerm}`);
    const result = await apiResponse.json();
    return result;
}

export const api = {
    apiProducts,
    searchInProducts,
    apiCategories
}