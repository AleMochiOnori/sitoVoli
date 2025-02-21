import React, { useState } from "react";
import "./NavBar.css";
import aereo from "./assets/aereo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Main">
      <div className="LogoSection">
        <img className="aereo" src={aereo} alt="Logo" />
        <h2 className="text">Air Station</h2>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="HamburgerMenu" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links Section */}
      <div className={`LinksSection ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" id="Home" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Compagnie" onClick={closeMenu}>Compagnie</Link></li>
          <li><Link to="/voliInPartenza" onClick={closeMenu}>Voli in partenza</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="Overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default NavBar;