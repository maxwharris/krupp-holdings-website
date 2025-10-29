import React from 'react';
import BrandLogo from '../components/BrandLogo';
import './BrandPartners.css';

function BrandPartners() {
  const brands = [
    {
      name: 'Liquid Death',
      link: 'https://liquiddeath.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Liquid+Death'
    },
    {
      name: 'SaintJames Tea',
      link: 'https://saintjamesicedtea.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=SaintJames+Tea'
    },
    {
      name: 'Highground',
      link: 'https://highgroundchips.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Highground'
    },
    {
      name: 'Drip',
      link: 'https://www.thedrip.vip/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Drip'
    },
    {
      name: '458 Capital',
      link: 'https://www.458capital.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=458+Capital'
    },
    {
      name: 'Chlorophyll Water',
      link: 'https://chlorophyllwater.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Chlorophyll+Water'
    },
    {
      name: 'Malk',
      link: 'https://malkorganics.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Malk'
    },
    {
      name: 'Chipoys',
      link: 'https://chipoys.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Chipoys'
    },
    {
      name: 'Afterlife',
      link: 'https://www.afterlifeag.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Afterlife'
    },
    {
      name: 'Overeasy',
      link: 'https://overeasyfoods.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Overeasy'
    },
    {
      name: 'Cathead Distillery',
      link: 'https://catheaddistillery.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Cathead+Distillery'
    },
    {
      name: 'Roar Organic',
      link: 'https://roarorganic.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Roar+Organic'
    },
    {
      name: 'League of Play',
      link: 'https://leagueofplay.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=League+of+Play'
    },
    {
      name: 'Foods You Know',
      link: 'https://www.foodsyouknow.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Foods+You+Know'
    },
    {
      name: 'Juice Press',
      link: 'https://www.juicepress.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Juice+Press'
    },
    {
      name: 'Packable',
      link: 'https://www.packable.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Packable'
    },
    {
      name: 'Sato Shiki',
      link: 'https://satoshiki.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Sato+Shiki'
    },
    {
      name: 'Acadaca',
      link: 'https://www.acadaca.com/',
      image: 'https://via.placeholder.com/300x300/9bd898/1a1a1a?text=Acadaca'
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
