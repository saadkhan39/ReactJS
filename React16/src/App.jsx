import React, { useEffect, useState } from 'react'

const App = () => {

  const [changeA, setChangeA] = useState(0)
  const [changeB, setChangeB] = useState(0)

  function ChangingA(){
      console.log("changing A"); 
    }
    function ChangingB(){
      console.log("changing B"); 
    }

    useEffect(function(){
      ChangingA()
      console.log("useEffect is running");
      
    },[changeA])
    
     useEffect(function(){
      ChangingB()
      console.log("useEffect is running");
      
    },[changeB])

  return (

    <div>
      <h1>{changeA}</h1>
      <h1>{changeB}</h1>
      <button onClick={()=>{
           setChangeA(changeA+1)
      }}>Change A</button>
      <button onClick={()=>{
            setChangeB(changeB-1)
      }}>Change B</button>
    </div>
  )
}

export default App