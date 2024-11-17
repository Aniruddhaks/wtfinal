//RE Himalayan 450
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const HIMALAYAN= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "6.5 seconds" },
    { label: "Engine", value: "451cc liquid-cooled single cylinder" },
    { label: "Engine Type", value: "452 Sherpa" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "40.2bhp @ 6750 rpm" },
    { label: "Max Torque", value: "40.8Nm @ 5000 rpm" },
    { label: "Fuel Economy", value: "30 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "285000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Royal Enfield Himalayan 450",
        price: "₹2,85,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Royl Enfield Himalayan 450</h1>
          <p className="price">
            ₹2,85,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/5V6TcxU2O3M8Ho4-wAa7Q9DLQo3xiAfgAVmw9iBDTPk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvMTEwNDMx/L2hpbWFsYXlhbi00/NTItcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci00LmpwZWc_/aXNpZz0wJnE9ODAm/d209Mw"
              alt="RE Himalayan 450"
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
            The Royal Enfield Himalayan 450 is a capable and versatile mid-size adventure bike, suitable for a wide range of riders and terrain.
            Its improved performance, handling, and features make it an attractive option for those seeking a reliable and affordable off-road companion.
            Royal Enfield truly knocked it out of the park with this one. The Himalayan, yet again representing the beacon of change in the segment. 
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

export default HIMALAYAN;
