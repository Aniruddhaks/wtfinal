//Lexus ES300h
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const LEXUS = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "8.4 seconds" },
    { label: "Engine", value: "2487cc 4 cylinder + 1.6kWh Ni-Metal hydride battery" },
    { label: "Engine Type", value: "2.5L A25A-FXS I4" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "215bhp @ 5700 rpm" },
    { label: "Max Torque", value: "221Nm @ 3800-5800 rpm" },
    { label: "Fuel Economy(kmpl)", value: "22.4 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "8800000"; 
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Lexus ES300h",
        price: "₹88,00,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Lexus ES300h</h1>
          <p className="price">
            ₹88,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/134ZwRdt_n3T-zJHZNMFLooP6k8M9dCK_GzS4epAne0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIz/LWxleHVzLWVzLTMw/MGgtZi1zcG9ydC0x/NzQtNjQzMDFhOWI3/OGYwNS5qcGc_Y3Jv/cD0wLjg0OXh3OjAu/NjM1eGg7MC4wNzg1/eHcsMC4zNjV4aCZy/ZXNpemU9MzAwOio"
              alt="Lexus ES300h" 
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
            The Lexus ES300h is a luxury sedan that offers great ride quality , comfortable seating and a hybrid powertrain.
            This hybrid powertrain is very silent, adding another luxurious touch to the experiences.
            Packed with features, the ES300h is a great choice for those who want a luxurious and comfortable ride.
            </p>

            <div className="button-container">
              <Button 
                className="buy-button"
                onClick={handleBuyNowNavigation}
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

export default LEXUS;