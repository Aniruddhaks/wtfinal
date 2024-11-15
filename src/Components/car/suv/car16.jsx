//Toyota Fortuner
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const FORTUNER = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "15.8 seconds" },
    { label: "Engine", value: "2755cc inline 4 cylinder" },
    { label: "Engine Type", value: "1 GD=FTV Turbocharged D-4D I4" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "201bhp @ 3000 rpm" },
    { label: "Max Torque", value: "500Nm @ 1600 rpm" },
    { label: "Fuel Economy(kmpl)", value: "14.2 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "4232000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Toyota Fortuner</h1>
          <p className="price">
            ₹42,32,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/mcziTaUz4uKhZ96E5f9W7YU-9-xIBrwOdffqCPuCBI4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy80NDcwOS9m/b3J0dW5lci1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTIwLmpw/ZWc_aXNpZz0wJnE9/ODA"
              alt="Toyota Fortuner"
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
                The Toyota Fortuner is a body-on frame SUV.
                Powered by a 2.8L diesel engine, it produces immense amounts of torque.
                A large SUV with massive road presence, the Fortuner sure is a head-turner.
                It is a practical 7-seater with a rugged design. Function over form is the mantra for Toyota with this.
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

export default FORTUNER;