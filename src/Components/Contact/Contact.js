import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaGlobe,FaCopyright} from 'react-icons/fa';
import './Contact.css'

function Contact() {
  return (
    <div className='Footer'>
      <section className="Contact">
        <div className='text'>
        <h1>Let's make something
          <pre>phenomenal.</pre>
        </h1>
       <div className='fa-icons'>
       <a><FaPhone size={30} /> +91 6361981037</a>
        <a><FaEnvelope size={30}/>   arbiyasultanaece003@gmail.com</a>
        <a> <FaGlobe size={30}/>   www.google.com</a>
       </div>


        <div className="iconss">
          <a href="https://wwww.instagram.com" className='insta' target="_blank"><FaInstagram size={30} style={{ color: "#FFF" }} /></a>
          <a href="https://github.com/sultanaarbiya" className='github' target="_blank"><FaGithub size={30} style={{ color: "#FFF" }} /></a>
          <a href="https://in.linkedin.com/" className='linkedin' target="_blank"><FaLinkedin size={30} style={{ color: "#FFF" }} /></a>
          <a href="https://twitter.com/i/flow/login" className='twitter' target="_blank"><FaFacebook size={30} style={{ color: "#FFF" }} /></a>
        </div>
        </div>
        
        <div className="details">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>
          <button>submit</button>
        </div>
      </section>
      <div class="final">
      <FaCopyright style={{color:"#fff"}}> </FaCopyright><h5>2023 all rights reserved</h5>
   </div>
    </div>
  )
}

export default Contact; 