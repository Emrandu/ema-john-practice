import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,handleClearCart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0
    
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice +  product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const totalTax = totalPrice * 8 / 100; 
    const grandTotal = totalPrice + totalShipping + totalTax;
  return (
    <>
      <div className="text-center">
      <h2 className="text-2xl text-pink-600 font-bold mt-4">Order Summary</h2>
      <hr className="border-2 w-52 ml-12 mt-2" />
      </div>
      <div className="ml-4 font-semibold">
      <p className="mb-2 mt-2 text-center">Selected Items: {totalQuantity}</p>
      <p className="mb-2">Total Price: $ { totalPrice}</p>
      <p className="mb-2">Total Shipping : $ {totalShipping}</p>
      <p>Tax : $ {totalTax}</p>
      </div>
      <h3 className="text-center mt-12 font-bold text-violet-700 text-xl">Grand Total : $ { grandTotal}</h3>
     <div className="text-center">
     <button onClick={handleClearCart} className="btn mt-9">Clear Cart</button>
      <br />
     
     </div>
    </>
  );
};

export default Cart;
