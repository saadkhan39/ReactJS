import React, { useState } from 'react'

const App = () => {

  const [marks, setMarks] = useState([25,29,55,67,45,87])

  function graceMarks(){
      const newMarks = marks.map(function(elem){
        return  elem +5
      })
       
       setMarks(newMarks)
  }

  return (
    <div>
      {marks.map(function(elem,idx){
         return <h1 key={idx}>Student {idx +1} ={elem} marks</h1>
        
      })}
       <button onClick={graceMarks} >Give Them Grace </button>  
    </div>
  )
}

export default App