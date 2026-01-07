import React from 'react'

const Card = ({ title, price, category, description }) => {
  return (
    <div className='m-4'>
      <div className='w-80 bg-black rounded p-4'>
        <h1 className='text-xl text-white'>{title}</h1>
        <h5 className='text-sm text-white'>₹ {price}</h5>
        <h6 className='text-sm text-white'>{category}</h6>
        <p className='text-white text-sm'>{description}</p>
      </div>
    </div>
  )
}


export default Card