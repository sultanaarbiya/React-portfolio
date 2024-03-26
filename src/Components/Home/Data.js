import React from 'react'
import './Home.css'

function Data() {
    return (
        <div className='home-container'>
            <div className='home-data'>
                <h1>Hi,</h1>
                <h1>I'm <span>Arbiya Sultana</span>,</h1>
                <h1>a <span>Web Developer</span>.</h1>
                <p> Front End  Developer | Graphic Designer | UI/UX designer</p>
                <button className='data-btn'>Contact me</button>
            </div>
            <div className='shape'>
                <img src={require("./arru.png")}></img>
            </div>
        </div>
    )
}

export default Data