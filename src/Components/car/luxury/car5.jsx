//Toyota LandCruiser
import React, { useState } from 'react';
//import { Card, CardContent } from '@/components/ui/card';
//import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const LAND = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "5 seconds" },
    { label: "Engine", value:"3346cc Turbocharged V6, DOHC" },
    { label: "Engine Type", value: "Turbocharged V6" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "304bhp @ 4000 rpm" },
    { label: "Max Torque", value: "700Nm @ 1600 rpm" },
    { label: "Fuel Economy(kmpl)", value: "9.3 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "21000000"; // Set the price as a number (no symbols)
    navigate('/emi', { state: { price } }); // Pass the price as state to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Toyota Land Cruiser</h1>
          <p className="price">
            ₹2,10,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/ZCeDCedq3ugcY9qfo0fOc-3rrsfr5CHAv3nxegVjEZM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/dHJhZGVyYXUtcmVz/LmNsb3VkaW5hcnku/Y29tL2ltYWdlL3Vw/bG9hZC9lX3RyaW06/MTAsZl9hdXRvL2Nf/c2NhbGUsdF9jZ19i/YXNlLHdfMzQ1L2ds/YXNzZXMvMElqVlFs/RE0uanBn"
              alt="Toyota Land Cruiser"
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
            The Toyota Land Cruiser is a rugged SUV, designed to tackle the toughest terrain. 
            With its powerful engine and advanced 4-wheel drive system, it's perfect for off-road adventures.
            Loved among politicians and goverment personnel in our country for its imposing stance and design, the Toyota Land Cruiser doesnt disappoint.
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

export default LAND;