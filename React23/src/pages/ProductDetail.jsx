import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const productData = useContext(ProductDataContext)
  const params = useParams()

  const selectedProduct = productData.find(
    (elem) => elem.id === Number(params.id)
  )

  if (!selectedProduct) {
    return (
      <div className="h-screen w-full bg-black text-white flex items-center justify-center">
        Loading product...
      </div>
    )
  }

  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-4 rounded-2xl flex flex-col flex-start  justify-center ">
        <img className='h-50  mb-4 ' src={selectedProduct.image} alt={selectedProduct.title} />
        <h2 className="text-lg w-70 mt-4">{selectedProduct.title}</h2>
        <h4 className="text-lg  text-gray-400  mt-1">${selectedProduct.price}</h4>
      </div>
    </div>
  )
}

export default ProductDetail
