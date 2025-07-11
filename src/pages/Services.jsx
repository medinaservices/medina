import React from 'react';
import { 
  FaCut, 
  FaTree, 
  FaLeaf, 
  FaBroom, 
  FaSeedling, 
  FaLayerGroup,
  FaPaintRoller,
  FaWater,
  FaRulerCombined,
  FaSprayCan,
  FaBorderNone // Alternative for fence
} from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: 'Mowing, Trimming & Edging',
      description: 'Professional cutting services for a perfectly manicured lawn',
      icon: <FaCut className="service-icon" />
    },
    {
      title: 'Weed Control & Fertilization',
      description: 'Customized treatments for healthy, weed-free grass',
      icon: <FaSprayCan className="service-icon" />
    },
    {
      title: 'Tree Trimming & Replacement',
      description: 'Expert tree care and replacement services',
      icon: <FaTree className="service-icon" />
    },
    {
      title: 'Shrub Trimming & Replacement',
      description: 'Shaping and maintaining your landscape shrubs',
      icon: <FaLeaf className="service-icon" />
    },
    {
      title: 'Leaf & Trash Cleanup',
      description: 'Complete yard waste removal services',
      icon: <FaBroom className="service-icon" />
    },
    {
      title: 'Bed Maintenance',
      description: 'Flower bed care and seasonal preparation',
      icon: <FaSeedling className="service-icon" />
    },
    {
      title: 'Mulching',
      description: 'Premium mulch installation for healthy plants',
      icon: <FaLayerGroup className="service-icon" />
    },
    {
      title: 'Landscaping Design & Service',
      description: 'Custom landscape design and installation',
      icon: <FaRulerCombined className="service-icon" />
    },
    {
      title: 'Retaining Walls',
      description: 'Structural and decorative wall solutions',
      icon: <FaBorderNone className="service-icon" /> // Alternative icon
    },
    {
      title: 'Fencing Services',
      description: 'New installation, repairs, and replacements',
      icon: <FaBorderNone className="service-icon" /> // Alternative icon
    },
    {
      title: 'Power Washing',
      description: 'Exterior cleaning for homes and hardscapes',
      icon: <FaWater className="service-icon" />
    },
    {
      title: 'Indoor/Outdoor Painting',
      description: 'Professional painting services for all surfaces',
      icon: <FaPaintRoller className="service-icon" />
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container" id="service-container">
        <div>
        <h2 className="section-title">Our Comprehensive Services</h2>
        <p className="section-subtitle">Professional care for every aspect of your property</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;