import React, { useState } from "react";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <div>
      <button onClick={handleClick}>GET QUOTE </button>

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
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZUh9UkY2Vt0LrNfYQfWP4FWsYfO3esT2Y18CCRYriBcsBcg/viewform?embedded=true" 
              height="500"
              frameBorder="0"
              title="Google Form"
            >
              Loading…
            </iframe>
            <button onClick={handleClose} style={{ marginTop: 10 }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;