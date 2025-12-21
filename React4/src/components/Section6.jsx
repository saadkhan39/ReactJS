import React from 'react'
import Section6Left from './Section6Left'
import Section6Right from './Section6Right'

const Section6 = () => {
  return (
    <div className='mt-2 w-full flex h-[60vh] gap-2'>
    <div className='flex-1'>
      <Section6Left/>
    </div>
    <div className='flex-1'>
      <Section6Right/>
    </div>
    </div>
  )
}

export default Section6