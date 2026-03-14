import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Footer({ onGetQuoteClick }) {
  const [tooltip, setTooltip] = useState("");

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Medina Services, LLC</p>
          <p>
            <a href="tel:+15713953927" className="phone-link">
              (571) 395-3927
            </a>
          </p>
          <p>
            <a href="mailto:info@medinaservices.us" className="phone-link">
              info@medinaservices.us
            </a>
          </p>
          <p>Gainesville, VA</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 8:00am - 5pm</p>
          <p>Saturday: 8:30am - 3pm</p>
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
              href="https://www.instagram.com/medinaservices.us?igsh=b2E3dXBma3Yyc2xs"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Follow us on Instagram")}
              onMouseLeave={() => setTooltip("")}
            >
              <FaInstagram className="social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/company/medinaservicesus/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Connect with us on LinkedIn")}
              onMouseLeave={() => setTooltip("")}
            >
              <FaLinkedinIn className="social-icon" />
            </a>

            <a
              href="https://www.google.com/search?q=Medina+Services+LLC"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip("Medina Services LLC - Google Search")}
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

          <button className="top-Quote-button footer-quote-button" onClick={onGetQuoteClick}>
            Get a Free Estimate
          </button>

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
