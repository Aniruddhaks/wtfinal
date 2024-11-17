// CommuterBikes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bdisplay.css'

const CommuterBikes = () => {
  const navigate = useNavigate();
  
  const bikes = [
    {
      id: 1,
      name: 'Honda CB300R',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Yamaha MT-03',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'KTM Duke 390',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Kawasaki Z400',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Suzuki SV650',
      image: '/api/placeholder/400/300'
    }
  ];

  const handleBikeClick = (bikeId) => {
    switch(bikeId) {
      case 1:
        navigate('/honda-cb');
        break;
      case 2:
        navigate('/yamaha-mt');
        break;
      case 3:
        navigate('/ktm');
        break;
      case 4:
        navigate('/kawasaki-z');
        break;
      case 5:
        navigate('/suzuki');
        break;
      default:
        break;
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