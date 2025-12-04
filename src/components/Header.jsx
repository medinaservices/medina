import React from 'react';

function Header({ onGetQuoteClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Professional Home and Lawn Care Services</h1>
        <button className="cta-button" onClick={onGetQuoteClick}>
          Get a Free Estimate
        </button>
      </div>
    </header>
  );
}

export default Header;