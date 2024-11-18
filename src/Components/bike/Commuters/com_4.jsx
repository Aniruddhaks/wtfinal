//Hero Splendor
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import sp from './sp.png';


const HERO= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "NA" },
    { label: "Engine", value: "97.2 cc, air-cooled, single-cylinder, 4-stroke" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "7.91 bhp at 8,000 rpm" },
    { label: "Max Torque", value: "8.05 Nm at 6,000 rpm" },
    { label: "Fuel Economy", value: "80 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "90847"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Hero Splendor",
        price: "₹90,847"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Hero Splendor</h1>
          <p className="price">
            ₹90,847/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={sp}
              alt="Hero Splendor" 
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
            With a proven track record of durability and low maintenance costs, the Splendor continues to be a top choice for those looking for a hassle-free, economical ride.
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

export default HERO;
