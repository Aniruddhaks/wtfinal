//Triumph Tiger 900
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const TRIUMPH= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "6.5 seconds" },
    { label: "Engine", value: "888cc liquid-cooled inline 3-cylinder" },
    { label: "Engine Type", value: "900cc Inline 3" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "106.5bhp @ 9500 rpm" },
    { label: "Max Torque", value: "90Nm @ 6850 rpm" },
    { label: "Fuel Economy", value: "22 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1415000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Triumph Tiger 900",
        price: "₹14,15,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Triumph Tiger 900</h1>
          <p className="price">
            ₹14,15,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/HVbWSHi3fCBZyVByC9xnHdGER6o_UY2r6P7cNJhJO7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvNTE0NDQv/dGlnZXItcmlnaHQt/ZnJvbnQtdGhyZWUt/cXVhcnRlci5qcGVn/P3E9ODAmd209Mw"
              alt="Triumph Tiger 900"
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
            The Triumph Tiger 900 is designed for adventure-seekers who crave both off-road capability and on-road comfort.
            Its versatile engine, suspension, and braking system make it an excellent choice for long-distance touring, daily commuting, and light trail duties.
            The Tiger 900 is a spectacular bike in its segment, with great electronics and features and a powerful and purpose-built engine.
            It has great ergonomics and is very comfortable to ride. Triumph also has multiple OEM accessories for the Tiger 900, which makes the experience even better.
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

export default TRIUMPH;
