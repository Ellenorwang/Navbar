// NavLinks.js
import React from "react";
import "./Navbar.css";

const NavLinks = ({ isMenuOpen }) => {
  return (
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
      <li className="dropdown">
        <a href="#" className="dropbtn">Price</a>
        <div className="dropdown-content">
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
  );
};

export default NavLinks;
