// ServiceCarts.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaLeaf
} from "react-icons/fa";
import "./ServiceCarts.css";

const ServiceCarts = () => {
  const services = [
    {
      id: 1,
      title: "Lawn Service",
      description: "Professional lawn care and maintenance",
      icon: <FaLeaf className="service-icon" size={64}/>, 
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Home Remodeling",
      description: "Transform your living space",
      icon: <FaHome className="service-icon" size={64}/>,
      color: "#607D8B"
    }
  ];

  return (
    <div className="service-carts-container">
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
      <img className="service-logo" src="/images/logo.png"/>
      <h2 className="section-subtitle">Click below on a service to view offerings</h2>

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