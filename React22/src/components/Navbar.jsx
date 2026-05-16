import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme,setTheme]= useContext(ThemeDataContext)
    

  return (
    <div className='bg-red-500 h-20 flex items-center justify-between p-10 '>
        <h1 className='text-2xl' >Navbar</h1>
        <h1 className='text-2xl' > {theme}</h1>
        <button onClick={()=>{
          if(theme=='light'){
            setTheme("dark")
          }else{
            setTheme("light")
          }
        }} className='bg-blue-300 text-lg rounded border-none p-2 font-semibold active:scale-95'>Change Theme</button>
    </div>
  )
}

export default Navbar