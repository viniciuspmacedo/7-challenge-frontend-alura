async function apiConection(){
    const response = await fetch("http://localhost:3000/products");
    const productsList = await response.json();
    return productsList;
}



export const api = {apiConection}