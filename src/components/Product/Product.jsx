import React from 'react';

const Product = ({product,handleAddToCart}) => {
    const {name,id, img, price,seller,ratings} = product;
    return (
        <>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body relative">
    <h2 className="card-title">{name}</h2>
    <div className='text-gray-500 font-bold mb-20'>
    <p className='mb-2'>Price: {price}</p>
    <p className='mb-2'>Company: {seller}</p>
    <p>Ratings: {ratings}</p>
    </div>
    <div className="card-actions justify-center absolute bottom-0 left-32 ">
      <button onClick={()=>handleAddToCart(product)} className="btn btn-primary mb-4">Add To Cart</button>
    </div>
  </div>
</div>      
        </>
    );
};

export default Product;