import React from 'react'
import Navpart1 from './Navpart1'
import Navpart2 from './Navpart2'
import Navpart3 from './Navpart3'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Navpart1 />
        <Navpart2 />
        <Navpart3 />
    </div>
  )
}

export default Navbar