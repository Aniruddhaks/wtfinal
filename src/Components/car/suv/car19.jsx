//Mahindra Scorpio N
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const SCORPIO = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "11 seconds" },
    { label: "Engine", value: "2184cc inline 4 cylinder" },
    { label: "Engine Type", value: "2.2L I4 mHawk 130" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "172bhp @ 3500 rpm" },
    { label: "Max Torque", value: "400Nm @ 1750-2750 rpm" },
    { label: "Fuel Economy(kmpl)", value: "16.53 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2454000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Mahindra Scorpio N</h1>
          <p className="price">
            ₹24,54,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/kkQMx1feTTrQsU3B_Q-pmTTe6v8e3m-cqBI17_qvElk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy80MDQzMi9z/Y29ycGlvLW4tZXh0/ZXJpb3ItcmlnaHQt/ZnJvbnQtdGhyZWUt/cXVhcnRlci03NS5q/cGVnP2lzaWc9MCZx/PTgw"
              alt="Mahindra Scorpio N"
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
            The Mahindra Scorpio N is a revamped version of the iconic Scorpio SUV. 
            It offers a blend of ruggedness, comfort, and modern features. 
            A powerful diesel engine that generates a healthy amount of power, the Scorpio N is a very capable SUV.
            It is Value-For-Money product and with massive improvements in the Mahindra brand, the car is very strong choice in the segment. 
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

export default SCORPIO;