import React from 'react'
import "./MyPortfolio.css"
import Slider from './Slider';
// import slideData from 'Images'
// import Carousel from './Carousel'


function MyPortfolio() {
  return (
    <div>
   <section className='portfolio'>
   <h1>My Portfolio</h1>
       <Slider/>
   </section>
    </div>
  )
}

export default MyPortfolio;