import { api } from "./apiConection.js";

async function searchProduct(searchedTerm) {
    
    return  await api.searchInProducts(searchedTerm)
    
}


export const search = {
    searchProduct
}