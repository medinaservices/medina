import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import {
  FaHandshake,
  FaTools,
  FaAward,
  FaUserCheck,
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./ServiceCarts.css";


const services = [
  {
    title: "Reliable & Trustworthy Service",
    description:
      "We show up on time, communicate clearly, and complete every job with integrity. Our clients know they can count on us—every time.",
    icon: <FaHandshake className="service-icon" />,
  },
  {
    title: "Comprehensive Property Solutions",
    description:
      "From grounds maintenance to handyman repairs to general contracting, we offer everything you need under one roof. No coordinating multiple contractors. No hassle.",
    icon: <FaTools className="service-icon" />,
  },
  {
    title: "Quality Workmanship",
    description:
      "We take pride in doing the job right the first time. Every project—big or small—receives the same level of care, attention to detail, and commitment to excellence.",
    icon: <FaAward className="service-icon" />,
  },
  {
    title: "Experienced & Professional Team",
    description:
      "Our team brings years of industry knowledge, hands-on expertise, and a customer-first mindset. We are fully trained, safety-focused, and solution-oriented.",
    icon: <FaUserCheck className="service-icon" />,
  },
  {
    title: "Flexible Scheduling",
    description:
      "We understand that every client is different. That’s why we offer flexible scheduling options to fit your timeline and minimize disruptions.",
    icon: <FaCalendarAlt className="service-icon" />,
  },
  {
    title: "Competitive & Transparent Pricing",
    description:
      "No hidden fees. No surprise charges. Just fair, honest pricing backed by quality service.",
    icon: <FaDollarSign className="service-icon" />,
  },
  {
    title: "Locally Owned & Community Focused",
    description:
      "As a local Northern Virginia business, we value long-term relationships and treat every property with the same care we would our own.",
    icon: <FaMapMarkerAlt className="service-icon" />,
  },
];

const WhyChooseUs = () => {
  const { serviceId } = useParams();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const service = services[serviceId] || services[0];

  return (
    <div className="service-page-container">
<h2>
Why Choose Us
</h2>
<br/>
<h4>
Choosing the right company to care for your home or commercial property matters. At Medina
Services LLC, we set the standard for reliability, professionalism, and quality workmanship.

<br/>

Here’s what sets us apart:

</h4>
      {showQuoteForm && (
        <QuoteForm onClose={() => setShowQuoteForm(false)} />
      )}



      {/* Service Content */}
      <div className="service-details">

        <div className="services-list">
          {services.map((item, index) => (
            <div key={index} className="service-item">
              <div className="service-icon-container">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <button
          className="top-Quote-button"
          onClick={() => setShowQuoteForm(true)}
        >
          Get a Free Estimate
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
