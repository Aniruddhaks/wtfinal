//BMW S1000RR
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const SBMW= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "2.5 seconds" },
    { label: "Engine", value: "999cc inline 4-cylinder" },
    { label: "Engine Type", value: "999cc liquid cooled inline 4" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "207bhp @ 13750 rpm" },
    { label: "Max Torque", value: "113Nm @ 11000 rpm" },
    { label: "Fuel Economy", value: "16 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2075000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "BMW S1000RR",
        price: "₹20,75,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">BMW S1000RR</h1>
          <p className="price">
            ₹20,75,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/ydaG6ffhT8o9Y4F6WezyMo9L3FsZk8zKiyHz3B5-2i8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tY24t/aW1hZ2VzLmJhdWVy/c2VjdXJlLmNvbS93/cC1pbWFnZXMvNDcw/NS85MDB4MC8yMDIz/X2Jtd19zMTAwMHJy/XzkuanBn"
              alt="BMW S1000RR"
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
            the BMW S1000RR is a highly capable and versatile superbike, suitable for both track days and long-distance touring. 
            Its impressive power output, agile handling, and advanced electronics make it a compelling choice for riders seeking a high-performance motorcycle
            This bike is an icon in its own right, with a massive cult following for obvious reasons.
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

export default SBMW;
