import React from 'react';

function CallToAction({ onGetQuoteClick }) {
  return (
    <div className="cta-section">
      <div className="container">
        <h2>Ready for a Perfect Lawn?</h2>
        <button 
          onClick={onGetQuoteClick} 
          className="cta-button-large"
        >
          Get Your Free Quote Today
        </button>
      </div>
    </div>
  );
}

export default CallToAction;