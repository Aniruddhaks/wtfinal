import React from 'react';
import { useNavigate } from 'react-router-dom';

const LuxuryCars = () => {
  const navigate = useNavigate();

  const cars = [
        {
          id: 1,
          name: 'BMW X5 30d',
          image: "https://imgs.search.brave.com/2OKSsYWSUouCTMOl-OBxuHSsJESxZi_l45hrqoBFFX4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2JiLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi8y/MDI0LUJNVy1YNS14/RHJpdmU1MGUtUEhF/Vi1leHRlcmlvci1m/cm9udC1ncmF5Lmpw/Zw"
        },
        {
          id: 2,
          name: 'Mercedes Benz S Class',
          image: "https://imgs.search.brave.com/pt2GUnU2-LLAIbL1ta0dtCX2AduT6eQV8YC3DmqqEoU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LW1lcmNlZGVzLWJl/bnotczM1MGQtMTAy/LTY1ZWYyZDU1ZTU1/ZjguanBnP2Nyb3A9/MC41NDR4dzowLjgx/NnhoOzAuMzU5eHcs/MC4xODR4aCZyZXNp/emU9NjQwOio"
        },
        {
          id: 3,
          name: 'Audi Q7',
          image: "https://imgs.search.brave.com/oXIPLS1WndVGxaE7KZ1GMGWlI7VFN-XqDQjKwg9Kcs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIw/LWF1ZGktcTctMjA2/LTE1ODQzMjI1OTIu/anBnP2Nyb3A9MC43/OTB4dzowLjU5NHho/OzAuMTM2eHcsMC4y/MzN4aCZyZXNpemU9/MzAwOio"
        },
        {
          id: 4,
          name: 'Lexus ES300h',
          image: "https://imgs.search.brave.com/134ZwRdt_n3T-zJHZNMFLooP6k8M9dCK_GzS4epAne0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIz/LWxleHVzLWVzLTMw/MGgtZi1zcG9ydC0x/NzQtNjQzMDFhOWI3/OGYwNS5qcGc_Y3Jv/cD0wLjg0OXh3OjAu/NjM1eGg7MC4wNzg1/eHcsMC4zNjV4aCZy/ZXNpemU9MzAwOio"
        },
        {
          id: 5,
          name: 'Toyota LandCruiser',
          image:"https://imgs.search.brave.com/ZCeDCedq3ugcY9qfo0fOc-3rrsfr5CHAv3nxegVjEZM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/dHJhZGVyYXUtcmVz/LmNsb3VkaW5hcnku/Y29tL2ltYWdlL3Vw/bG9hZC9lX3RyaW06/MTAsZl9hdXRvL2Nf/c2NhbGUsdF9jZ19i/YXNlLHdfMzQ1L2ds/YXNzZXMvMElqVlFs/RE0uanBn"
        }
      ];

  const handleCarClick = (carId) => {
    switch(carId) {
      case 1:
        navigate('/bmw');
        break;
      case 2:
        navigate('/benz');
        break;
      case 3:
        navigate('/audi');
        break;
      case 4:
        navigate('/lexus');
        break;
      case 5:
        navigate('/land');
        break;
      default:
        break;
    }
  };

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

export default LuxuryCars;