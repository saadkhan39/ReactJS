import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = () => {
   const user =useContext(userDataContext)    
    console.log(user);
    
  return (
    <div className='bg-red-500 h-20'>
        <h1 > Navbar</h1>
        {user}
    </div>
  )
}

export default Navbar