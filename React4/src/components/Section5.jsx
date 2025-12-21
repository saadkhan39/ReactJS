import React from 'react'
import Section5Left from './Section5Left'
import Section5Right from './Section5Right'

const Section5 = () => {
  return (
    <div >
        <h1 className='text-gray-300 text-2xl font-[font1] mt-8 m-4'>OUR ADVATAGES </h1>
        <div className='flex items-center justify-between gap-2'>
        <Section5Left />
        <Section5Right />
        </div>
    </div>
  )
}

export default Section5