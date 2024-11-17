import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="mission-section">
          <h1>Our Mission</h1>
          <p className="mission-text">
            At IgnitionX, we're committed to transforming the traditional vehicle 
            purchasing process into a seamless, digital experience. Our platform combines 
            extensive vehicle information and personalized service to deliver exceptional 
            value to our customers.
          </p>
          <p className="mission-text">
            Whether you're in the market for a luxury sedan, a robust SUV, or a 
            high-performance motorcycle, our team of automotive experts is here to guide 
            you through every step of your journey.
          </p>
        </div>

        <div className="features-section">
          <h2>Why Choose IgnitionX?</h2>
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span className="feature-text">
                Comprehensive vehicle specifications and comparisons
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span className="feature-text">
              Wide variety of cars and bikes
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span className="feature-text">
                Transparent pricing options
              </span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🤝</span>
              <span className="feature-text">
                Expert customer support throughout your purchase
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;