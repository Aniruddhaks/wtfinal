//Aprillia RSV4 Factory
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import ap from './ap.png';


const APRILLIA= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "2.5 seconds" },
    { label: "Engine", value: "1103cc Desmosedici V4" },
    { label: "Engine Type", value: "90-degree V4, liquid-cooled" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "217bhp @ 13000 rpm" },
    { label: "Max Torque", value: "125Nm @ 10500 rpm" },
    { label: "Fuel Economy", value: "16 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2875000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Aprilli RSV4 Factory",
        price: "₹28,75,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Aprillia RSV4 Factory</h1>
          <p className="price">
            ₹28,75,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={ap}
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
            The Aprilia RSV4 is a superbike designed for unparalleled performance and cutting-edge technology. 
            Powered by a 1,099cc V4 engine, it produces 217 hp at 13,000 rpm and 125 Nm of torque at 10,500 rpm, delivering exceptional power and thrilling acceleration. 
            A 6-speed gearbox with a quick-shifter ensures seamless shifts, while the APRC (Aprilia Performance Ride Control) suite offers advanced rider aids like traction control, wheelie control, and multiple riding modes
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

export default APRILLIA;
