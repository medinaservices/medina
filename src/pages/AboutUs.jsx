import React from "react";
import { FaLeaf, FaUsers, FaAward, FaSeedling } from "react-icons/fa";
import aboutImage from "../assets/about.jpg"; // Add your image

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
            {/* <p className="about-subtitle">Professional Lawn Care Since 2016</p> */}

            <p>
            Medina Services was founded in 2016 with a simple promise: to deliver honest, reliable, and
hardworking service you can feel good about inviting to your home. What began as a small
family venture between my wife and me has grown into a company built on trust, consistency,
and genuine care for the people we serve.
When we started this business, we weren’t just thinking about landscaping—we were thinking
about building a future for our family. At the time, I was going back to school to pursue my
business degree, attending classes during the day and learning about ABA therapy in the
evenings for our oldest son, who has autism. Life was busy and challenging, but it taught us the
importance of patience, communication, and showing up for the people who rely on you. Those
same values are the foundation of our company today.
Every service we offer is guided by the belief that quality work and strong relationships go hand
in hand. Over the years, we’ve expanded our services with the same goal in mind: to make life
easier for our clients and to treat their homes with the same care and respect we give our own.
At Medina Services LLC, we provide dependable, high-quality services that keep properties
looking their best and operating smoothly. As a trusted local provider in Northern Virginia, we
specialize in commercial and residential grounds maintenance, home repair and handyman
services, and general contracting. Our team is committed to delivering reliable solutions
tailored to the unique needs of every client.
We’re grateful for every family, homeowner, and business that chooses us. Medina Services
isn’t just our livelihood—it’s a part of our story, and we look forward to being a reliable part of
yours too.
<h4>Thank you for trusting us.</h4>
            </p>

            {/* <div className="about-features">
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
            </div> */}
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

            {/* <div className="stats-section">
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
            </div> */}

            {/* <button className="cta-button">Meet Our Team</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
