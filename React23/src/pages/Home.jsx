import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate =useNavigate()
  return ( 
    <div className='h-screen w-full bg-black'>
        <h1 className='text-4xl  text-white text-center absolute top-65 left-1/2 transform -translate-x-1/2'>This Is Home Page</h1>
        <button onClick={()=>{
            navigate('/products')
        }} className='bg-emerald-400 p-2 text-white rounded active:scale-95 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >Explore Product</button>
        </div>
  )
}

export default Home