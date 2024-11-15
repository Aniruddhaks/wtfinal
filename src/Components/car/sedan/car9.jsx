//Skoda Slavia
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const SLAVIA= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "9.27 seconds" },
    { label: "Engine", value: "1498cc inline 4 cylinder" },
    { label: "Engine Type", value: "1.5L TSI with ACT" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "148bhp @ 5000-6000 rpm" },
    { label: "Max Torque", value: "250Nm @ 1500-3500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "19.62 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1580000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Skoda Slavia</h1>
          <p className="price">
            ₹15,80,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/NowoOL4vfOJ78b9eDFz3T-TQm6q4XypfNKD0nbFzUb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/U2tvZGEvU2xhdmlh/LzExODEwLzE3MTg3/NzM1Njc0NDMvZnJv/bnQtbGVmdC1zaWRl/LTQ3LmpwZz90cj13/LTY2NA"
              alt="Skoda Slavia"
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
                The Skoda Slavia is the Czech-counterpart of the Volkswagen Virtus.
                Based on the same platform as the Virtus, the Slavia is again agreat choice.
                One of the best things about the Slavia is its spacious interior.
                Powered by the same 1.5L TSI, it has a clever cylinder de-activation system seen on the Virtus as well.
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

export default SLAVIA;