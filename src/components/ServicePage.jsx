import React, { useEffect, useState } from "react";
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
      intro:
        "Protect your property, improve curb appeal, and keep exterior spaces safe and well-maintained through every season.",
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
      ],
    },
  
    2: {
      title: "Home Repair Services",
      icon: <FaTools className="service-icon" />,
      color: "#607D8B",
      intro:
        "Fast, dependable repair support for the work that keeps homes functioning, looking good, and ready for everyday use.",
      services: [
        { title: "Interior & Exterior Repairs", icon: <FaHammer /> },
        { title: "Drywall & Ceiling Repair / Patching", icon: <FaThLarge /> },
        { title: "Door, Window and Trim Repair", icon: <FaDoorOpen /> },
        { title: "Ceiling Fan & Light Fixture Installation", icon: <FaFan /> },
        { title: "Fixture Replacement (Faucets, Toilets, Sinks)", icon: <FaBath /> },
        { title: "Caulking & Grout Repair", icon: <FaLayerGroup /> },
        { title: "TV Mounting", icon: <FaTv /> },
        { title: "Furniture Assembly", icon: <FaCouch /> },
        { title: "Pressure Washing", icon: <FaSprayCan /> },
        { title: "Floor Repairs", icon: <FaHome /> },
      ],
    },
  
    3: {
      title: "General Contracting & Remodeling",
      icon: <FaBuilding className="service-icon" />,
      color: "#795548",
      intro:
        "From room updates to broader renovation work, we manage remodeling projects with clear communication and dependable execution.",
      services: [
        { title: "Kitchen & Bathroom Remodeling", icon: <FaHome /> },
        { title: "Basement Finishing", icon: <FaLayerGroup /> },
        { title: "Flooring Installation", icon: <FaHome /> },
        { title: "Interior & Exterior Painting", icon: <FaPaintRoller /> },
        { title: "Deck Building & Repair", icon: <FaHammer /> },
        { title: "Four-Season Rooms", icon: <FaHome /> },
        { title: "Installation of Shelving & Storage", icon: <FaTools /> },
        { title: "Fence Installation & Repair", icon: <FaBorderAll /> },
        { title: "Exterior Upgrades & Property Improvements", icon: <FaBuilding /> },
        { title: "Commercial Renovations", icon: <FaBuilding /> },
        { title: "Tenant Improvement Projects", icon: <FaProjectDiagram /> },
        { title: "Project Management & Oversight", icon: <FaProjectDiagram /> },
      ],
    },
  };
  

  const service = servicesData[serviceId];

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Medina Services LLC`;
    }
  }, [service]);

  if (!service) {
    return <div className="not-found">Service not found</div>;
  }

  return (
    <div className="service-page-container service-detail-page">
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

      <section className="service-detail-hero" style={{ "--service-color": service.color }}>
        <div className="service-detail-icon">{service.icon}</div>
        <div className="service-detail-copy">
          <p className="service-detail-eyebrow">Service Category</p>
          <h2 className="service-title">{service.title}</h2>
          <p className="service-detail-intro">{service.intro}</p>
        </div>
      </section>

      <section className="service-detail-body">
        <div className="service-detail-section-heading">
          <h3>Included Services</h3>
          <p>Explore the work we commonly provide within this service category.</p>
        </div>

        <div className="service-offerings-grid">
          {service.services.map((item, index) => (
            <article
              key={index}
              className="service-offering-card"
              style={{ "--service-color": service.color }}
            >
              <div className="service-offering-icon">{item.icon}</div>
              <div className="service-offering-copy">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="service-detail-cta">
          <button className="top-Quote-button" onClick={() => setShowQuoteForm(true)}>
            Get a Free Estimate
          </button>
        </div>
      </section>
    </div>
  );
};
export default ServicePage;
