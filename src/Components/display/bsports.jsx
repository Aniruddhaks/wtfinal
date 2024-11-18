import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bdisplay.css'
import ducatip from './ducatip.png';
import nin from './nin.png';
import ap from './ap.png';



const SportsBikes = () => {
  const navigate = useNavigate();
  
  const bikes = [
    {
      id: 1,
      name: 'Ducati Panigale V4',
      image: ducatip
    },
    {
      id: 2,
      name: 'BMW S1000RR',
      image:"https://imgs.search.brave.com/ydaG6ffhT8o9Y4F6WezyMo9L3FsZk8zKiyHz3B5-2i8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tY24t/aW1hZ2VzLmJhdWVy/c2VjdXJlLmNvbS93/cC1pbWFnZXMvNDcw/NS85MDB4MC8yMDIz/X2Jtd19zMTAwMHJy/XzkuanBn"

    },
    {
      id: 3,
      name: 'Kawasaki Ninja ZX-10R',
      image: nin
    },
    {
      id: 4,
      name: 'Aprillia RSV4 Factory',
      image: ap
    },
    {
      id: 5,
      name: 'Honda CBR1000RR-R',
      image: "https://imgs.search.brave.com/f5jaVHtIR8f7LymM8-n7tLT4G_lwLEnsXcA1QrNIK8I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW90b21pbGxpb24u/Y29tL2Nkbi9zaG9w/L2NvbGxlY3Rpb25z/L0hvbmRhX0NCUl8x/MDAwX1JSX1JfbGFy/Z2VfMGZiMjE1MDIt/MDBjZS00M2QyLTlj/NmMtOTJkM2M0OTQ2/ZmI3X21lZGl1bS5q/cGc_dj0xNjAzNjQz/OTY0"

    }
  ];

  const handleBikeClick = (bikeId) => {
    switch(bikeId) {
      case 1:
        navigate('/pducati');
        break;
      case 2:
        navigate('/sbmw');
        break;
      case 3:
        navigate('/ninja');
        break;
      case 4:
        navigate('/aprillia');
        break;
      case 5:
        navigate('/chonda');
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