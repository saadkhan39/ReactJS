import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Genz from './pages/Genz'
import GenzTrend from './pages/GenzTrend'
import NavPart2 from './components/NavPart2'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <Navbar/>
      <NavPart2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>

        <Route/>
        </Route>
        <Route path='/Genz' element={<Genz/>}/>
        <Route path='/Genz/:id' element={<GenzTrend/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App