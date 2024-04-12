import React from 'react'
import "./MyPortfolio.css"
import Portfolio from "./Portfolio"
import Slider from './Slider';
// import slideData from 'Images'
// import Carousel from './Carousel'


function MyPortfolio() {
  return (
    <div>
   <section className='portfolio-container'>
   <h1>My Portfolio</h1>
   
       <Portfolio/>
       {/* <Slider/> */}
   </section>
    </div>
  )
}

export default MyPortfolio;