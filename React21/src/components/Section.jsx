import React from 'react'

const Section = (props) => {
    
    
  return (
    <div  className='bg-blue-900 h-128.5'>
        <h1 >All section</h1>
        {props.children}
        </div>
  )
}

export default Section