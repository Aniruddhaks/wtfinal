import React from 'react';
import { useNavigate } from 'react-router-dom';
import './display.css'

const Sedan = () => {
  const navigate = useNavigate();

  const handleCarClick = (carId) => {
    switch(carId) {
      case 1:
        navigate('/city');
        break;
      case 2:
        navigate('/verna');
        break;
      case 3:
        navigate('/virtus');
        break;
      case 4:
        navigate('/slavia');
        break;
      case 5:
        navigate('/ciaz');
        break;
      default:
        break;
    }
  };

  const cars = [
    {
      id: 1,
      name: 'Honda City',
      image: 'https://imgs.search.brave.com/rjJW6BZT24QJ4onxjE04oKFo8dSjIK-n8lL_K6U6Hb0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/SG9uZGEvQ2l0eS85/NzEwLzE2Nzc5MTQy/MzgyOTYvZnJvbnQt/bGVmdC1zaWRlLTQ3/LmpwZz90cj13LTY2/NA'
    },
    {
      id: 2,
      name: 'Hyundai Verna',
      image: 'https://imgs.search.brave.com/K5_qNZDv-RBILwRQIceaQmYPylRZh-Mt7N4XF34VWlY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9jYXRh/bG9nLW1hbmFnZW1l/bnQuczMuYXAtc291/dGgtMS5hbWF6b25h/d3MuY29tL2h0bW9i/aWxlMS9oeXVuZGFp/X3Zlcm5hMjAyMy9p/bWFnZXMvZXh0ZXJp/b3JfaHl1bmRhaS1u/ZXctdmVybmFfZnJv/bnQtbGVmdC1zaWRl/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1.jpeg'
    },
    {
      id: 3,
      name: 'Volkswagen Virtus',
      image: 'https://imgs.search.brave.com/Y8h-PClyePEEw8yfgbWIUcL3eKPPoPJvAdVhKRVX3Tk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9odGNt/cy1wcm9kLWltYWdl/cy5zMy5hcC1zb3V0/aC0xLmFtYXpvbmF3/cy5jb20vaHRtb2Jp/bGUxL3ZvbGtzd2Fn/ZW5fdmlydHVzL2lt/YWdlcy9leHRlcmlv/cl92b2xrc3dhZ2Vu/LXZpcnR1c19mcm9u/dC1yaWdodC1zaWRl/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1.jpeg'
    },
    {
      id: 4,
      name: 'Skoda Slavia',
      image: 'https://imgs.search.brave.com/NowoOL4vfOJ78b9eDFz3T-TQm6q4XypfNKD0nbFzUb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/U2tvZGEvU2xhdmlh/LzExODEwLzE3MTg3/NzM1Njc0NDMvZnJv/bnQtbGVmdC1zaWRl/LTQ3LmpwZz90cj13/LTY2NA'
    },
    {
      id: 5,
      name: 'Maruti Suzuki Ciaz',
      image: 'https://imgs.search.brave.com/D1VnQ5FMj4z6HkE727wa8GkkOw9RO25ofNoM9oR8Db4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzI3MngxNTMvbi9j/dy9lYy80ODU0Mi9j/aWF6LWV4dGVyaW9y/LXJpZ2h0LWZyb250/LXRocmVlLXF1YXJ0/ZXItMy5qcGVnP2lz/aWc9MCZxPTgw'
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

export default Sedan;