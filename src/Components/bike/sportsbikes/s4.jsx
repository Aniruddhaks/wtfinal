//Ducati Panigale V4
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import ducatip from './ducatip.png';


const PDUCATI= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "2.5 seconds" },
    { label: "Engine", value: "1103cc Desmosedici V4" },
    { label: "Engine Type", value: "90-degree V4, liquid-cooled" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "215bhp @ 13000 rpm" },
    { label: "Max Torque", value: "123Nm @ 9500 rpm" },
    { label: "Fuel Economy", value: "16 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2495000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Ducati Panigale V4",
        price: "₹24,95,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Ducati Panigale V4</h1>
          <p className="price">
            ₹24,95,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={ducatip}
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
            The Ducati Panigale V4 is a flagship superbike that merges cutting-edge technology with race-inspired performance. 
            Powered by a 1,103cc Desmosedici Stradale V4 engine, it delivers 215.5 hp, ensuring breathtaking acceleration and top-end power.
            Advanced aerodynamics, including MotoGP-derived winglets, provide superior stability at high speeds.
            These specs definitely make the Panigale a force to be reckoned with on the track, and a no brainer for someone who enjoys massive power surges.
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

export default PDUCATI;
