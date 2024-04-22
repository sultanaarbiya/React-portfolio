import React from 'react'
import './Home.css'


function Data() {
    const handleClick = ()=>{
        window.location.href = 'mailto:arbiyasultanaece003@gmail.com';
    }
    return (
        <div className='home-container'>
            <div className='home-data'>
                <h1>Hi,</h1>
                <h1>I'm <span>Arbiya Sultana</span>,</h1>
                <h1>a <span>Web Developer</span>.</h1>
                <p> Front End  Developer | Backend Developer | FullStack Developer</p>
                <button className='data-btn' onClick={handleClick}>Contact me</button>
            </div>
            <div className='shape'>
                <img src={require("./arru.png")} ></img>
            </div>
        </div>
    )
}

export default Data