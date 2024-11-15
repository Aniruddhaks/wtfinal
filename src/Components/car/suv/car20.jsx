//Tata Harrier
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const HARRIER = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "11 seconds" },
    { label: "Engine", value: "1956 cc, Inline 4 Cylinder" },
    { label: "Engine Type", value: "Kryotec 2.0L Turbocharged Engine" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "168bhp @ 3750 rpm" },
    { label: "Max Torque", value: "350Nm @ 1750-2500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "14.6 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2654000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Tata Harrier</h1>
          <p className="price">
            ₹26,54,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/g6F9kpT0i0DMOLm4oHf3YPW7B1cHLYAjhIadnGUURh8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTYz/NzQxL3RhdGEtaGFy/cmllci1sZWZ0LWZy/b250LXRocmVlLXF1/YXJ0ZXIxMC5qcGVn/P2lzaWc9MCZ3bT00/JnE9ODA"
              alt="Tata Harrier"
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
            The Tata Harrier is a mid-size SUV that debuted in India in 2019.
            It is a significant departure from Tata’s previous SUV offerings.
            It boasts a modern design language, premium interiors, and a robust engine.
            This vehicle marked a new beginning for Tata, where the company completely overhauled their design language.
            This new Harrier is better than ever and is here to disrupt the mid-size segment yet again.
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

export default HARRIER;