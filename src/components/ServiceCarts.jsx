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
      description: "Routine lawn mowing, mulching, shrub trimim: leaf removal, weed control, and more.",
      icon: <FaLeaf className="service-icon" size={64}/>, 
      color: "#08518a"
    },
    {
      id: 2,
      title: "Home Repair Services",
      description: "Interior and exterior repairs, including carpentry, painting, drywall, and more.",
      icon: <FaTools className="service-icon" size={64}/>,
      color: "#08518a"
    }, {
      id: 3,
      title: "General Contracting and Remodeling",
      description: "Complete home addition's, kitchen and bathroom remodels, and more.",
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