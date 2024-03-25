import React from 'react'
import './About.css'
import Content from './Content'

function About() {
  return (
    <div>
      <section className='about'>
        <div className='circle'>
        <img src={require("./arru.png")}></img>
        </div>
        <Content/>
      </section>
    </div>
  )
}

export default About;