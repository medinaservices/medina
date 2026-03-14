import React, { useState } from "react";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: [],
  message: "",
};

const SERVICE_OPTIONS = [
  { value: "grounds-maintenance", label: "Grounds Maintenance" },
  { value: "home-repair", label: "Home Repair" },
  { value: "remodeling", label: "General Contracting / Remodeling" },
  { value: "not-sure", label: "Not Sure Yet" },
];

function QuoteForm({ onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value, options, multiple } = event.target;

    const nextValue = multiple
      ? Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value)
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitError("");
    setIsSubmitting(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const payload = new FormData();
    const selectedServices = formData.service.length
      ? formData.service.join(", ")
      : "General Inquiry";
    payload.append("access_key", "effecd1a-3484-4f8b-8770-645fee5ecf86");
    payload.append("from_name", "Medina Services Website");
    payload.append("subject", `Estimate Request: ${selectedServices}`);
    payload.append("redirect", "https://www.medinaservices.us/");
    payload.append("to", "info@medinaservices.us");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("address", formData.address);
    payload.append("service", selectedServices);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your request right now.");
      }

      resetForm();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your request right now."
      );
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setSubmitted(false);
    onClose();
  };

  if (submitted) {
    return (
      <div className="Quote-form-overlay">
        <div className="Quote-form submitted">
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h2 className="thank-you-title">Thank You!</h2>
          <p className="thank-you-message">
            Your estimate request was sent successfully. We will follow up using
            the information you provided.
          </p>
          <p className="thank-you-note">
            Submission destination: <strong>info@medinaservices.us</strong>
          </p>
          <button onClick={handleCloseSuccess} className="thank-you-close-button">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="Quote-form-overlay">
      <div className="Quote-form-wrapper">
        <div className="Quote-form-container">
          <button className="close-button" onClick={onClose} type="button">
            ×
          </button>

          <div className="quote-form-header">
            <h2>Tell us about the work you need.</h2>
            <p className="quote-form-intro">
              Send a request and our team will review it and follow up from
              <strong> info@medinaservices.us</strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="quote-form-grid">
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
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                multiple
                required
                className="quote-multi-select"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="quote-form-help">
                Select one or more services.
              </p>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="address">Property Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street, city, ZIP"
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Describe the work, timeline, and any details that will help us prepare your estimate."
              />
            </div>

            {submitError ? (
              <p className="quote-form-status quote-form-status-error">{submitError}</p>
            ) : null}

            <div className="quote-form-actions form-group-full">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Request..." : "Request Estimate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
