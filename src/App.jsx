import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import Testimonials from "./components/Testimonials";
import ServiceCarts from "./components/ServiceCarts";
import ServicePage from "./components/ServicePage"
import "./App.css";

function App() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar onGetQuoteClick={() => setShowQuoteForm(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home onGetQuoteClick={() => setShowQuoteForm(true)} />
                {/* <Contact /> */}
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServiceCarts />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
