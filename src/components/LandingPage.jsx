import React from "react";
import "../styles/LandingPage.css";
import logoImage from "../images/rooted-in-ignorance.png"; // Make sure this path is correct!

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <img
            src={logoImage}
            alt="Rooted in Ignorance"
            className="logo-image"
          />
          <div className="links">
            <a href="#shop">Shop</a>
            <a href="#media">Media</a>
            <a href="#archive">Archive</a>
            <a href="#forum">Forum</a>
          </div>
          <div className="email-subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-btn">Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
