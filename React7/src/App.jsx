import React from 'react'

const App = () => {

   const onTyping=(val)=>{
    console.log(val);
    
   }

  return (
    <div>
      <input onChange={(elem)=>{
        onTyping(elem.target.value)
      }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App