import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
      <Navbar/>
     <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
       <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
     </div>
    </div>
  )
}

export default App