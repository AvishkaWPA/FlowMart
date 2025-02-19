import React from 'react'
import { Product } from "../models/Product";
import Rating from '@mui/material/Rating';

interface ProductCardProp {
  product:Product
}

const ProductCard:React.FC<ProductCardProp> =({product })=>{
return(
<div key={product.id} className="w-full   rounded-md hover:opacity-80 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-2" onClick={() => {

}}>
    <img
      alt="image not found"
      src={product.image}
      className="aspect-square w-full  bg-gray-200 object-cover lg:aspect-auto lg:h-80 m-2"
    />
    <h4 className="text-wrap mx-1 text-gray-800 font-sans">{product.title}</h4>
    <div className="mt-4 flex justify-between ">
      <div className="w-2/3">
      <Rating name="read-only" value={product.rating.rate} readOnly />
      </div>
      <div className="w-1/3 text-sky-600 font-semibold text-right">${product.price}</div>
    </div>

  </div>
)
}

export default ProductCard;