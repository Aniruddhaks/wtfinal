//TVS Jupiter
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import jp from './jp.png';


const JTVS= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "NA" },
    { label: "Engine", value: "97.2 cc, air-cooled, single-cylinder, 4-stroke" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "8.02 bhp at 6500 rpm" },
    { label: "Max Torque", value: "9.8 Nm at 5000 rpm" },
    { label: "Fuel Economy", value: "55 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "86000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "TVS Jupiter",
        price: "₹86,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">TVS Jupiter</h1>
          <p className="price">
            ₹86,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={jp}
              alt="TVS Jupiter" 
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
            The TVS Jupiter is a versatile scooter designed for daily commuters, offering a blend of style, performance, and practicality. 
            It is powered by a 109.7cc single-cylinder engine, delivering a maximum power output of 8.02 PS at 6,500 rpm and a peak torque of 9.8 Nm at 5,000 rpm. 
            The scooter features a smooth, fuel-efficient engine that offers a mileage of approximately 50-55 kmpl, making it an ideal choice for city commuting
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

export default JTVS;
