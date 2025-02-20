import React from 'react'
import { Product } from "../models/Product";
import Rating from '@mui/material/Rating';


interface ProductCardProp {
  product:Product
}

const ProductCard:React.FC<ProductCardProp> =({product })=>{
return(
<div key={product.id} className="w-full   rounded-md hover:opacity-80 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-2" >
    <img
      alt="image not found"
      src={product.image}
      className="aspect-square w-full  bg-gray-200 object-cover lg:aspect-auto lg:h-80 m-2"
      onClick={() => {
      }}
    />
    <h4 className="text-wrap mx-1 text-gray-800 font-sans">{product.title}</h4>
    <div className="mt-4 sm:flex justify-between ">
      <div className="w-2/3  justify-start overflow-hidden">
      <Rating name="read-only" value={product.rating.rate} readOnly size='small'/>
      </div>
      <div className="sm:w-1/3 text-sky-600 font-semibold sm:text-right mt-1 sm:mt-0">${product.price}</div>
    </div>
    <div className='flex justify-end' >
    <button className="bg-sky-400 text-white w-1/2 py-1 rounded focus:opacity-50">Buy</button>
    </div>
  </div>
)
}

export default ProductCard;