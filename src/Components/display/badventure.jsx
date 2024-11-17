import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bdisplay.css'
import bmwpic from './bmw.png';

const AdventureBikes = () => {
  const navigate = useNavigate();
  const bikes = [
    {
      id: 1,
      name: 'RE Himalayan 450',
      image: 'https://imgs.search.brave.com/5V6TcxU2O3M8Ho4-wAa7Q9DLQo3xiAfgAVmw9iBDTPk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvMTEwNDMx/L2hpbWFsYXlhbi00/NTItcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci00LmpwZWc_/aXNpZz0wJnE9ODAm/d209Mw'
    },
    {
      id: 2,
      name: 'BMW R1250 GSA',
      image: bmwpic
    },
    {
      id: 3,
      name: 'Triumph Tiger 900',
      image: 'https://imgs.search.brave.com/HVbWSHi3fCBZyVByC9xnHdGER6o_UY2r6P7cNJhJO7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L24v/Y3cvZWMvNTE0NDQv/dGlnZXItcmlnaHQt/ZnJvbnQtdGhyZWUt/cXVhcnRlci5qcGVn/P3E9ODAmd209Mw'
    },
    {
      id: 4,
      name: 'KTM 1290 Super Adventure',
      image: 'https://imgs.search.brave.com/rxA6QMUGuakWHVddVwU3g29nKiGmtyCZN4qtLPduSs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vcmlkZXJt/YWdhemluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvMjAyMy1LVE0t/MTI5MC1TVVBFUi1B/RFZFTlRVUkUtUy0x/NC5qcGc_c3NsPTE'
    },
    {
      id: 5,
      name: 'Ducati Multistrada v4',
      image: 'https://imgs.search.brave.com/OvPafVXw4akR4_uKpeAdRbgEShno_BToIwSlo_F64_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy85ODg5MS9t/dWx0aXN0cmFkYS12/NC1yaWdodC1mcm9u/dC10aHJlZS1xdWFy/dGVyLmpwZWc_aXNp/Zz0wJnE9ODA'
    }
  ];

  const handleBikeClick = (bikeId) => {
    switch(bikeId) {
      case 1:
        navigate('/himalayan');
        break;
      case 2:
        navigate('/bbmw');
        break;
      case 3:
        navigate('/triumph');
        break;
      case 4:
        navigate('/ktm');
        break;
      case 5:
        navigate('/ducati');
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

export default AdventureBikes;