import React from 'react';
import { Link } from 'react-router-dom';

function AboutPreview() {
  return (
    <div className="about-preview">
      <div className="about-preview-container">
        <h2>Why Choose Medina Services?</h2>
      <h4>Family-Owned & Local</h4>
  <h4>Quality Work You Can Count On</h4>
  <h4>Honest, Upfront Pricing</h4>
  <h4>Residential + Commercial
  Experienc</h4>
        <Link to="/about" className="cta-button">
          Learn More About Us
        </Link>
      </div>
    </div>
  );
}

export default AboutPreview;