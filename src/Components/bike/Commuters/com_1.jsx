//Honda Activa
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';
import ac from './ac.png';

const BHONDA= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "NA" },
    { label: "Engine", value: "109.51cc single cylinder" },
    { label: "Engine Type", value: "Fuel injected" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "7.68bhp @ 8000 rpm" },
    { label: "Max Torque", value: "8.8Nm @ 52500 rpm" },
    { label: "Fuel Economy", value: "60 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "82684"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Honda Activa",
        price: "₹82,684"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Honda Activa</h1>
          <p className="price">
            ₹82,684/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src={ac}
              alt="activa" 
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
            The Honda Activa 6G is a reliable and highly popular scooter in India, blending practicality and efficiency. 
            It is powered by a 109.51 cc, BS6-compliant engine, delivering 7.79 PS of power at 8000 RPM and 8.84 Nm of torque at 5500 RPM. 
            With its refined eSP (Enhanced Smart Power) technology, it offers a smooth and fuel-efficient ride. 
            The Activa 6G boasts a mileage of approximately 59.5 km/l, making it an economical choice for city commuting.
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

export default BHONDA;
