import { getShoppingCart } from "../utilities/fakeDb";

const cartProductLoader = async() =>{
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();
    const storedCart = getShoppingCart();
    const savedCart = []
    for(const id in storedCart){
        const addedProducts = products.find (pd=>pd.id === id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts)

        }
    }
    return savedCart
} 
export default cartProductLoader;