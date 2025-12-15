// ServiceCarts.jsx
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaLeaf,
  FaTools
} from "react-icons/fa";
import "./ServiceCarts.css";
import QuoteForm from "./QuoteForm";


const ServiceCarts = () => {

  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const services = [
    {
      id: 1,
      title: "Commercial and Residential Grounds Maintenance",
      description: "Our commercial and residential grounds maintenance services are designed to protect your property, enhance curb appeal, and ensure safety throughout the year. Whether you&#39;re a homeowner, HOA, business owner, or property manager, we tailor our maintenance solutions to meet your unique needs and deliver results you can rely on.",
      icon: <FaLeaf className="service-icon" size={64}/>, 
      color: "#08518a"
    },
    {
      id: 2,
      title: "Home Repair Services",
      description: "Tired of unfinished projects piling up? Our professional, reliable home repair team tackles EVERYTHING on your to-do list — big or small. Northern Virginia homeowners trust us for fast service, expert workmanship, and peace of mind. One call. One team. Every repair done right. Medina Services, LLC is Northern Virginia’s go-to home repair service team for fast, dependable results. We specialize in ALL home repairs — so you don’t lift a finger. Book today and get your home back in shape FAST.",
      icon: <FaTools className="service-icon" size={64}/>,
      color: "#08518a"
    }, {
      id: 3,
      title: "General Contracting and Remodeling",
      description: "Our licensed and experienced team delivers full-service general contracting and remodeling with professional oversight, quality craftsmanship, and clear communication from start to finish. Whether it’s updating a single room or managing a full property renovation, we bring precision, reliability, and integrity to every project.",
      icon: <FaHome className="service-icon" size={64}/>,
      color: "#08518a"
    }
  ];

  return (
    <div className="service-carts-container">
                    {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}

      <nav className="breadcrumb-nav">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <FaChevronRight className="breadcrumb-chevron" />
          </li>
          <li className="active">Services</li>
        </ol>
      </nav>

      {/* <h2 className="section-title">Our Services</h2> */}

      <div className="logos">
        <div>
      
        </div>
        <div className="item1">
        <img
              src="/images/logo.png"
              alt="Medina Services Logo"
              className="logo-image2"
            />
        <h1 className="item-title">Honest, Reliable, Family-Owned</h1>
        <h5 className="section-subtitle">Providing quality landscaping, power
washing, and exterior services
since 2016.</h5>

<button className="top-Quote-button" onClick={() => setShowQuoteForm(true)}>
            Get a Free Estimate
          </button>

        </div>
        <div className="item2">
        <img  src="/images/about.jpg"/>

        </div>
      </div>
  

      <div className="carts-wrapper">
        {services.map((service) => (
          <Link
            to={`/services/${service.id}`}
            key={service.id}
            className="service-card"
            style={{ "--service-color": service.color }}
          >
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="view-services-button">
              View Services <FaChevronRight />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarts;