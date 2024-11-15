//Maruti Suzuki Ciaz
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const CIAZ = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "13.4 seconds" },
    { label: "Engine", value: "1462cc inline 4 cylinder" },
    { label: "Engine Type", value: "K15 Smart Hybrid" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "103bhp @ 6000 rpm" },
    { label: "Max Torque", value: "138Nm @ 4400 rpm" },
    { label: "Fuel Economy", value: "20.04 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1305000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Maruti Suzuki Ciaz </h1>
          <p className="price">
            ₹13,05,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/D1VnQ5FMj4z6HkE727wa8GkkOw9RO25ofNoM9oR8Db4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzI3MngxNTMvbi9j/dy9lYy80ODU0Mi9j/aWF6LWV4dGVyaW9y/LXJpZ2h0LWZyb250/LXRocmVlLXF1YXJ0/ZXItMy5qcGVnP2lz/aWc9MCZxPTgw"
              alt="Maruti Suzkui Ciaz"
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
                The Maruti Suzuki  Ciaz is a compact sedan for the masses.
                It is a no-nonsense option with practical engine options and great space on the inside.
                It is one of the more affordable options in the segment.
                With a mild-hybrid system, The Ciaz is great on fuel.
                With a very wide dealership/service network, it is a great option for those who want a hassle-free ownership experience.
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

export default CIAZ;