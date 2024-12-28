import React from "react";
import "../styles/LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>Rooted in Ignorance</h1>
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
