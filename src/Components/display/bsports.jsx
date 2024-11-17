import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bdisplay.css'

const SportsBikes = () => {
  const navigate = useNavigate();
  
  const bikes = [
    {
      id: 1,
      name: 'Ducati Panigale V4',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'BMW S1000RR',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'Kawasaki Ninja ZX-10R',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Yamaha YZF-R1',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Honda CBR1000RR-R',
      image: '/api/placeholder/400/300'
    }
  ];

  const handleBikeClick = (bikeId) => {
    switch(bikeId) {
      case 1:
        navigate('/ducati');
        break;
      case 2:
        navigate('/bmw-bike');
        break;
      case 3:
        navigate('/kawasaki');
        break;
      case 4:
        navigate('/yamaha');
        break;
      case 5:
        navigate('/honda');
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

export default SportsBikes;