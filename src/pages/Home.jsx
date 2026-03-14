import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaShieldAlt, FaUsers } from 'react-icons/fa';
import groundsImage from '../assets/grounds.png';
import repairImage from '../assets/property.png';
import remodelingImage from '../assets/remodeling.png';

const featuredServices = [
  {
    id: 1,
    title: 'Grounds Maintenance',
    description:
      'Our commercial and residential grounds maintenance services are designed to protect your property, enhance curb appeal, and ensure safety throughout the year. Whether you are a homeowner, HOA, business owner or property manager we tailor our grounds maintenance services to meet your unique needs and deliver results you can rely on.',
    image: groundsImage,
    imageAlt: 'Grounds maintenance service',
  },
  {
    id: 2,
    title: 'Property Repair & Maintenance',
    description:
      'Northern Virginia homeowners and businesses trust us for fast service, expert workmanship, and peace of mind. One call. One team. Every repair done right. Medina Services, LLC is Northern Virginia’s go-to property repair service team who delivers fast and dependable results. We specialize in ALL repairs.',
    image: repairImage,
    imageAlt: 'Property repair and maintenance service',
  },
  {
    id: 3,
    title: 'Remodeling',
    description:
      'From concept to completion, our licensed experts deliver full-service remodeling you can trust. Our services provide quality craftmanship and clear communication from start to finish. Whether it’s updating a single room or managing a full property renovation, we bring precision, reliability, and integrity to every project.',
    image: remodelingImage,
    imageAlt: 'Remodeling service',
  },
];

function Home({ onGetQuoteClick }) {
  useEffect(() => {
    document.title = 'Medina Services LLC';
  }, []);

  return (
    <main className="home-page">
      <section className="home-brand-block">
        <div className="home-brand-copy">
          <img
            src="/images/logo.png"
            alt="Medina Services Logo"
            className="home-brand-logo"
          />
          <p className="home-brand-text">
            Providing high-quality landscaping, remodeling, home repair services since 2016, with a focus on craftsmanship and customer satisfaction.
          </p>
        </div>
        <div className="home-values">
          <div className="home-value-card">
            <FaHandshake className="home-value-icon" />
            <h3>Honest</h3>
          </div>
          <div className="home-value-card">
            <FaShieldAlt className="home-value-icon" />
            <h3>Reliable</h3>
          </div>
          <div className="home-value-card">
            <FaUsers className="home-value-icon" />
            <h3>Family-Owned</h3>
          </div>
        </div>
      </section>

      <section id="services" className="home-services-preview">
        <div className="home-section-heading">
          <p className="home-eyebrow">Services Overview</p>
          <h2>
            We provide commercial and residential services for grounds maintenance, remodeling,
            property repair and maintenace.
          </h2>
        </div>
        <div className="home-service-grid">
          {featuredServices.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="home-service-card">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="home-service-image"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>View Services</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
