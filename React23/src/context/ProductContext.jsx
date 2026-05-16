import React, { createContext } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

export const ProductDataContext =createContext()

const ProductContext = (props) => {


   const [productData, setProductData] = useState([])

  const getData=async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data); 
    setProductData(response.data)
  }

  useEffect(()=>{
      getData()
  },[])

  return (   
        <ProductDataContext.Provider value={productData}>
             {props.children}
        </ProductDataContext.Provider>
  )
}

export default ProductContext