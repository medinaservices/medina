import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

function Footer() {
  // Add to your component
  const [tooltip, setTooltip] = useState("");

  // Add to your icons
  <a
    href="https://www.facebook.com/MedinaServicesLLC/"
    onMouseEnter={() => setTooltip("Follow us on Facebook")}
    onMouseLeave={() => setTooltip("")}
  >
    <FaFacebook className="social-icon" />
  </a>;

  // Add tooltip display (add to your footer JSX)
  {
    tooltip && <div className="social-tooltip">{tooltip}</div>;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@medinaservices.us</p>
          <p>Phone: (571) 395-3928</p>
  
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday-Friday: 8am - 6pm</p>
          <p>Saturday: 9am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
        <div className="social-icons">
            <a
              href="https://www.facebook.com/MedinaServicesLLC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://instagram.com/MedinaServicesLLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://g.page/MedinaServicesLLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="social-icon" />
            </a>
          </div>
        <p>
          &copy; {new Date().getFullYear()} Medina Services LLC <br></br> All rights
          reserved.
        </p>
        </div>
      </div>
      <div className="footer-bottom">
   
      </div>
    </footer>
  );
}

export default Footer;
