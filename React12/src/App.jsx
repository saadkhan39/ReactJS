import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const localData=JSON.parse(localStorage.getItem("all-users")) || []
    const [allUsers, setAllUsers] = useState(localData)


  const submitHandler=(e)=>{
      e.preventDefault()      
      setTitle("")
      setImage("")
      setDescription("")
      console.log(title,image,description);
      const newUser={name: title, image: image, description: description}
      console.log(newUser);      
      const updatedUsers = [...allUsers, newUser]
      setAllUsers(updatedUsers)
      localStorage.setItem("all-users",JSON.stringify(updatedUsers))

      
  }

  const deleteHandler=(idx)=>{
    console.log("deleted");
    const newTask=[...allUsers]
    newTask.splice(idx,1)
    setAllUsers(newTask)
    localStorage.setItem("all-users",JSON.stringify(newTask))

  }

  return(
    <div className="min-h-screen bg-linear-to-br  from-black via-gray-900 to-black p-10">
      
      {/* Form Section */}
      <form 
        onSubmit={submitHandler}
        className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Add User Card
        </h2>

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image URL"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          className="bg-emerald-500 text-white text-lg font-semibold rounded-lg py-3 hover:bg-emerald-600 active:scale-95 transition-all"
        >
          Submit
        </button>
      </form>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {allUsers.map((elem, idx) => (
          <Card
            key={idx}
            name={elem.name}
            image={elem.image}
            description={elem.description}
            deleteHandler={deleteHandler} idx={idx}
          />
        ))}
      </div>



    </div>
  )
}

export default App