import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="fade-in">About Krupp Holdings</h1>
          <p className="fade-in">Forward-thinking investment firm propelling early-stage companies</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern office building" 
              />
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                KRUPP HOLDINGS, LLC is a forward-thinking firm committed to propelling early-stage companies in the consumer, food, wellness, and tech sectors. With deep industry expertise, we craft customized strategies that fuel both rapid and sustainable growth. Our team is skilled in business development, forming strategic partnerships, and securing the essential capital needed to drive companies to their next stage of evolution.
              </p>
              <p>
                With a proven track record, Krupp Holdings has successfully advised, invested and raised tens of millions of dollars for a diverse range of brands within the consumer packaged goods (CPG) space. Leveraging decades of collective experience, our team has an expert understanding of what it takes to build, scale, and ultimately exit businesses at the right moment.
              </p>
              <p>
                We specialize in providing strategic guidance across all stages of the growth journey, helping companies navigate challenges and seize emerging opportunities for long-term success. Whether optimizing operations, sales, raising capital, or preparing for an exit, Krupp Holdings is dedicated to driving results and unlocking value at every pivotal moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h3>Business Development</h3>
              <p>Strategic partnerships and growth initiatives tailored to your business needs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Capital Raising</h3>
              <p>Securing essential funding to drive companies to their next stage of evolution</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Strategic Guidance</h3>
              <p>Expert advice across all stages of the growth journey</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Exit Strategy</h3>
              <p>Preparing and executing successful business exits at the optimal moment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
