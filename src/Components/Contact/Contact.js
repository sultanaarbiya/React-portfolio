import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaGlobe, FaCopyright } from 'react-icons/fa';
import './Contact.css'
import Validate from './Validate.tsx'

function Contact(){

  return (
    <div className='Footer'>
      <section className="Contact">
      <div className='contact-box'>
      
        <div className='text'>
          <h1>Let's make something
            <pre>phenomenal.</pre>
          </h1>
          <div className='icons'>
            <a><FaPhone size={20} /> +91 6361981037</a>
            <a><FaEnvelope size={20} />   arbiyasultanaece003@gmail.com</a>
            <a> <FaGlobe size={20} />   www.google.com</a>
          </div>


          <div className="iconss">
            <a href="https://wwww.instagram.com" className='insta' target="_blank"><FaInstagram size={30} style={{ color: "#FFF" }} /></a>
            <a href="https://github.com/sultanaarbiya" className='github' target="_blank"><FaGithub size={30} style={{ color: "#FFF" }} /></a>
            <a href="https://in.linkedin.com/" className='linkedin' target="_blank"><FaLinkedin size={30} style={{ color: "#FFF" }} /></a>
            <a href="https://twitter.com/i/flow/login" className='twitter' target="_blank"><FaFacebook size={30} style={{ color: "#FFF" }} /></a>
          </div>
        </div>   
        <div className="details">
                <Validate/>
        </div>
       </div>
      </section>
      <div className="final">
        <FaCopyright style={{ color: "#fff" }}> </FaCopyright><h5>2023 all rights reserved</h5>
      </div>
    </div>
  )
}

export default Contact; 