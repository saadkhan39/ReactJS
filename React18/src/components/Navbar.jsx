import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between bg-emerald-600  '>
        <h2 className='text-2xl '>sheryians</h2>
        <div className='flex gap-10 text-lg '>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/product'}>Product</Link>
        </div>
    </div>
  )
}

export default Navbar