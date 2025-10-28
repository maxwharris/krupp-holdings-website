import React from 'react';
import './BrandLogo.css';

function BrandLogo({ name, link, image }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="brand-logo-card"
      aria-label={`Visit ${name} website`}
    >
      <div className="brand-logo-image-container">
        <img src={image} alt={`${name} logo`} className="brand-logo-image" />
      </div>
      <div className="brand-logo-overlay">
        <span className="brand-logo-name">{name}</span>
      </div>
    </a>
  );
}

export default BrandLogo;
