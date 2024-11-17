import React from 'react';
import { useNavigate } from 'react-router-dom';
import meridianImage from './meridian.png'; // Adjust path based on your project structure
import './display.css'


const Suv = () => {
  const navigate = useNavigate();

  const handleCarClick = (carId) => {
    switch(carId) {
      case 1:
        navigate('/fortuner');
        break;
      case 2:
        navigate('/meridian');
        break;
      case 3:
        navigate('/gloster');
        break;
      case 4:
        navigate('/scorpio');
        break;
      case 5:
        navigate('/harrier');
        break;
      default:
        break;
    }
  };
  const cars = [
    {
      id: 1,
      name: 'Toyota Fortuner',
      image: "https://imgs.search.brave.com/mcziTaUz4uKhZ96E5f9W7YU-9-xIBrwOdffqCPuCBI4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy80NDcwOS9m/b3J0dW5lci1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTIwLmpw/ZWc_aXNpZz0wJnE9/ODA"
    },
    {
      id: 2,
      name: 'Jeep Meridian',
      image:meridianImage
    },    
    {
      id: 3,
      name: 'MG Gloster',
      image: "https://imgs.search.brave.com/gpYBXuyWmpGLzsVCV1GTH6fRSwdPOjI3kRZgFjRIehM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xMjk2ODkv/Z2xvc3Rlci1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTMuanBl/Zz9pc2lnPTAmcT04/MA"
    },
    {
      id: 4,
      name: 'Mahindra Scorpio',
      image: "https://imgs.search.brave.com/kkQMx1feTTrQsU3B_Q-pmTTe6v8e3m-cqBI17_qvElk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy80MDQzMi9z/Y29ycGlvLW4tZXh0/ZXJpb3ItcmlnaHQt/ZnJvbnQtdGhyZWUt/cXVhcnRlci03NS5q/cGVnP2lzaWc9MCZx/PTgw"
    },
    {
      id: 5,
      name: 'Tata Harrier',
      image: "https://imgs.search.brave.com/g6F9kpT0i0DMOLm4oHf3YPW7B1cHLYAjhIadnGUURh8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTYz/NzQxL3RhdGEtaGFy/cmllci1sZWZ0LWZy/b250LXRocmVlLXF1/YXJ0ZXIxMC5qcGVn/P2lzaWc9MCZ3bT00/JnE9ODA"
    }
  ];

  return (
    <div className="grid">
      {cars.map((car) => (
        <div
          key={car.id}
          className="car-card"
          onClick={() => handleCarClick(car.id)}
        >
          <img
            src={car.image}
            alt={car.name}
            className="car-image"
          />
          <h3 className="car-name">{car.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Suv;