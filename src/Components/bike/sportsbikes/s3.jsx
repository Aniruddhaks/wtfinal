//Honda CBR-1000RR-R Fireblade SP
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const CHONDA= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "2.5 seconds" },
    { label: "Engine", value: "999cc inline 4-cylinder" },
    { label: "Engine Type", value: "999cc liquid cooled inline 4" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "215bhp @ 14500 rpm" },
    { label: "Max Torque", value: "113Nm @ 12500 rpm" },
    { label: "Fuel Economy", value: "16 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2645000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Honda CBR-1000RR-R Fireblade SP",
        price: "₹26,45,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Honda CBR-1000RR-R Fireblade SP</h1>
          <p className="price">
            ₹26,45,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/f5jaVHtIR8f7LymM8-n7tLT4G_lwLEnsXcA1QrNIK8I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW90b21pbGxpb24u/Y29tL2Nkbi9zaG9w/L2NvbGxlY3Rpb25z/L0hvbmRhX0NCUl8x/MDAwX1JSX1JfbGFy/Z2VfMGZiMjE1MDIt/MDBjZS00M2QyLTlj/NmMtOTJkM2M0OTQ2/ZmI3X21lZGl1bS5q/cGc_dj0xNjAzNjQz/OTY0"
              alt="Honda CBR 1000RR-R Fireblade SP" 
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
            The Honda CBR1000RR-R Fireblade SP is a masterpiece of engineering, aimed squarely at enthusiasts and racers who seek unmatched performance, cutting-edge technology, and MotoGP-derived design.
            While its aggressive nature and focused ergonomics make it less suited for casual street use, its prowess on the track is undeniable. 
            For riders who want to push the limits of speed and precision, the Fireblade SP is a top contender in the liter-class supersport segment.
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

export default CHONDA;
