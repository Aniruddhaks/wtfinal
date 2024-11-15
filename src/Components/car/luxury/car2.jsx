//Mercedes Benz S Class
import React, { useState } from 'react';
//import { Card, CardContent } from '@/components/ui/card';
//import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './t3.css';

const BENZ = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "5 seconds" },
    { label: "Engine", value: "2999cc turbocharged inline 6" },
    { label: "Engine Type", value: "3.0L M256 Turbocharged I6 + EQ Boost" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "375bhp @ 6100 rpm" },
    { label: "Max Torque", value: "500Nm @ 1800-5800 rpm" },
    { label: "Fuel Economy(kmpl)", value: "11.5 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "16500000"; // Set the price as a number (no symbols)
    navigate('/emi', { state: { price } }); // Pass the price as state to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Mercedes Benz S Class</h1>
          <p className="price">
            ₹1,65,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/pt2GUnU2-LLAIbL1ta0dtCX2AduT6eQV8YC3DmqqEoU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LW1lcmNlZGVzLWJl/bnotczM1MGQtMTAy/LTY1ZWYyZDU1ZTU1/ZjguanBnP2Nyb3A9/MC41NDR4dzowLjgx/NnhoOzAuMzU5eHcs/MC4xODR4aCZyZXNp/emU9NjQwOio"
              alt="Mercedes Benz S Class"
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
            The Mercedes-Benz S-Class has been the quintessential choice for those who want nothing less than from their top-of-the-line luxury sedan. 
            One that oozes space, comfort and refinement, along with the latest in safety and technology. 
            Previously introduced as a CBU model, the S-Class is now locally assembled in India.
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

export default BENZ;