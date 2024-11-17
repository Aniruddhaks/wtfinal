//Maruti Baleno
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const BALENO = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "15.8 seconds" },
    { label: "Engine", value: "1197cc inline 4 cylinder" },
    { label: "Engine Type", value: "1.2L VVT" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "88bhp @ 6000 rpm" },
    { label: "Max Torque", value: "113Nm @ 4400 rpm" },
    { label: "Fuel Economy(kmpl)", value: "22.9 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "983000"
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Maruti Baleno",
        price: "₹9,83,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Maruti Baleno</h1>
          <p className="price">
            ₹9,83,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/ZVEFtXDoEAly-9jahwhhochRcdL5GgLaNjEZmAHCmOg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8xOTA4MjEv/bWFydXRpLXN1enVr/aS1iYWxlbm8tcmln/aHQtZnJvbnQtdGhy/ZWUtcXVhcnRlcjAu/anBlZz9pc2lnPTAm/d209MSZxPTgw"
              alt="Maruti Baleno"
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
                The Maruti Baleno is a compact hatchback with practicality embeded in its core.
                It is a perfect blend of style, comfort, and practicality.
                It offers great fuel economy and is a very beginner-friendly car.
                Power delivery is linear and predictable. Overall a great option.
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

export default BALENO;