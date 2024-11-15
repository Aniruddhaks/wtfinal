//Audi Q7
import React, { useState } from 'react';
//import { Card, CardContent } from '@/components/ui/card';
//import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const AUDI = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "5 seconds" },
    { label: "Engine", value: "2999cc turbocharged V6" },
    { label: "Engine Type", value: "3.0L Turbocharged V6" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "336bhp @ 6100 rpm" },
    { label: "Max Torque", value: "500Nm @ 3800-5800 rpm" },
    { label: "Fuel Economy(kmpl)", value: "12.7 kmpl(combined)" }
  ];
  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "8800000"; // Set the price as a number (no symbols)
    navigate('/emi', { state: { price } }); // Pass the price as state to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Audi Q7 55TFSI</h1>
          <p className="price">
            ₹88,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/oXIPLS1WndVGxaE7KZ1GMGWlI7VFN-XqDQjKwg9Kcs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIw/LWF1ZGktcTctMjA2/LTE1ODQzMjI1OTIu/anBnP2Nyb3A9MC43/OTB4dzowLjU5NHho/OzAuMTM2eHcsMC4y/MzN4aCZyZXNpemU9/MzAwOio"
              alt="Audi Q7"
              className="product-image"
            />
          </Card>

          <Card className="specs-card">
            <CardContent className="card-content">
              <h2 className="section-title">Specifications</h2>
              <div className="specs-list">
                {specs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overview-card">
          <CardContent className="card-content">
            <h2 className="section-title">Overview</h2>
            <p className="overview-text">
            The Audi Q7 has been lauded not only for its size and space but also for its on- and off-road performance.
            This time the carmaker has taken its latest version a notch higher with updated styling, design, and features.
            However, it comes only with a petrol drivetrain, unlike its predecessor's diesel counterpart.
            Despite lacking the frugal bit now, it sure is at par in terms of performance and capability.
            </p>

            <div className="button-container">
              <Button 
                className="buy-button"
                onClick={() => window.alert('Proceeding to checkout...')}
              >
                <ShoppingCart className="button-icon" />
                Buy Now
              </Button>

              <Button 
                className="emi-button"
                onClick={handleEmiNavigation}
              >
                <Calculator className="button-icon" />
                EMI Calculator
              </Button>
            </div>
          </CardContent>
        </Card>

        {showEmiCalculator && (
          <div className="modal-overlay">
            <Card className="modal-content">
              <h3 className="modal-title">EMI Calculator</h3>
              <Button 
                className="modal-close"
                onClick={() => setShowEmiCalculator(false)}
              >
                Close
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AUDI;