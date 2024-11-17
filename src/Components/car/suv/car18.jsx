//MG Gloster
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const GLOSTER = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "11 seconds" },
    { label: "Engine", value: "1996cc,inline 4 cylinder" },
    { label: "Engine Type", value: "2.0L SC20M Twin-turbocharged I4" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "213bhp @ 2400 rpm" },
    { label: "Max Torque", value: "478.5Nm @ 1500-2500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "15.34 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "4386000"
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "MG Gloster",
        price: "₹43,86,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">MG Gloster</h1>
          <p className="price">
            ₹43,86,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/gpYBXuyWmpGLzsVCV1GTH6fRSwdPOjI3kRZgFjRIehM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xMjk2ODkv/Z2xvc3Rlci1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTMuanBl/Zz9pc2lnPTAmcT04/MA"
              alt="MG Gloster"
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
            The MG Gloster is a premium SUV that has made a significant impact in the Indian market. 
            Launched in 2021, it is the flagship model of MG Motor India, offering a blend of power, luxury, and technology.
            It is strong contender in the segment, with a powerful diesel engine and great features.
            A spacious third row, along with a commanding seating position only add to the experience.
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

export default GLOSTER;