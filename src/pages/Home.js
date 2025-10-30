import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-logo fade-in">KRUPP HOLDINGS LLC</h1>
          <p className="hero-subtitle fade-in">Propelling Early-Stage Companies to Sustainable Growth</p>
          <div className="hero-buttons fade-in">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
