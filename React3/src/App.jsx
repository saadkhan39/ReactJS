import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Center />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App