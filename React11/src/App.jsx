import React from 'react'

const App = () => {

  const submitHandler=(e)=>{
     console.log("submitted");
     e.preventDefault(e)
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <input type="text" placeholder='Enter Your Name' />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App