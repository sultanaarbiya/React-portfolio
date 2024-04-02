import React from 'react'
import {FaDesktop,FaPencilRuler,FaSitemap} from 'react-icons/fa'
import './MyServices.css'


function MyServices() {
  return (
    <div>
      <section className='services'>
        <h2>My Services</h2>
        <div className="boxes">
          <div className="UI">
           
          {/* <img src="image/icons8-web-design-100.png" size={40}/> */}
           <FaSitemap style={{color:" #fa8862"}} size={40}/> 
              <h1>UI/UX Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis quod dolor qui sed similique! Ipsum, quisquam aperiam ea, optio perspiciatis, recusandae temporibus repudiandae animi nisi eum adipisci sunt nostrum?</p>
          </div>
          <div class="Brand">

          <FaPencilRuler   style={{color:" #fa8862"}} size={40}/>
              <h1>Branding Design</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facere laborum aperiam, placeat, minus dolor saepe ea ipsam ipsa dolores quo nostrum officia qui nesciunt velit rerum, corrupti ut tempora.</p>
          </div>
          <div className="Web">
          <FaDesktop style={{color:" #fa8862"}} size={40}/>
              <h1>Web Development</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet doloribus illum corrupti quia officiis nulla iusto magni vero cupiditate, tempora iste dicta sapiente nihil aspernatur? Ipsum eligendi quidem at placeat?</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyServices