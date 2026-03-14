import React, { useEffect, useState } from "react";
import QuoteForm from "./QuoteForm";
import {
  FaHandshake,
  FaTools,
  FaAward,
  FaUserCheck,
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaHome,
  FaBuilding
} from "react-icons/fa";
import "./ServiceCarts.css";

const highlights = [
  {
    title: "Family-Owned & Local",
    description:
      "A local team that understands Northern Virginia properties and treats clients like neighbors, not account numbers.",
    icon: <FaMapMarkerAlt className="service-icon" />,
  },
  {
    title: "Quality Work You Can Count On",
    description:
      "Consistent workmanship, clear communication, and follow-through from estimate to completion.",
    icon: <FaAward className="service-icon" />,
  },
  {
    title: "Honest, Upfront Pricing",
    description:
      "Clear scopes and transparent pricing without surprise charges after work begins.",
    icon: <FaDollarSign className="service-icon" />,
  },
  {
    title: "Residential + Commercial Experience",
    description:
      "Built to support homeowners, property managers, HOAs, and commercial clients with the right level of service.",
    icon: (
      <div className="why-highlight-icon-pair">
        <FaHome className="service-icon" />
        <FaBuilding className="service-icon" />
      </div>
    ),
  },
];


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
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    document.title = "Why Choose Us | Medina Services LLC";
  }, []);

  return (
    <div className="service-page-container why-choose-page">
      {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}

      <div className="why-choose-hero">
        <h2>Dependable service, clear communication, and workmanship that holds up.</h2>
        <p className="why-choose-intro">
          Choosing the right company to care for your home or commercial property matters. Medina Services LLC is built around reliability, professionalism, and quality results across maintenance, repairs, and remodeling.
        </p>
      </div>

      <div className="why-choose-highlights">
        {highlights.map((item, index) => (
          <div key={index} className="why-highlight-card">
            <div className="why-highlight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="service-details why-choose-details">
        <div className="why-choose-section-heading">
          <h3>What sets us apart</h3>
          <p>These are the service standards clients can expect on every project.</p>
        </div>
        <div className="why-standards-grid">
          {services.map((item, index) => (
            <article key={index} className="why-standard-card">
              <div className="why-standard-icon">
                {item.icon}
              </div>
              <div className="why-standard-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="why-choose-cta">
          <button className="top-Quote-button" onClick={() => setShowQuoteForm(true)}>
            Get a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
