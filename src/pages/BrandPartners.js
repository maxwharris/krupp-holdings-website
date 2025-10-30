import React from 'react';
import BrandLogo from '../components/BrandLogo';
import './BrandPartners.css';

function BrandPartners() {
  const brands = [
    {
      name: 'Liquid Death',
      link: 'https://liquiddeath.com/',
      image: '/brands/liquiddeath.png'
    },
    {
      name: 'SaintJames Iced Tea',
      link: 'https://saintjamesicedtea.com/',
      image: '/brands/saintjamesicedtea.avif'
    },
    {
      name: 'Highground',
      link: 'https://highgroundchips.com/',
      image: '/brands/highground.avif'
    },
    {
      name: 'Drip',
      link: 'https://www.thedrip.vip/',
      image: '/brands/drip.png'
    },
    {
      name: '458 Capital',
      link: 'https://www.458capital.com/',
      image: '/brands/458capital.jpg'
    },
    {
      name: 'Chlorophyll Water',
      link: 'https://chlorophyllwater.com/',
      image: '/brands/chlorophyllwater.png'
    },
    {
      name: 'Malk',
      link: 'https://malkorganics.com/',
      image: '/brands/malk.avif'
    },
    {
      name: 'Chipoys',
      link: 'https://chipoys.com/',
      image: '/brands/chipoys.svg'
    },
    {
      name: 'Afterlife',
      link: 'https://www.afterlifeag.com/',
      image: '/brands/afterlife.png'
    },
    {
      name: 'Overeasy',
      link: 'https://overeasyfoods.com/',
      image: '/brands/overeasy.png'
    },
    {
      name: 'Cathead Distillery',
      link: 'https://catheaddistillery.com/',
      image: '/brands/cathead.svg'
    },
    {
      name: 'Roar Organic',
      link: 'https://roarorganic.com/',
      image: '/brands/roar.png'
    },
    {
      name: 'Foods You Know',
      link: 'https://www.foodsyouknow.com/',
      image: '/brands/foodsyouknow.png'
    },
    {
      name: 'JuicePress',
      link: 'https://www.juicepress.com/',
      image: '/brands/juicepress.jpg'
    },
    {
      name: 'Packable',
      link: 'https://www.packable.com/',
      image: '/brands/packable.png'
    },
    {
      name: 'Acadaca',
      link: 'https://www.acadaca.com/',
      image: '/brands/acadaca.jpg'
    },
    {
      name: 'Dry Water',
      link: 'https://drywater.com',
      image: '/brands/drywater.svg'
    },
    {
      name: 'Durational Capital Management',
      link: 'https://durational.com',
      image: '/brands/durational.png'
    },
    {
      name: 'Garage Beer',
      link: 'https://drinkgaragebeer.com',
      image: '/brands/garagebeer.png'
    },
    {
      name: 'Raptor Group',
      link: 'https://raptorgroup.com',
      image: '/brands/raptor.svg'
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
