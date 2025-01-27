// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Homenav">
      {/* Logo Component */}
      <Logo />

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="ri-menu-3-line"></i> {/* Icon */}
      </div>

      {/* Navigation Links Component */}
      <NavLinks isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
