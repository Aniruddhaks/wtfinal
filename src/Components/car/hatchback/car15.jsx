//Tata Altroz 
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const ALTROZ = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "15.8 seconds" },
    { label: "Engine", value: "1199cc inline 3 cylinder" },
    { label: "Engine Type", value: "1.2L Turbocharged Revotron" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "118bhp @ 5500 rpm" },
    { label: "Max Torque", value: "170Nm @ 1750 rpm" },
    { label: "Fuel Economy(kmpl)", value: "17.5 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1100000"
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Tata Altroz",
        price: "₹11,00,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Tata Altroz</h1>
          <p className="price">
            ₹11,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/ay0fyvUo7hAEfPhgeR39LHg1kwZ9z38zq4dVp2ONokE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTE1/MDE5L3RhdGEtYWx0/cm96LWxlZnQtZnJv/bnQtdGhyZWUtcXVh/cnRlcjcuanBlZz9p/c2lnPTAmd209MCZx/PTgw"
              alt="Tata Altroz"
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
                The Tata Altroz is a peppy little hatchback, with a sporty engine.
                It offers great VFM for the performance and practicality on offer.
                A sportier vehicle in the segment, overall a great choice.
                Just watch out for Tata after-sale service. 
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

export default ALTROZ;