import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  useEffect(function(){
  console.log("use effect");
  
},[num])

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
      <button 
      onMouseEnter={()=>{
       setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum1(num+10)
      }}
      >Click</button>
    </div>
  )
}

export default App