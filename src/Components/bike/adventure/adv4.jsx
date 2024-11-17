//KTM 1290 Super Adventure S
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const KTM= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "3.8 seconds" },
    { label: "Engine", value: "1301cc twin cylinder" },
    { label: "Engine Type", value: "1301cc LC8 engine" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "160bhp @ 8750 rpm" },
    { label: "Max Torque", value: "140Nm @ 6500 rpm" },
    { label: "Fuel Economy", value: "22 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2273900"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "KTM 1290 Super Adventure S",
        price: "₹22,73,900"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">KTM 1290 Super Adventure S</h1>
          <p className="price">
            ₹22,73,900/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/rxA6QMUGuakWHVddVwU3g29nKiGmtyCZN4qtLPduSs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vcmlkZXJt/YWdhemluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvMjAyMy1LVE0t/MTI5MC1TVVBFUi1B/RFZFTlRVUkUtUy0x/NC5qcGc_c3NsPTE"
              alt="KTM 1290 Super Adventure S"
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
            Overall, the KTM 1290 Super Adventure S is an exceptional motorcycle that checks all the boxes for adventure touring and off-road enthusiasts.
            Its impressive performance, comfort, and technology make it a top choice for riders seeking a capable and versatile bike.
            It is the first of the bike KTMs introduced in India, and there is a lot ofexcitement and anticipation around these bikes.
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

export default KTM;
