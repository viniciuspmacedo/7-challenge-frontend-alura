async function apiProducts() {
    const response = await fetch("https://meteora-json-server-rho.vercel.app/products");
    const productsList = await response.json();
    return productsList;
}

async function apiCategories(){
    const apiResponse = await fetch("https://meteora-json-server-rho.vercel.app/categories");
    const categoriesList = await apiResponse.json();
    return categoriesList;
}

async function searchInProducts(searchedTerm) {
    const apiResponse = await fetch(`https://meteora-json-server-rho.vercel.app/products/?q=${searchedTerm}`);
    const result = await apiResponse.json();
    return result;
}

export const api = {
    apiProducts,
    searchInProducts,
    apiCategories
}
