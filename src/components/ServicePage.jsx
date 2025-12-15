import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import {
  FaLeaf,
  FaCut,
  FaBroom,
  FaSeedling,
  FaTree,
  FaTrash,
  FaSnowplow,
  FaLightbulb,
  FaWater,
  FaSprayCan,
  FaTools,
  FaHammer,
  FaPaintRoller,
  FaCouch,
  FaTv,
  FaDoorOpen,
  FaFan,
  FaBath,
  FaThLarge,
  FaHome,
  FaBuilding,
  FaProjectDiagram,
  FaLayerGroup,
  FaBorderAll,
  FaChevronDown
} from "react-icons/fa";


import "./ServiceCarts.css";

const ServicePage = () => {
  const { serviceId } = useParams();
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const servicesData = {
    1: {
      title: "Commercial & Residential Grounds Maintenance",
      icon: <FaLeaf className="service-icon" />,
      color: "#4CAF50",
      services: [
        { title: "Routine Lawn Mowing & Edging", icon: <FaCut /> },
        { title: "Mulching & Seasonal Cleanups", icon: <FaSeedling /> },
        { title: "Shrub Trimming & Plant Care", icon: <FaLeaf /> },
        { title: "Leaf Removal", icon: <FaBroom /> },
        { title: "Gutter Cleaning", icon: <FaWater /> },
        { title: "Power Washing & Staining", icon: <FaSprayCan /> },
        { title: "Weed Control & Bed Maintenance", icon: <FaSeedling /> },
        { title: "Aeration & Overseeding", icon: <FaLayerGroup /> },
        { title: "Sod Installation", icon: <FaLeaf /> },
        { title: "Tree & Branch Trimming", icon: <FaTree /> },
        { title: "Trash & Debris Removal", icon: <FaTrash /> },
        { title: "Snow Removal (Seasonal)", icon: <FaSnowplow /> },
        { title: "Christmas Lighting (Seasonal)", icon: <FaLightbulb /> },
      ],
    },
  
    2: {
      title: "Home Repair Services",
      icon: <FaTools className="service-icon" />,
      color: "#607D8B",
      services: [
        { title: "Interior & Exterior Repairs", icon: <FaHammer /> },
        { title: "Drywall & Ceiling Repair / Patching", icon: <FaThLarge /> },
        { title: "Door, Lock & Hardware Installation", icon: <FaDoorOpen /> },
        { title: "Ceiling Fan & Light Fixture Installation", icon: <FaFan /> },
        { title: "Appliance Installation (Non-Gas)", icon: <FaTools /> },
        { title: "Fixture Replacement (Faucets, Toilets, Sinks)", icon: <FaBath /> },
        { title: "Caulking & Grout Repair", icon: <FaLayerGroup /> },
        { title: "TV Mounting", icon: <FaTv /> },
        { title: "Furniture Assembly", icon: <FaCouch /> },
        { title: "Small Carpentry Repairs", icon: <FaHammer /> },
        { title: "Pressure Washing", icon: <FaSprayCan /> },
        { title: "Floor Repairs", icon: <FaHome /> },
      ],
    },
  
    3: {
      title: "General Contracting & Remodeling",
      icon: <FaBuilding className="service-icon" />,
      color: "#795548",
      services: [
        { title: "Kitchen & Bathroom Remodeling", icon: <FaHome /> },
        { title: "Basement Finishing", icon: <FaLayerGroup /> },
        { title: "Flooring Installation", icon: <FaHome /> },
        { title: "Interior & Exterior Painting", icon: <FaPaintRoller /> },
        { title: "Deck Building & Repair", icon: <FaHammer /> },
        { title: "Four-Season Rooms", icon: <FaHome /> },
        { title: "Fence Installation & Repair", icon: <FaBorderAll /> },
        { title: "Exterior Upgrades & Property Improvements", icon: <FaBuilding /> },
        { title: "Commercial Renovations", icon: <FaBuilding /> },
        { title: "Tenant Improvement Projects", icon: <FaProjectDiagram /> },
        { title: "Project Management & Oversight", icon: <FaProjectDiagram /> },
      ],
    },
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
        <button className="top-Quote-button" onClick={() => setShowQuoteForm(true)}>
            Get a Free Estimate
          </button>
      </div>
    </div>
  );
};
export default ServicePage;
