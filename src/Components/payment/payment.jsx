import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payment.css';
import visa from './visa.png';
import mastercard from './mastercard.png';
import maestro from './maestro.png';

const PaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const carName = location.state?.carName || "Mercedes AMG A45 S";
  const price = location.state?.price || "₹93,70,000";

  const [isChecked, setIsChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [showSuccess, setShowSuccess] = useState(false);
  const [netbankingId, setNetbankingId] = useState('');
  const [netbankingPassword, setNetbankingPassword] = useState('');
  const [netbankingError, setNetbankingError] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleNetbankingIdChange = (e) => {
    // Allow input only if it contains digits and is limited to 9 characters
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setNetbankingId(value);

    // Validate for exactly 9 digits
    if (value.length !== 9) {
      setNetbankingError('Netbanking ID must be exactly 9 digits');
    } else {
      setNetbankingError('');
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Perform additional validation for netbanking
    if (selectedPayment === 'netbanking' && (!netbankingId || !netbankingPassword)) {
      setNetbankingError('Please enter both Netbanking ID and password');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="success-container">
        <div className="success-message">
          <div className="success-icon">
            <Check size={50} color="#4CAF50" />
          </div>
          <h2>Transaction Successful!</h2>
          <p>Thank you for purchasing {carName}</p>
          <p>Amount paid: {price}</p>
          <p className="redirect-message">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1>Payment Options</h1>

      <div className="plan-info">
        <span>Vehicle - {carName}</span>
      </div>

      <div className="total-amount">Total Amount - {price}</div>

      <div className="payment-methods">
        {/* Credit/Debit Card Option */}
        <div 
          className={`card-option ${selectedPayment === 'card' ? 'selected' : ''}`} 
          onClick={() => setSelectedPayment('card')}
        >
          <div className="option-header">
            <div className="radio-container">
              <div className={selectedPayment === 'card' ? 'radio-selected' : 'radio-unselected'}></div>
            </div>
            <div>
              <div className="option-title">Credit & Debit cards</div>
              <div className="option-subtitle">Transaction fee may apply</div>
            </div>
            <div className="card-logos">
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="Mastercard" />
              <img src={maestro} alt="Maestro" />
            </div>
          </div>

          {selectedPayment === 'card' && (
            <form className="card-form" onSubmit={handlePayment}>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Enter cardholder name" required />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <div className="card-number-input">
                  <input 
                    type="text" 
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="19"
                    placeholder="Enter card number"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>End Date</label>
                  <div className="date-inputs">
                    <select className="date-select" required>
                      <option value="">mm</option>
                      {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                        <option key={month} value={month.toString().padStart(2, '0')}>
                          {month.toString().padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    <select className="date-select" required>
                      <option value="">yyyy</option>
                      {Array.from({length: 10}, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group cvv-group">
                  <label>CVV</label>
                  <div className="cvv-input">
                    <input type="password" maxLength="3" required />
                    <span className="cvv-info">3 digits</span>
                  </div>
                </div>
              </div>

              <div className="terms-checkbox">
                <input 
                  type="checkbox" 
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                />
                <label>I have read and accept the terms of use, rules of flight and privacy policy</label>
              </div>

              <button type="submit" className="pay-button" disabled={!isChecked}>
                Pay Now »
              </button>
            </form>
          )}
        </div>

        {/* Netbanking Option */}
        <div 
          className={`netbanking-option ${selectedPayment === 'netbanking' ? 'selected' : ''}`}
          onClick={() => setSelectedPayment('netbanking')}
        >
          <div className="radio-container">
            <div className={selectedPayment === 'netbanking' ? 'radio-selected' : 'radio-unselected'}></div>
          </div>
          <div>
            <div className="option-title">Netbanking</div>
            <div className="option-subtitle">Free of charge</div>
          </div>

          {selectedPayment === 'netbanking' && (
            <div className="netbanking-form">
              <div className="form-group">
                <label>Netbanking ID</label>
                <input 
                  type="text" 
                  value={netbankingId}
                  onChange={handleNetbankingIdChange}
                  maxLength="9" // Maximum of 9 characters
                  placeholder="Enter your Netbanking ID"
                  required
                  pattern="\d{9}" // Pattern to allow only 9 digits
                  inputMode="numeric" // For mobile-friendly numeric input
                />
                {netbankingError && <p className="error-message">{netbankingError}</p>}
              </div>
              <div className="form-group">
                <label>Netbanking Password</label>
                <input 
                  type="password" 
                  value={netbankingPassword}
                  onChange={(e) => setNetbankingPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="terms-checkbox">
                <input 
                  type="checkbox" 
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                />
                <label>I have read and accept the terms of use, rules of flight and privacy policy</label>
              </div>

              <button onClick={handlePayment} className="pay-button" disabled={!isChecked}>
                Pay Now »
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
