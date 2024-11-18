// CommuterBikes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bdisplay.css'
import ac from './ac.png';
import at from './at.png';
import sp from './sp.png';
import nt from './nt.png';
import jp from './jp.png';


const CommuterBikes = () => {
  const navigate = useNavigate();
  
  const bikes = [
    { id: 1, name: 'Honda Activa', image: ac },
    { id: 2, name: 'TVS Ntorq', image: nt },
    { id: 3, name: 'Ather 450X', image: at },
    { id: 4, name: 'TVS Jupiter', image:jp  },
    { id: 5, name: 'Hero Splendor', image: sp }
  ];

  const handleBikeClick = (bikeId) => {
    switch(bikeId) {
      case 1: navigate('/bhonda'); break;
      case 2: navigate('/ntvs'); break;
      case 3: navigate('/ather'); break;
      case 4: navigate('/jtvs'); break;
      case 5: navigate('/hero'); break;
      default: break;
    }
  };

  return (
    <div className="grid">
      {bikes.map((bike) => (
        <div
          key={bike.id}
          className="bike-card"
          onClick={() => handleBikeClick(bike.id)}
        >
          <img
            src={bike.image}
            alt={bike.name}
            className="bike-image"
          />
          <h3 className="bike-name">{bike.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CommuterBikes;