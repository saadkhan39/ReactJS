import React from 'react'

const Section2 = () => {
  return (
    <div className='Section2'>
        <div id='p1' className="part">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum unde placeat facilis minus similique .</h2>
             <p>Game mode</p>
        </div>
        <div id='p2' className="part">
            <img src="https://www.shutterstock.com/image-photo/pilates-trainer-yoga-mat-on-260nw-2032983803.jpg" alt="" />
        </div>
        <div id='p3' className="part">
            <h1>100+</h1>
            <h5>Pro Coaches</h5>
            <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing  elit. Voluptatem, veniam!</p>
            <div className='level'>
                <h3>Beginner = 55</h3>
                <h3>Intermediate = 40</h3>
                <h3>Advanced = 35</h3>
            </div>
        </div>
    </div>
  )
}

export default Section2