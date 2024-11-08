import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaUser, FaSearch } from "react-icons/fa";

// Import images directly from the src/assets folder
import car1 from '/Users/work/Desktop/wtproject/my-app/src/Components/HomePage/car1.png';
import car2 from '/Users/work/Desktop/wtproject/my-app/src/Components/HomePage/car2.png';
// import bike1 from '../assets/bike1.jpg';
// import bike2 from '../assets/bike2.jpg';

// Array of imported images
const images = [car1, car2];



const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarDropdown, setShowCarDropdown] = useState(false);
  const [showBikeDropdown, setShowBikeDropdown] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval);
  }, []);
  
  const handleCarClick = () => {
    setShowCarDropdown((prev) => !prev);
    setShowBikeDropdown(false); // Close bike dropdown if open
  };

  const handleBikeClick = () => {
    setShowBikeDropdown((prev) => !prev);
    setShowCarDropdown(false); // Close car dropdown if open
  };

  
  

  return (
    <div className="homepage">
      {/* Header with Company Name */}
      <header className="company-name">
        <h1>IgnitionX</h1>
        <div className="profile-icon" onClick={() => alert("Go to Profile Details")}>
          <FaUser />
        </div>
      </header>

      {/* Search Bar with Filter */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-icon"><FaSearch /></button>
        <button className="filter-icon" onClick={() => alert("Open filter options")}>⚙️</button>
      </div>

      {/* Navigation Links for Cars and Bikes */}
      <nav className="category-links">
        <div className="dropdown">
          <button className="car" onClick={handleCarClick}>Cars</button>
          {showCarDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => alert("Hatchback")}>Hatchback</button>
              <button onClick={() => alert("Sedan")}>Sedan</button>
              <button onClick={() => alert("Sports Car")}>Sports Car</button>
              <button onClick={() => alert("SUV")}>SUV</button>
              <button onClick={() => alert("Minivan")}>Minivan</button>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="bike" onClick={handleBikeClick}>Bikes</button>
          {showBikeDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => alert("Sports Bike")}>Sports Bike</button>
              <button onClick={() => alert("Commuter Bike")}>Commuter Bike</button>
              <button onClick={() => alert("Adventure Bike")}>Adventure Bike</button>
              <button onClick={() => alert("Scooter")}>Scooter</button>
            </div>
          )}
        </div>
      </nav>

      {/* Image Carousel */}
      <section className="carousel">
        <div className="carousel-images">
          <button className="arrow left" onClick={prevImage}>←</button>
          <div className="carousel-image">
            <img src={images[currentIndex]} alt="Car or Bike" />
          </div>
          <button className="arrow right" onClick={nextImage}>→</button>
        </div>
        
      </section>

      {/* Writeup Section */}
      <section className="writeup">
        <p>Welcome to Ignition X,your one stop car buying companion site</p>
      </section>
    </div>
  );
};

export default HomePage;
