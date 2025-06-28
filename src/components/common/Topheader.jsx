import { Phone, Send } from "lucide-react";
import "./Top.css"; 

export function Topheader() {
  return (
    <div className="top-header">
      <div className="header-left">
        <Phone size={16} className="icon" />
        <span>
          Call us: <a href="tel:+15713953927">+1 (571) 395-3927</a>
        </span>
        <span className="divider">|</span>
        <span>Mon–Fri: 8am – 8pm</span>
      </div>
      <div className="header-right">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZUh9UkY2Vt0LrNfYQfWP4FWsYfO3esT2Y18CCRYriBcsBcg/viewform"
          className="quote-button"
        >
          <Send size={16} className="icon" />
          Get Quote
        </a>
      </div>
    </div>
  );
}
