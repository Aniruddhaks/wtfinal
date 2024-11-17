//Maruti Swift
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const SWIFT = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "15.8 seconds" },
    { label: "Engine", value: "1197cc inline 3 cylinder" },
    { label: "Engine Type", value: "Z 12E with ISS" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "80bhp @ 5700 rpm" },
    { label: "Max Torque", value: "111.7Nm @ 4300 rpm" },
    { label: "Fuel Economy(kmpl)", value: "25.75 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "959000"
    navigate('/emi', { state: { price } }); 
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Maruti Swift",
        price: "₹9,59,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Maruti Swift</h1>
          <p className="price">
            ₹9,59,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/2va-a9SPOi0X-6gqgdtDWvssoN_4h2KAfeif_HnRGDk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzMxMHgxNzQvbi9j/dy9lYy8xNTkwOTkv/c3dpZnQtZXh0ZXJp/b3ItcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci5qcGVnP2lz/aWc9MCZxPTgw"
              alt="Maruti Swift"
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
                The Maruti Swift is a compact hatchback with practicality embeded in its core.
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

export default SWIFT;