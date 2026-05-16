import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import {Link} from "react-router-dom"

const Product = () => {
    const productData =useContext(ProductDataContext)
  return (
   <div className='flex flex-wrap  gap-5  bg-black text-white p-7 rounded'>
      {productData.map(function(elem,idx){
         return < Link  className='flex bg-gray-900 text-none' to={`${elem.id}`}>
          <div className='flex flex-col  w-68 p-4 '>
            <img className='bg-gray-800 h-60 w-70 p-2 object-top  rounded' src={elem.image} alt="" />
            <h2 className='text-lg font-semibold'>{elem.title}</h2>
          </div>
         </Link>

      })}
    </div>
  )
}

export default Product