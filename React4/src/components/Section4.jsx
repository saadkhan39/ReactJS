import React from 'react'
import Section4Left from './Section4Left'
import Section4Right from './Section4Right'

const Section4 = () => {
  return (
    <div className='flex items-center justify-between gap-2 mt-12'>
        <Section4Left />
        <Section4Right />
    </div>
  )
}

export default Section4