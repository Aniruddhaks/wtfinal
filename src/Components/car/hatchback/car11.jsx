//Mercedes AMG A45 S
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const AMG= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "3.9 seconds" },
    { label: "Engine", value: "1991cc inline 4 cylinder" },
    { label: "Engine Type", value: "2.0L M139 Turbocharged I4" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "421bhp @ 6750 rpm" },
    { label: "Max Torque", value: "500Nm @ 5000 rpm" },
    { label: "Fuel Economy", value: "10 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "9370000"
    navigate('/emi', { state: { price } }); 
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Mercedes AMG A45 S",
        price: "₹93,70,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Mercedes AMG A45 S</h1>
          <p className="price">
            ₹93,70,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/7vCKikadhd08jSzaj4y2CjSaZA02C9DxCXaOmGlVtFg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG9wZ2Vhci5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9jYXJz/LWNhci9pbWFnZS8y/MDIzLzA3LzElMjBN/ZXJjZWRlcy1BTUcl/MjBBNDUuanBlZz93/PTQyNCZoPTIzOQ"
              alt="Mercedes AMG A45 S"
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
                The Mercedes AMG A45 S is a high-performance variant of the A-Class compact luxury car. 
                It features the most poerful poduction I4 engine, which is developed by AMG.
                It is a great handling vehicle, with an AWD system and an 8-speed DCT.
                It is a great option for those who want a high-performance vehicle with a comfortable ride.
            
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

export default AMG;