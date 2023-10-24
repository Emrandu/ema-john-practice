import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart)
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        let remaining = cart.filter(pd=>pd.id !== id);
        setCart(remaining);
        removeFromDb(id)
        
    }
    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
       

}
    
    return (
        <>
           <div className='shop-container'>
           <div>
                {
                    cart.map(product=><ReviewItems 
                    key= {product.id}
                    product = {product}
                    handleRemoveFromCart={handleRemoveFromCart}

                    />)
                }
            </div>
            <div className="cart-container bg-gray-300 mt-6 mr-4 rounded pb-4">
                <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                ></Cart>
                  <Link  to='/checkout'> <button className="btn btn-primary ml-20 mt-6">Proceed CheckOut</button></Link>

            </div>
           </div>
        </>
    );
};

export default Orders;