import React from 'react';
import BrandLogo from '../components/BrandLogo';
import './BrandPartners.css';

function BrandPartners() {
  // Placeholder brands - will be replaced with actual brand data
  const brands = [
    {
      name: 'Brand Partner 1',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+1'
    },
    {
      name: 'Brand Partner 2',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+2'
    },
    {
      name: 'Brand Partner 3',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+3'
    },
    {
      name: 'Brand Partner 4',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+4'
    },
    {
      name: 'Brand Partner 5',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+5'
    },
    {
      name: 'Brand Partner 6',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Brand+6'
    }
  ];

  return (
    <div className="brand-partners">
      <section className="brand-partners-hero">
        <div className="brand-partners-hero-overlay"></div>
        <div className="brand-partners-hero-content">
          <h1 className="fade-in">Our Brand Partners</h1>
          <p className="fade-in">Building iconic brands across consumer, food, wellness, and tech sectors</p>
        </div>
      </section>

      <section className="brand-partners-content section">
        <div className="container">
          <div className="brand-partners-intro">
            <h2>Portfolio Companies</h2>
            <p>
              We partner with visionary founders and management teams to build category-defining brands. 
              Our portfolio represents a diverse range of innovative companies that are reshaping their industries.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <BrandLogo
                key={index}
                name={brand.name}
                link={brand.link}
                image={brand.image}
              />
            ))}
          </div>

          <div className="brand-partners-cta">
            <h3>Interested in partnering with us?</h3>
            <p>We're always looking for exceptional companies to add to our portfolio.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandPartners;
