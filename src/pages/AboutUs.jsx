import React, { useEffect } from "react";
import { FaAward, FaHandshake, FaHome, FaUsers } from "react-icons/fa";
import aboutImage from "../assets/about-last.jpeg";

const pillars = [
  {
    title: "Family-Built",
    description:
      "Medina Services started as a family venture and still operates with the same level of personal accountability.",
    icon: <FaUsers />,
  },
  {
    title: "Reliable Service",
    description:
      "We show up, communicate clearly, and do the work with the consistency clients expect from a long-term partner.",
    icon: <FaHandshake />,
  },
  {
    title: "Quality Work",
    description:
      "Every repair, maintenance visit, and improvement project is handled with care, craftsmanship, and respect for the property.",
    icon: <FaAward />,
  },
  {
    title: "Property-Focused",
    description:
      "We support both residential and commercial clients across Northern Virginia with practical, dependable solutions.",
    icon: <FaHome />,
  },
];

function AboutUs() {
  useEffect(() => {
    document.title = "About Us | Medina Services LLC";
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-hero">
          <div className="about-copy">
            <h3>Built on trust, consistency, and care for the people we serve.</h3>
            <p className="about-lead">
              Medina Services LLC was founded in 2016 with a simple promise:
              deliver honest, reliable, hardworking service that clients feel
              good about inviting to their homes and properties.
            </p>
            <div className="about-story">
              <p>
                What began as a small family venture between husband and wife
                grew from a deeper goal than landscaping alone. The business was
                built while balancing school, family responsibilities, and the
                day-to-day discipline required to keep showing up for the people
                who depend on you.
              </p>
              <p>
                That experience shaped the company. Patience, communication,
                follow-through, and respect for the client are not marketing
                lines here. They are the operating standards behind every job we
                take on.
              </p>
              <p>
                Over time, Medina Services expanded to meet more of what clients
                actually need: commercial and residential grounds maintenance,
                home repair and handyman services, and general contracting. The
                goal stayed the same: make life easier for clients and care for
                their properties the same way we would care for our own.
              </p>
              <p>
                We are grateful to every homeowner, family, business, and
                property manager who trusts us. Medina Services is part of our
                story, and we intend to be a reliable part of yours.
              </p>
            </div>
            <p className="about-signoff">Thank you for trusting us.</p>
          </div>

          <div className="about-image-panel">
            <div className="about-image">
              <img src={aboutImage} alt="Medina Services team at work" />
            </div>
            <div className="about-image-caption">
              Serving Northern Virginia with dependable maintenance, repairs,
              and remodeling since 2016.
            </div>
          </div>
        </div>

        <div className="about-pillars">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="about-pillar-card">
              <div className="about-pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
