import React from 'react';
import { Link } from 'react-router-dom';

function AboutPreview() {
  return (
    <div className="about-preview">
      <div className="container">
        <h2>Why Choose Medina Services?</h2>
        <p>
          With over 10 years of experience, we combine expertise with passion to deliver 
          exceptional lawn care services. Our eco-friendly approach ensures beautiful 
          results that last.
        </p>
        <Link to="/about" className="cta-button">
          Learn More About Us
        </Link>
      </div>
    </div>
  );
}

export default AboutPreview;