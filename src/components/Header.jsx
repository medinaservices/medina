import React from 'react';
import lawnImage from '../assets/lawn-care.png'; // Add your own image

function Header({ onGetQuoteClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Professional Lawn Care Services</h1>
        <p>Beautiful lawns start with our expert care</p>
        <button className="cta-button" onClick={onGetQuoteClick}>
          Get a Free Quote
        </button>
      </div>
    </header>
  );
}

export default Header;