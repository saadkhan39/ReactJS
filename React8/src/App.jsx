import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  let Increase =()=>{
     setNum(num+1)
  }
  let Decrease =()=>{
     setNum(num-1)
  }
  let Jump =()=>{
     setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Jump}>Jump By 5</button>
    </div>
  )
}

export default App