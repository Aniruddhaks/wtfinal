//TVS Ntorq
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import nt from './nt.png';


const NTVS= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "NA" },
    { label: "Engine", value: "124.8cc single cylinder" },
    { label: "Engine Type", value: "Air Cooled" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "9.38bhp @ 7000 rpm" },
    { label: "Max Torque", value: "10.5Nm @ 5500 rpm" },
    { label: "Fuel Economy", value: "45 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "105800"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "TVS Ntorq",
        price: "₹1,05,800"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">TVS Ntorq</h1>
          <p className="price">
            ₹1,05,800/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={nt}
              alt="nt" 
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
            The TVS Ntorq 125 is a sporty and feature-rich scooter designed for urban commuters and enthusiasts. 
            It is powered by a 124.8cc, single-cylinder, air-cooled engine that produces 9.38 bhp at 7,000 rpm and 10.5 Nm of torque at 5,500 rpm. 
            The scooter features a CVT automatic transmission for smooth and efficient performance. 
            It has a top speed of 90 km/h and offers a fuel tank capacity of 5.8 liter
            It is a popular choice among youngsters since it is sportier and ismore stylish.
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

export default NTVS;
