import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-left">LOGO</div>
      <div className="NavBar-right">
        <a href="/">lorem</a>
        <a href="/">ipsum</a>
        <a href="/">dolor</a>
        <a href="/">sit</a>
      </div>
    </nav>
  );
};

export default NavBar;
