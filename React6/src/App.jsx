import React from 'react'

const App = () => {

  const btnClicked=()=>{
     console.log("hello");
     
  }

  return (
    <div>
        <button onClick={btnClicked} className='bg-emerald-300 px-6 py-3 m-2 rounded text-2xl active:bg-blue-600 active:scale-95 ' > Click</button>     
    </div>
  )
} 

export default App