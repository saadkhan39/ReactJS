import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col '>
      <Navbar>
        hello guys
      </Navbar>
      <Section brand="shery">
        <h1>what are you doing!!!</h1>
      </Section>
      <Footer/>
    </div>
  )
}

export default App