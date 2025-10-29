import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="fade-in">Get in Touch</h1>
          <p className="fade-in">Let's discuss how we can help propel your business forward</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                We're always interested in hearing from innovative companies and entrepreneurs. 
                Reach out to discuss partnership opportunities or learn more about how we can help.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-item-content">
                    <h3>Email</h3>
                    <a href="mailto:info@kruppholdings.com">info@kruppholdings.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div className="contact-item-content">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/mitchell-krupp-682a557/" target="_blank" rel="noopener noreferrer">
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <h3>Looking to Partner?</h3>
                <p>
                  We partner with visionary founders and management teams across consumer, food, wellness, and tech sectors.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <form
                action="https://formsubmit.co/mkrupp@kruppcapital.com"
                method="POST"
                className="contact-form"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Krupp Holdings" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
