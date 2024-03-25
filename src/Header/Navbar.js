import './Navbar.css'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click,setClick] = useState(false);
  const handleClick=()=>setClick(!click)
  return (
    <div className='Header'>
      <div className='logo'>  <h1>Port<span>folio</span></h1></div>
      <ul className={click? "nav-menu active": 'nav-menu'}>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/myservices">MyServices</Link> </li>
        <li><Link to="/myportfolio">MyPortfolio</Link> </li>
        <li><Link to="/contact">Contact</Link> </li>
      </ul>
      <button>Download CV</button>
      <div className='hamburger' onClick={handleClick}>
       {
        click?(<FaTimes size={20} style={{color:"#FFF"}}/>):(<FaBars size={20} style={{color:"#FFF"}}/>)
       } 
        
      </div>
    </div>
  )
}

export default Navbar;