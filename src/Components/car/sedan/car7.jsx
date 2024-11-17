//Hyundai Verna
import React, { useState } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './t3.css';

const VERNA = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "8.95 seconds" },
    { label: "Engine", value: "1482cc inline 4 cylinder" },
    { label: "Engine Type", value: "1.5L Turbo GDi" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "158bhp @ 5500 rpm" },
    { label: "Max Torque", value: "253Nm @ 1500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "20.6 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1500000"
    navigate('/emi', { state: { price } }); 
  };
  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Hyundai Verna",
        price: "₹15,00,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Hyundai Verna</h1>
          <p className="price">
            ₹15,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/K5_qNZDv-RBILwRQIceaQmYPylRZh-Mt7N4XF34VWlY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9jYXRh/bG9nLW1hbmFnZW1l/bnQuczMuYXAtc291/dGgtMS5hbWF6b25h/d3MuY29tL2h0bW9i/aWxlMS9oeXVuZGFp/X3Zlcm5hMjAyMy9p/bWFnZXMvZXh0ZXJp/b3JfaHl1bmRhaS1u/ZXctdmVybmFfZnJv/bnQtbGVmdC1zaWRl/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1.jpeg"
              alt="Hyundai Verna"
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
            The Hyundai Verna is the mid-sixe sedan offered by Hyundai.
            With both manual and a dual-clutch automatic transmission on offer, it offers a great balance between performance and comfort.
            It is one of the best sellers for Hyundai, and for good reason. 
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

export default VERNA;