import React from 'react'
import "./Hero.css"
import handicon from  "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import exclusive from "../../assets/exclusive.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>Best Deals !  Best Prices !</h2>
        
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={handicon} alt="" height="60px"/>
        </div>
        <p>collections</p>
        <p>for everyones</p>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" height="50px" />
        </div>
        </div>
        
        <div className="hero-right">
            <img src={exclusive} alt="" height="500px" />
        </div>
    </div>
  )
}

export default Hero