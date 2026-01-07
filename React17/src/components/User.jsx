import React from 'react'

const User = (props) => {


  return (
    <div>
         <a href={props.elem.url}>
         <div  className='h-50 w-70 rounded-2xl overflow-hidden'>
           <img className='h-full object-cover w-full rounded-2xl  ' src={props.elem.download_url} alt="" />
        </div>
          <h1 className=' text-white font-semibold text-xl'>{props.elem.author}</h1>
       </a>
    </div>
  )
}

export default User