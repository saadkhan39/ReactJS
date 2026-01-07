import React, { useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [data, setData] = useState([])

const getData=async()=>{
  const response =await axios.get('https://fakestoreapi.com/products')
  setData(response.data);
  console.log(response.data);
  
  
  
  
}

  return (
    <div >
      <button onClick={getData}>Get Data</button>
      <div className='flex gap-10 flex-wrap m-10'>
        {data.map(function(elem, idx){
          return <Card key={idx}  title={elem.title} price={elem.price}  description={elem.description} category={elem.category}/>
        })}
      </div>

    </div>
  )
}

export default App