import React, { useEffect, useState } from 'react'
import axios from "axios"
import User from './components/User'
import Button from './components/Button'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData=async()=>{
    console.log("data mil gaya");
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    console.log(response.data);
    setUserData(response.data) 
  }
   
  useEffect(function(){
     getData()
  },[index])


  let printUserData =<h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h3>

  if(userData.length>0){
     printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
      <User elem={elem}/>
      </div>
     })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto'>
     <div className='p-5 flex flex-wrap gap-3'>
    {printUserData}
     </div>
    <Button index={index} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  )
}

export default App