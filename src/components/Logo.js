// Logo.js
import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
