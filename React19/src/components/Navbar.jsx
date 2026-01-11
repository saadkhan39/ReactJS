import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-emerald-500 flex items-center justify-between px-5 py-5'>
        <h2 className='text-2xl font-semibold'>Aurastic Collection</h2>
        <div className='flex gap-15 text-lg font-medium'>
            <NavLink  to='/' style={({isActive}) => ({
                color: isActive ? 'white' : 'black'
            })}>Home
            </NavLink>
            <NavLink to='/about' style={({isActive}) => ({
                color: isActive ? 'white' : 'black'
            })}>About
            </NavLink>
            <NavLink to='/genz' style={({isActive}) => ({
                color: isActive ? 'white' : 'black'
            })}>Genz
            </NavLink>
            <NavLink to='/product' style={({isActive}) => ({
                color: isActive ? 'white' : 'black'
            })}>Product
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar