//ATHER 450X
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import at from './at.png';


const ATHER= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "NA" },
    { label: "Engine", value: "6.4 kW Permanent Magnet Synchronous Motor (PMSM)" },
    { label: "Engine Type", value: "3.7 kWh Lithium-ion, IP67 rated for water and dust resistance" },
    { label: "Fuel Type", value: "Electric" },
    { label: "Max Power", value: "9bhp" },
    { label: "Max Torque", value: "26Nm" },
    { label: "Range", value: "150kms" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "150800"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Ather 450X",
        price: "₹1,50,800"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Ather 450X</h1>
          <p className="price">
            ₹1,50,800/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={at}
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
            The Ather 450X is a high-performance electric scooter offering a 6.4 kW motor and 26 Nm of torque, enabling rapid acceleration from 0-40 km/h in just 3.3 seconds. 
            It features a 3.7 kWh battery providing a range of up to 150 km per charge, and has a top speed of 90 km/h. 
            The scooter comes with a 7-inch TFT touchscreen, GPS navigation, and multiple riding modes (Eco, Sport, Warp). 
            The Ather 450X also boasts safety features like hill start assist and combined braking system.
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

export default ATHER;
