import React from "react";
import "./Hero.css";
import Phone from "../images/hero-img.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container"></div>

      <div className="left">
        <h1>Invest in Cryptocurrency with your IRA</h1>
        <p>Buy, Sell, and store hundreds of Cryptocurrency</p>
        <div className="input-container">
          <input type="email" placeholder="Enter your email" />
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <img src={Phone} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
