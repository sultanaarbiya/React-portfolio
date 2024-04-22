import React from 'react'
import { useState } from 'react';
import { FaDesktop, FaGlobe, FaGithub } from 'react-icons/fa'
import './MyServices.css'


function MyServices() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <section className='services'>
        <h2>My Services</h2>
        <div className="boxes">

          <div className="UI">
            <FaGithub style={{ color: isHovered ? ' #fff' : '#fa8862' }} size={40}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} />
            <h1>Git Version Control</h1>
            <p>It refers to the process of
              tracking and managing changes to
              digital assets over time.
              <ul>
                <li>Repository Management</li>
                <li>Branching and Merging</li>
                <li>Continuous Deployment</li>
                <li>Git Workflow Customization</li>
              </ul>
            </p>


          </div>
          <div class="Brand">

            <FaDesktop style={{ color: isHovered ? '#fff' : ' #fa8862' }} size={40}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} />
            <h1>Frontend Developer</h1>
            <p>I like to code things from Scratch, and enjoy bringing ideas to life in the browser.
              <ul>
                <li>Website Development</li>
                <li>UI/UX Design</li>
                <li>Performence Optimization</li>
                <li>Responsive Design Implementation</li>
                <li>Third-Party AOI Integration</li>
              </ul>
            </p>
          </div>
          <div className="Web">
            <FaGlobe style={{ color: isHovered ? '#fff' : ' #fa8862' }} size={40}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} />
            <h1>Web Development</h1>
            <p>Welcome to my web development services!
               I specialize in creating modern, responsive, and user-friendly websites and web applications tailored to your unique needs and goals.
              <ul>
                <li>Custom Website Development</li>
                <li>Responsive Design</li>
                <li>Content Management Systems</li>
                <li>E-commerce Solutions</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyServices