//Jeep Meridian
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import meridian from './meridian.png'
import './t3.css';


const MERIDIAN = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "12.8 seconds" },
    { label: "Engine", value: "1956cc, inline 4 cylinder" },
    { label: "Engine Type", value: "2.0L Multijet II" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "168bhp @ 37500 rpm" },
    { label: "Max Torque", value: "350Nm @ 1700-2500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "12 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "3959000"
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Jeep Meridian",
        price: "₹39,59,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Jeep Meridian</h1>
          <p className="price">
            ₹39,59,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={meridian}
              alt="Jeep Meridian"
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
            The Jeep Meridian is a rugged and refined SUV, offering a comfortable and feature-packed interior.
            It has impressive off-road capability, and a strong diesel engine.
            Its bold exterior design and luxurious interior make it a compelling choice in the Indian market.
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

export default MERIDIAN;