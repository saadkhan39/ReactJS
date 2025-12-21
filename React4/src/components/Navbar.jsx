import React from 'react'
import Navleft from './Navleft'
import Navright from './Navright'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        <Navleft/>
        <Navright/>
    </div>
  )
}

export default Navbar