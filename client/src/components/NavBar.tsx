import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-left">LOGO</div>
      <div className="NavBar-right">
        <Link to="/feed">Lorem</Link>
        <Link to="/">Ipsum</Link>
        <Link to="/">Dolor</Link>
        <Link to="/">Sit</Link>
      </div>
    </nav>
  );
};

export default NavBar;
