import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            KRUPP HOLDINGS
          </div>
          <p className="footer-tagline">
            Propelling early-stage companies to sustainable growth
          </p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Krupp Holdings, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
