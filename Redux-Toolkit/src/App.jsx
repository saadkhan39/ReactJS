import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement } from "./redux/slices/counterSlice"

const App = () => {
   
  const dispatch  = useDispatch()
  const num = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>
    </div>
  )
}

export default App