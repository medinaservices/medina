import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

function Navbar({ onGetQuoteClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-contact-bar">
        <div className="container">
          <div className="contact-info">
            <FaPhone className="contact-icon" />
            <a href="tel:+15713953927" className="phone-link">
              (571) 395-3927
            </a>
          </div>
          <button className="top-Quote-button" onClick={onGetQuoteClick}>
            Get a Free Estimate
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/testimonials"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/whychooseus"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Why Choose Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
