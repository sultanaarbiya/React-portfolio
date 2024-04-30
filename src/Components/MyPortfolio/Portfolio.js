import React from 'react'
import './MyPortfolio.css'
import IMG1 from './Images/image1.png'
import IMG2 from './Images/image2.png'
import IMG3 from './Images/image3.png'
import IMG4 from './Images/image4.png'
import IMG5 from './Images/image5.png'
import IMG6 from './Images/image6.png'
import IMG7 from './Images/image7.png'
import IMG8 from './Images/image8.png'
import IMG9 from './Images/image9.png'


const Portfolio = () => {
    return (
        <div className='portfolio-box'>
            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG1} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Myntra_clone" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Myntra_clone/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG2} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/CAR_RACE_GAME" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/CAR_RACE_GAME/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG3} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Bootstrap_TinDog" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Bootstrap_TinDog/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG4} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Ball_Project" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Ball_Project/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG5} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Tik_Tac_Toe" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Tik_Tac_Toe/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>

            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG6} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Weather_APP" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Weather_APP/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>


            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG7} valt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/React" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/React/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG8} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/My_Portfolio" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/My_Portfolio/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className='portfolio_item_image'>
                    <img src={IMG9} alt="" />
                </div>
                <div className="btns">
                    <a href="https://github.com/sultanaarbiya/Calculator_JS" className='btn' target="-blank">Github</a>
                    <a href="https://sultanaarbiya.github.io/Calculator_JS/" className='btn1' target="-blank">Live Demo</a>
                </div>
            </article>



        </div>

    )
}

export default Portfolio