import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Homenav">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="ri-menu-3-line"></i> {/* Icon */}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Blogs</a>
          <div className="dropdown-content">
            <a href="#">Europe</a>
            <a href="#">Asia</a>
            <a href="#">Africa</a>
          </div>
        </li>
        <li class="dropdown">
                    <a href="#" class="dropbtn">Price</a>
                    <div class="dropdown-content">
                        <a href="#">Package</a>
                        <a href="#">Hotel</a>
                        <a href="#">Flight</a>
                        <a href="#">Car Rental</a>
                        <a href="#">Food</a>
                    </div>
                </li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#About">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
