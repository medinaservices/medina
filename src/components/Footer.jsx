import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

function Footer() {
  const [tooltip, setTooltip] = useState("");

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
          <p>Monday–Friday: 8am – 6pm</p>
          <p>Saturday: 9am – 4pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/MedinaServicesLLC/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Follow us on Facebook")}
              onMouseLeave={() => setTooltip("")}
            >
              <FaFacebook className="social-icon" />
            </a>

            <a
              href="https://instagram.com/MedinaServicesLLC"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Follow us on Instagram")}
              onMouseLeave={() => setTooltip("")}
            >
              <FaInstagram className="social-icon" />
            </a>

            <a
              href="https://g.page/MedinaServicesLLC"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Leave us a Google review")}
              onMouseLeave={() => setTooltip("")}
            >
              <FaGoogle className="social-icon" />
            </a>
          </div>

          {tooltip && (
            <div className="social-tooltip">
              {tooltip}
            </div>
          )}

          <p>
            &copy; {new Date().getFullYear()} Medina Services LLC <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
