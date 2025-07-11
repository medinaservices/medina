import React from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; // Create this new CSS file

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "effecd1a-3484-4f8b-8770-645fee5ecf86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info-main">
          <div >
</div>
<img className="logo-contact" src="/images/logo.png"/>

          <h2>Contact Us</h2>
          <p>Have questions or ready to schedule service? Reach out today!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span> (571) 395-3927</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@medinaservices.us</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>3544 Finish Line Drive Gainesville, VA 20155</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Smith" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="How can we help you?" 
                rows="5" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <FaPaperPlane className="button-icon" />
              Send Message
            </button>
            
            <div className={`form-result ${result ? 'visible' : ''}`}>
              {result}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// import React from 'react';


// export default function Contact() {
//     const [result, setResult] = React.useState("");
  
//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "effecd1a-3484-4f8b-8770-645fee5ecf86");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={onSubmit}>
//           <input type="text" name="name" required/>
//           <input type="email" name="email" required/>
//           <textarea name="message" required></textarea>
  
//           <button type="submit">Submit Form</button>
  
//         </form>
//         <span>{result}</span>
  
//       </div>
//     );
//   }