import React from "react";
import "../styles/LandingPage.css";
import logo from "../images/rooted-in-ignorance1.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          {/* Replace text with the transparent image */}
          <img src={logo} alt="Rooted in Ignorance" className="logo-image" />
          {/* <div className="links">
            <a href="#shop">Shop</a>
            <a href="#media">Media</a>
            <a href="#archive">Archive</a>
            <a href="#forum">Forum</a>
          </div> */}
          {/* <div className="email-subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-btn">Enter</button>
          </div> */}
          <div className="email-container">
            <label htmlFor="email-input" className="email-label">
              EMAIL:
            </label>
            <input
              type="email"
              id="email-input"
              className="email-input-line"
              placeholder="__________________________"
            />
            <button className="email-enter-btn">ENTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
