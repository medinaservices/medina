import React, { useState } from 'react';

function QuoteForm({ onClose }) {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Use the event object from the parameter
    setResult("Sending....");
    const formData = new FormData(e.target); // Use e.target instead of event.target

    formData.append("access_key", process.env.EMAIL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset(); // Use e.target instead of event.target
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setSubmitted(true);
  };

// In your QuoteForm.jsx, update the submitted state return:
if (submitted) {
  return (
    <div className="quote-form-overlay">
      <div className="quote-form submitted">
        <div className="success-animation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h2 className="thank-you-title">Thank You!</h2>
        <p className="thank-you-message">We've received your request and will contact you shortly with a quote.</p>
        <button 
          onClick={onClose} 
          className="thank-you-close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

return (
  <div className="quote-form-overlay">
    <div className="quote-form-wrapper">
      <div className="quote-form-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Get a Free Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Property Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="mowing">Lawn Mowing</option>
              <option value="fertilization">Fertilization</option>
              <option value="weed-control">Weed Control</option>
              <option value="aeration">Aeration</option>
              <option value="full-care">Full Lawn Care Package</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Information</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <button type="submit" className="submit-button">
            Request Quote
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default QuoteForm;