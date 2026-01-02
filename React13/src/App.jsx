import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")

    const localData=JSON.parse(localStorage.getItem("all-notes")) || []
    const [tasks, setTasks] = useState(localData)
    



  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submitted", title,detail)
    setTitle("")
    setDetail("")

    const newTask = {
      title: title,
      detail: detail,
    }

   console.log(newTask);
   const updatedTasks = [...tasks, newTask]
   localStorage.setItem("all-notes",JSON.stringify(updatedTasks))
    setTasks(updatedTasks)


  }

  const deleteHandler=(idx)=>{
    console.log("note deleted");
    const copyTask =[...tasks]
    copyTask.splice(idx,1)
   setTasks(copyTask)
    localStorage.setItem("all-notes",JSON.stringify(copyTask))
    
  }

  return (
    <div className="bg-black min-h-screen w-full flex flex-col lg:flex-row">
      
      {/* LEFT SECTION */}
      <div className="text-white p-6 md:p-10 lg:w-1/2 border-b-2  lg:border-b-0 lg:border-r-2 border-white">
        <h1 className="text-2xl md:text-3xl mb-5">Add Notes</h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4"
        >
          <input
            className="border-2 border-white py-3 px-4 text-lg md:text-xl text-white rounded bg-transparent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Notes Heading"
          />

          <textarea
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
            className="border-2 border-white h-40 md:h-60 p-4 text-lg md:text-xl text-white rounded bg-transparent"
            placeholder="Write details here"
          ></textarea>

          <button className="bg-white text-black text-lg md:text-xl py-2 font-semibold active:scale-95 rounded">
            Add Note
          </button>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="p-6 md:p-10 lg:w-1/2">
        <h1 className="text-white text-2xl md:text-3xl mb-5">
          Recent Notes
        </h1>
      <div className='flex gap-1.5 flex-wrap'>
      {tasks.map(function(elem,idx){
        return  <div key={idx} className='flex justify-start flex-col items-start relative h-62 w-50 bg-cover rounded-xl text-black pt-9 pb-4 px-4
          bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
            <div className='flex flex-col  justify-between items-center gap-25'>
               <div> 
              <h3 className=' text-lg font-bold'>{elem.title}</h3>
              <p className='  text-xs font-semibold text-gray-600 mt-2'>{elem.detail}</p>
              </div>
            <button onClick={()=>{
              deleteHandler(idx)
            }} className=' bg-red-500 text-white text-sm py-1 px-16 font-semibold rounded hover:bg-red-600 active:scale-95'>Delete</button>
              </div>
            
        </div>
       })}
      </div>
      
      </div>

    </div>
  )
}

export default App
