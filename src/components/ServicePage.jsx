import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import {
  FaCut,
  FaHome,
  FaTree,
  FaLeaf,
  FaBroom,
  FaSeedling,
  FaLayerGroup,
  FaPaintRoller,
  FaWater,
  FaRulerCombined,
  FaSprayCan,
  FaBorderNone,
  FaChevronDown,
  FaTools
} from "react-icons/fa";
import "./ServiceCarts.css";

const ServicePage = () => {
  const { serviceId } = useParams();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const servicesData = {
        1: {
          title: "Lawn Service" ,
          icon: <FaLeaf className="service-icon" />,
          color: "#4CAF50",
          services:   [
              {
                title: "Mowing, Trimming & Edging",
                description:
                  "Professional cutting services for a perfectly manicured lawn",
                icon: <FaCut className="service-icon" />,
              },
              {
                title: "Weed Control & Fertilization",
                description: "Customized treatments for healthy, weed-free grass",
                icon: <FaSprayCan className="service-icon" />,
              },
              {
                title: "Tree Trimming & Replacement",
                description: "Expert tree care and replacement services",
                icon: <FaTree className="service-icon" />,
              },
              {
                title: "Shrub Trimming & Replacement",
                description: "Shaping and maintaining your landscape shrubs",
                icon: <FaLeaf className="service-icon" />,
              },
              {
                title: "Leaf & Trash Cleanup",
                description: "Complete yard waste removal services",
                icon: <FaBroom className="service-icon" />,
              },
              {
                title: "Bed Maintenance",
                description: "Flower bed care and seasonal preparation",
                icon: <FaSeedling className="service-icon" />,
              },
              {
                title: "Mulching",
                description: "Premium mulch installation for healthy plants",
                icon: <FaLayerGroup className="service-icon" />,
              },
              {
                title: "Landscaping Design & Service",
                description: "Custom landscape design and installation",
                icon: <FaRulerCombined className="service-icon" />,
              },
            ]
        },
        2: {
          title: "Home Remodeling",
          icon: <FaHome className="service-icon" />,
          color: "#607D8B",
          services:  [
              {
                title: "Retaining Walls",
                description: "Structural and decorative wall solutions",
                icon: <FaBorderNone className="service-icon" />, // Alternative icon
              },
              {
                title: "Fencing Services",
                description: "New installation, repairs, and replacements",
                icon: <FaBorderNone className="service-icon" />, // Alternative icon
              },
              {
                title: "Power Washing",
                description: "Exterior cleaning for homes and hardscapes",
                icon: <FaWater className="service-icon" />,
              },
              {
                title: "Indoor/Outdoor Painting",
                description: "Professional painting services for all surfaces",
                icon: <FaPaintRoller className="service-icon" />,
              },
              {
                title: "Additions",
                description: "Expand your living space with expertly designed home additions.",
                icon: <FaTools className="service-icon" />,
              },
              {
                title: "Floor Installations",
                description: "Expert installation of hardwood, tile, and laminate flooring.",
                icon: <FaHome className="service-icon" />,
              },
              {
                title: "Basement Remodeling",
                description: "Transform your basement into a functional and beautiful living space.",
                icon: <FaSprayCan className="service-icon" />,
              },
              {
                title: "Carpet Installations",
                description: "Professional carpet installation with precise fitting and finishing.",
                icon: <FaPaintRoller className="service-icon" />,
              },
            ]
        }
      };
  

  const service = servicesData[serviceId];

  if (!service) {
    return <div className="not-found">Service not found</div>;
  }

  return (
    <div className="service-page-container">
              {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}

      <nav className="breadcrumb-nav">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <FaChevronDown className="breadcrumb-chevron" />
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <FaChevronDown className="breadcrumb-chevron" />
          </li>
          <li className="active">{service.title}</li>
        </ol>
      </nav>

      <div className="service-details">
        <h2 className="service-title">{service.title}</h2>
        
        <div className="services-list">
          {service.services.map((item, index) => (
            <div key={index} className="service-item">
              <div className="service-icon-container">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className="top-quote-button" onClick={() => setShowQuoteForm(true)}>
            Get a Free Quote
          </button>
      </div>
    </div>
  );
};
export default ServicePage;
