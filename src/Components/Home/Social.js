import React from 'react'
import { FaTwitter,FaInstagram,FaLinkedin,FaGithub } from 'react-icons/fa'
import './Home.css'
function Social() {
  return (
    <div className='icons'>
      <a href="https://wwww.instagram.com" className='insta' target="_blank"><FaInstagram size={30} style={{color:"#FFF"}}/></a>
      <a href="https://github.com/sultanaarbiya" className='github' target="_blank"><FaGithub size={30} style={{color:"#FFF"}}/></a>
      <a href="https://in.linkedin.com/" className='linkedin' target="_blank"><FaLinkedin size={30} style={{color:"#FFF"}}/></a>
      <a href="https://twitter.com/i/flow/login" className='twitter' target="_blank"><FaTwitter  size={30} style={{color:"#FFF"}}/></a>
    </div>
  )
}

export default Social