import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Rooted in Ignorance</h1>
      <nav className="nav">
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#archive">Archive</a></li>
          <li><a href="#forum">Forum</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
