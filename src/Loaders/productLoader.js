const productLoader = async() =>{
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();
    return products;
}
export default productLoader