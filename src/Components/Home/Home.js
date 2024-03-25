import React from 'react'

import "./Home.css"
import Social from './Social'
import Data from './Data'


function Home() {
  return (
    <div>
     
      <section className='home-section' id="home">
        <Data/>
        <Social/>
      </section>
    </div>
  )
}

export default Home;