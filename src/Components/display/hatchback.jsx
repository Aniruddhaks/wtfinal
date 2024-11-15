import React from 'react';
import { useNavigate } from 'react-router-dom';
import './display.css'

const Hatchback = () => {
  const navigate = useNavigate();

  const handleCarClick = (carId) => {
    switch(carId) {
      case 1:
        navigate('/amg');
        break;
      case 2:
        navigate('/swift');
        break;
      case 3:
        navigate('/i20');
        break;
      case 4:
        navigate('/bal');
        break;
      case 5:
        navigate('/alt');
        break;
      default:
        break;
    }
  };

  const cars = [
    {
      id: 1,
      name: 'Mercedes AMG A45 S',
      image: 'https://imgs.search.brave.com/7vCKikadhd08jSzaj4y2CjSaZA02C9DxCXaOmGlVtFg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG9wZ2Vhci5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9jYXJz/LWNhci9pbWFnZS8y/MDIzLzA3LzElMjBN/ZXJjZWRlcy1BTUcl/MjBBNDUuanBlZz93/PTQyNCZoPTIzOQ'

    },
    {
      id: 2,
      name: 'Maruti Swift',
      image:'https://imgs.search.brave.com/2va-a9SPOi0X-6gqgdtDWvssoN_4h2KAfeif_HnRGDk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzMxMHgxNzQvbi9j/dy9lYy8xNTkwOTkv/c3dpZnQtZXh0ZXJp/b3ItcmlnaHQtZnJv/bnQtdGhyZWUtcXVh/cnRlci5qcGVnP2lz/aWc9MCZxPTgw'

    },
    {
      id: 3,
      name: 'Hyundai i20',
      image:'https://imgs.search.brave.com/OAVozY1J5Rr0TXvZ50vR93ZQTG5c62sFWV1mb4XLHBU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8xNzAxMzEv/aHl1bmRhaS1pMjAt/cmlnaHQtZnJvbnQt/dGhyZWUtcXVhcnRl/cjEuanBlZz9pc2ln/PTAmcT04MA'

    },
    {
      id: 4,
      name: 'Maruti Baleno',
      image:'https://imgs.search.brave.com/ZVEFtXDoEAly-9jahwhhochRcdL5GgLaNjEZmAHCmOg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8xOTA4MjEv/bWFydXRpLXN1enVr/aS1iYWxlbm8tcmln/aHQtZnJvbnQtdGhy/ZWUtcXVhcnRlcjAu/anBlZz9pc2lnPTAm/d209MSZxPTgw'

    },
    {
      id: 5,
      name: 'Tata Altroz',
      image:'https://imgs.search.brave.com/ay0fyvUo7hAEfPhgeR39LHg1kwZ9z38zq4dVp2ONokE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTE1/MDE5L3RhdGEtYWx0/cm96LWxlZnQtZnJv/bnQtdGhyZWUtcXVh/cnRlcjcuanBlZz9p/c2lnPTAmd209MCZx/PTgw'

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

export default Hatchback;