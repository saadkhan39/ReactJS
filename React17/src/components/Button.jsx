import React from 'react'

const Button = ({ index, setIndex, setUserData }) => {
  return (
    <div>
         <div className='flex  items-center justify-center gap-5'>
      <button onClick={()=>{
        if(index>1){
          setUserData([])
           setIndex(index-1)  
        }
          
      }} className='bg-amber-400 text-black rounded px-5 py-3 text-lg font-semibold cursor-pointer active:scale-95 mb-5 mt-10'>Prev</button>
      <h1 className='text-white text-2xl  mt-3 '>Page {index}</h1>
      <button onClick={()=>{
          setUserData([])
           setIndex(index+1)
           
      }}
       className='bg-amber-400 text-black rounded px-5 py-3 text-lg font-semibold cursor-pointer active:scale-95 mb-5 mt-10'>Next</button>
     </div> 
    </div>
  )
}

export default Button