import React from "react";
import { FaLeaf, FaUsers, FaAward, FaSeedling } from "react-icons/fa";
import aboutImage from "../assets/about-team.png"; // Add your image

const teamData = {};
function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Our lawn care team working" />
          </div>

          

          <div className="about-text">
            <h2>About Medina Services LLC</h2>
            <p className="about-subtitle">Professional Lawn Care Since 2016</p>

            <p>
              Medina Services, LLC was established in May of 2016 as a minority
              owned small business to provide landscaping, building maintenance
              and construction services. Medina Services has experience
              providing dedicated and quality services to a variety of different
              customers.
            </p>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaLeaf />
                </div>
                <h3>Eco-Friendly</h3>
                <p>
                  We use sustainable practices and organic products whenever
                  possible
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <h3>Family Owned</h3>
                <p>Locally owned and operated with personalized service</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaAward />
                </div>
                <h3>Certified</h3>
                <p>Fully licensed and insured professionals</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaSeedling />
                </div>
                <h3>Seasonal Care</h3>
                <p>Year-round maintenance programs tailored to your lawn</p>
              </div>
            </div>
{/* 
            <div className="team-section">
              <h3>Meet Our Team</h3>
              <div className="team-members">
                {teamData.map((member) => (
                  <div className="team-card" key={member.id}>
                    <img src={member.image} alt={member.name} />
                    <h4>{member.name}</h4>
                    <p>{member.position}</p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="stats-section">
              <div className="stat-item">
                <h4>500+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>10</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Satisfaction Guarantee</p>
              </div>
            </div>

            {/* <button className="cta-button">Meet Our Team</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
