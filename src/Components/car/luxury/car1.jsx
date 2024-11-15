//BMW X5 30d
import React, { useState } from 'react';
//import { Card, CardContent } from '@/components/ui/card';
import { Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import { Button } from '@/components/ui/button';
import { Calculator, ShoppingCart } from 'lucide-react';
import './t3.css';


const BMW = () => {
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  const specs = [
    { label: "Acceleration (0-100 km/h)", value: "6.35 seconds" },
    { label: "Engine", value: "2994 cc turbocharged 6-cyliner" },
    { label: "Engine Type", value: "3.0L Inline 6 Diesel" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Max Power", value: "286bhp @ 3750 rpm" },
    { label: "Max Torque", value: "700Nm @ 2250 rpm" },
    { label: "Fuel Economy(kmpl)", value: "9.3 kmpl(combined)" }
  ];
  const navigate = useNavigate();
  const handleEmiNavigation = () => {
    const price = "9800000"
    navigate('/emi', { state: { price } }); // Pass the price to the /emi route
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="header">
          <h1 className="title">BMW X5 30d</h1>
          <p className="price">
            ₹98,00,000/- 
            <span className="price-disclaimer">(ex-showroom Delhi)</span>
          </p>
        </div>

        <div className="content-grid">
          <Card className="image-card">
            <img 
              src="https://imgs.search.brave.com/2OKSsYWSUouCTMOl-OBxuHSsJESxZi_l45hrqoBFFX4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2JiLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi8y/MDI0LUJNVy1YNS14/RHJpdmU1MGUtUEhF/Vi1leHRlcmlvci1m/cm9udC1ncmF5Lmpw/Zw"
              alt="BMW X5 30d"
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
             The BMW X5 30d is powered by a 3.0L inlin six cylinder diesel engine producing 286hp and 700NM of torque.
             With air suspension on all four corners, the X5 has proved to be a great luxury SUV with lot of space on offer on the inside.
             Overall, the X5 is a brilliant handler, even though it weighs close to 2 tonnes.
             ARAI tested Fuel Economy Numbers: 13.2 kmpl.
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

export default BMW;