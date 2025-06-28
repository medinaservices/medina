import { useState } from "react";
import "./Contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 TODO: Replace this with actual form submission (e.g. fetch to API)
    console.log("Submitted data:", formData);
    setSubmitted(true);

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="Your name"
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help you?"
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
