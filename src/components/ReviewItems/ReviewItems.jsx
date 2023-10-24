import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review.css'


const ReviewItems = ({product,handleRemoveFromCart}) => {
    const {img,name,id,price,quantity} = product;
    return (
        <div className='review'>
           <div className='flex justify-center items-center w-3/6 border mb-4 '>
              <img className='w-24' src={img} alt="" />
              <div className='flex-grow ml-4'>
                <p>{name}</p>
                <p>Price: $ {price}</p>
                <p> Quantity: $ {quantity}</p>
              </div>
              <button onClick={()=>handleRemoveFromCart(id)} className='mr-6 bg-slate-500 w-9  h-9 rounded'><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>   
        </div>
    );
};

export default ReviewItems;