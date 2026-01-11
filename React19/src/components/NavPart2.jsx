import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavPart2 = () => {
    const naviagte =useNavigate()
    
  return (
    <div className='bg-emerald-800 px-2 py-6  flex gap-4'>
        <button className='bg-green-500 rounded text-white px-2 py-2 active:scale-95 ' onClick={()=>{
           naviagte('/')
        }}>Return to Home Page</button>
        <button className='bg-green-500 rounded text-white px-2 py-2 active:scale-95 ' onClick={()=>{
          naviagte(-1)
        }}>Back</button>
        <button className='bg-green-500 rounded text-white px-2 py-2 active:scale-95 ' onClick={()=>{
          naviagte(+1)
        }}>Next</button>
    </div>
  )
}

export default NavPart2