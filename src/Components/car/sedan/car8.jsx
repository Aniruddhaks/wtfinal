//Volkswagen Virtus
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './t3.css';

const VIRTUS = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "9.27 seconds" },
    { label: "Engine", value: "1498cc inline 4 cylinder" },
    { label: "Engine Type", value: "1.5L TSI EVO with ACT" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "148bhp @ 5000-6000 rpm" },
    { label: "Max Torque", value: "250Nm @ 1500-3500 rpm" },
    { label: "Fuel Economy(kmpl)", value: "19.62 kmpl(combined)" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "1580000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Volkswagen Virtus</h1>
          <p className="price">
            ₹15,80,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/Y8h-PClyePEEw8yfgbWIUcL3eKPPoPJvAdVhKRVX3Tk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9odGNt/cy1wcm9kLWltYWdl/cy5zMy5hcC1zb3V0/aC0xLmFtYXpvbmF3/cy5jb20vaHRtb2Jp/bGUxL3ZvbGtzd2Fn/ZW5fdmlydHVzL2lt/YWdlcy9leHRlcmlv/cl92b2xrc3dhZ2Vu/LXZpcnR1c19mcm9u/dC1yaWdodC1zaWRl/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1.jpeg"
              alt="Volkswagen Virtus"
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
                The Volkswagen Virtus is a mid-size sedan offered by Volkswagen in India.
                It's class leading ground clearance and sofisticated German engineering is a reason why it is so popular in the segment.
                A great driver's car, the Virtus is a must have for anyone who loves driving.
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

export default VIRTUS;