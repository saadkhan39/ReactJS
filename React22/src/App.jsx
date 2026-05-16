import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div
      className={`min-h-screen transition-all duration-300
      ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      <Navbar />
      <Section />
      <Footer />
    </div>
  )
}

export default App
