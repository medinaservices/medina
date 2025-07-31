import React from 'react';
import Header from '../components/Header';
import Services from '../components/ServiceCarts';
import Testimonials from '../components/Testimonials';
import AboutPreview from '../components/AboutPreview'; // Optional section
//import CallToAction from '../components/CallToAction'; // Optional section
// import Business from '../components/ServiceCarts'

function Home({ onGetQuoteClick }) {
  
  return (
    <main className="home-page">
      {/* Hero Section */}
      <Header onGetQuoteClick={onGetQuoteClick} />
      
  
      {/* Services Preview */}
      <section id="services">
        <Services />
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="section-dark">
        <Testimonials />
      </section>
      
      {/* Optional About Preview */}
      <section id="about-preview">
        <AboutPreview />
      </section>
    </main>
  );
}

export default Home;