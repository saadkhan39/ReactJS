import React from 'react'

const Card = ({ name, image, description, deleteHandler, idx }) => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 m-4 text-center">
      
      {/* Image */}
      <div className="w-26 h-26 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        {name}
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
      <button onClick={()=>{
        deleteHandler(idx)
        console.log("deleted");
        
      }} className=' bg-red-600 text-white px-4 py-1 rounded mt-4 '>Delete</button>
    </div>
  )
}

export default Card
