import React from "react";
import "./Signup.css";
import Phone from "../images/trade-img.png";
const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img src={Phone} alt="" />
        </div>

        <div className="right">
          <h2>Earn passive income with crypto</h2>
          <p> Earn up to 10% annual rewards on 30+ digital assets.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
