import React from 'react'
import { useParams } from 'react-router-dom'

const GenzTrend = () => {

    const params= useParams()
    console.log(params.id);
    
  return (
    <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-white text-8xl underline '>{params.id} Genz Trending</h1>
    </div>
  )
}

export default GenzTrend