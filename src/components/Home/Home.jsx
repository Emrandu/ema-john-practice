import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([])
  console.log(products)

  useEffect(()=>{
    let storedCart = getShoppingCart();
    let savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(pd=>pd.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  },[products])

  const handleAddToCart = (product) =>{
      const newCart = [...cart, product]
      setCart(newCart)
      addToDb(product.id)
  }
  const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
       

}

    return (
        <>
          <div className='shop-container'>
          <div className='product-container grid grid-cols-3 mt-6'>
              {
                products.map(product=><Product 
                key={product.id}
                product = {product}
                handleAddToCart={handleAddToCart}
                
                />)
              }
            </div> 
            <div className='cart-container  mt-6 bg-green-200 h-fit pb-20 rounded-xl mr-4 '>
                 <Cart
                 cart = {cart}
                 handleClearCart={handleClearCart}
                 /> 
                 <Link  to='/orders'> <button className="btn btn-primary ml-20 mt-6">Review Order</button></Link>
            </div>
            
          </div>
        </>
    );
};

export default Home;