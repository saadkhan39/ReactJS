import React from 'react'
import Men from './Men'
import Women from './Women'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-10 m-4'>
      <Link className='text-white text-2xl whitespace-nowrap' to='/product/men'>Men</Link>
      <Link className='text-white text-2xl whitespace-nowrap' to='/product/women'>Women</Link>
      <Link className='text-white text-2xl whitespace-nowrap' to='/product/kids'>Kids</Link>

    </div>
      <Outlet/>
    </div>
   
  )
}

export default Product