import React, { useState } from "react";
import { Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <div>
      {showForm && (
        <div
          style={{
          //  position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div style={{ backgroundColor: "#fff", padding: 20, width: "90%", maxWidth: 600 }}>
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZUh9UkY2Vt0LrNfYQfWP4FWsYfO3esT2Y18CCRYriBcsBcg/viewform"
          className="quote-button"
        >
          <Send size={16} className="icon" />
          Get Quote
        </a>
            <button onClick={handleClose} style={{ marginTop: 10 }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;