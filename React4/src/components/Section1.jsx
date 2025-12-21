import React from 'react'
import Section1Text from './Section1Text'
import Section1Bottom from './Section1Bottom'

const Section1 = () => {
  return (
    <div className='mt-3 '>
        <img className='w-screen rounded-sm' src="https://media.discordapp.net/attachments/1408052378137006112/1452133844965789696/hero.png?ex=6948b487&is=69476307&hm=2f88908e1525b5e9bd56c4cf272a426c43a17f88e3c6c44d308a6eba9bbb6bfb&=&format=webp&quality=lossless&width=881&height=431" alt="" />
        <Section1Text/>
        <Section1Bottom />
    </div>
  )
}

export default Section1