//Ducati Multistrada V4
import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, Button } from '@mui/material';
import { Calculator, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './bike.css';

const DUCATI= () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "4.2 seconds" },
    { label: "Engine", value: "1158cc liquid-cooled V4" },
    { label: "Engine Type", value: "1200cc 16V" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "167bhp @ 9750 rpm" },
    { label: "Max Torque", value: "125Nm @ 8850 rpm" },
    { label: "Fuel Economy", value: "22 kmpl" }
  ];

  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "2145000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  const handleBuyNowNavigation = () => {
    navigate('/payment', { 
      state: { 
        carName: "Ducati Multistrada V4 S",
        price: "₹21,45,000"
      } 
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">Ducati Multistrada V4</h1>
          <p className="price">
            ₹21,45,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/OvPafVXw4akR4_uKpeAdRbgEShno_BToIwSlo_F64_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy85ODg5MS9t/dWx0aXN0cmFkYS12/NC1yaWdodC1mcm9u/dC10aHJlZS1xdWFy/dGVyLmpwZWc_aXNp/Zz0wJnE9ODA"
              alt="Ducati Multistrada V4"
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
            The Ducati Multistrada V4 S is a highly capable and technologically advanced adventure-tourer, offering a unique blend of performance, comfort and sportiness.
            Its innovative features and refined design make it an excellent choice for riders seeking a versatile and exciting long-distance companion.
            The Multistrada V4 is the sportiest bike in the segment, it is the most road-biased of the bunch.
            The suspension setup is just perfect , the bike is stable and planted at high speeds.
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

export default DUCATI;
