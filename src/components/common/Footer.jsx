import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    
      <footer>
      <div className="footer-section contact">
          <h4>Contact</h4>
          <p>📞 <a href="tel:+15713953927">+1 (571) 395-3927</a></p>
          <p>✉️ <a href="mailto:info@medinaservices.us">info@medinaservices.us</a></p>
          <p>📍 Manassas, VA</p>
        </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Medina Services. All rights reserved.</p>
      </div>
      </footer>
  
  )
}

export default Footer
