import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section = () => {

    const data =useContext(ThemeDataContext)
  return (
    <div className='bg-green-400 h-20 flex items-center justify-between p-10 '>
        <h1 className='text-2xl'>Section </h1>
        <h1 className='text-2xl'>{data}</h1>
   </div>
  )
}

export default Section