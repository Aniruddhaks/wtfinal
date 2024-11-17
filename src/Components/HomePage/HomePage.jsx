import React, { useState, useEffect } from 'react';
//import './HomePage.css';
import { FaUser, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';  
import { FaInfoCircle } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import './new.css'



// Import images directly from the src/assets folder
import car1 from '/Users/work/Desktop/wtproject/my-app/src/Components/HomePage/car1.png';
import car2 from '/Users/work/Desktop/wtproject/my-app/src/Components/HomePage/car2.png';
// import bike1 from '../assets/bike1.jpg';
// import bike2 from '../assets/bike2.jpg';

// Array of imported images
const images = [car1, car2];

const vehicleData = {
  cars: {
    hatchback: [
      { name: "Mercedes AMG A45 S", route: "/amg" },
      { name: "Maruti Swift", route: "/swift" },
      { name: "Hyundai i20", route: "/i20" },
      { name: "Maruti Baleno", route: "/bal" },
      { name: "Tata Altroz", route: "/alt" }
    ],
    sedan: [
      { name: "Honda City", route: "/city" },
      { name: "Hyundai Verna", route: "/verna" },
      { name: "Volkswagen Virtus", route: "/virtus" },
      { name: "Skoda Slavia", route: "/slavia" },
      { name: "Maruti Suzuki Ciaz", route: "/ciaz" }
    ],
    luxury: [
      { name: "BMW X5 30d", route: "/bmw" },
      { name: "Mercedes Benz S Class", route: "/benz" },
      { name: "Audi Q7", route: "/audi" },
      { name: "Lexus ES300h", route: "/lexus" },
      { name: "Toyota LandCruiser", route: "/land" }
    ],
    suv: [
      { name: "Toyota Fortuner", route: "/fortuner" },
      { name: "Jeep Meridian", route: "/meridian" },
      { name: "MG Gloster", route: "/gloster" },
      { name: "Mahindra Scorpio", route: "/scorpio" },
      { name: "Tata Harrier", route: "/harrier" }
    ]
  },
  bikes: {
    sports: [
      { name: "BMW S1000RR", route: "/sports" },
      { name: "Kawasaki Ninja ZX-10R", route: "/sports" },
      { name: "Honda CBR 1000RR-R Fireblade", route: "/sports" },
      { name: "Ducati Panigale V4", route: "/sports" },
      { name: "Aprilia RSV4", route: "/sports" }
    ],
    commuter: [
      { name: "Honda Activa", route: "/commuter" },
      { name: "TVS Ntorq", route: "/commuter" },
      { name: "Ather 450X", route: "/commuter" },
      { name: "TVS Jupiter", route: "/commuter" },
      { name: "Hero Splendor", route: "/commuter" }
    ],
    adventure: [
      { name: "RE Himalayan 450", route: "/adventure" },
      { name: "BMW R1250 GSA", route: "/adventure" },
      { name: "Triumph Tiger 900", route: "/adventure" },
      { name: "KTM 1290 Super Adventure", route: "/adventure" },
      { name: "Ducati Multistrada V4", route: "/adventure" }
    ]
  }
};



const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarDropdown, setShowCarDropdown] = useState(false);
  const [showBikeDropdown, setShowBikeDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const getAllVehicles = () => {
    const vehicles = [];
    Object.entries(vehicleData).forEach(([type, categories]) => {
      Object.entries(categories).forEach(([category, models]) => {
        models.forEach(model => {
          vehicles.push({
            ...model,
            type,
            category
          });
        });
      });
    });
    return vehicles;
  };

  // Handle search input
  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === "") {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const allVehicles = getAllVehicles();
    const filtered = allVehicles.filter(vehicle =>
      vehicle.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
    setShowSearchDropdown(true);
  };

  // Handle search result selection
  const handleSearchResultClick = (route) => {
    setSearchTerm("");
    setShowSearchDropdown(false);
    navigate(route);
  };
  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleCustomerServiceClick = () => {
    navigate('/customer');
  };

  const navigate = useNavigate();  // Initialize useNavigate hook


  const handleLuxuryClick = () => {
  navigate('/luxury');  // Navigate to the luxury page
  };

  const handlesedanClick = () => {
    navigate('/sedan');  // Navigate to the luxury page
  };

  const handlesuvClick = () => {
    navigate('/suv');  // Navigate to the luxury page
  };

  const handlehatchClick = () => {
    navigate('/hatchback');  // Navigate to the luxury page
  };

  //bikes
  const handlesportsClick = () => {
    navigate('/sports');  // Navigate to the luxury page
  };
  const handlecommuterClick = () => {
    navigate('/commuter');  // Navigate to the luxury page
  };
  const handleadventureClick = () => {
    navigate('/adventure');  // Navigate to the luxury page
  };

  


  
  

  return (
    <div className="homepage">
      {/* Header with Company Name */}
      <header className="company-name">
        <h1>IgnitionX</h1>
        {/* <div className="nav-buttons">
          <button className="nav-button" onClick={handleAboutClick}>
            <FaInfoCircle className="nav-icon" />
            About
          </button>
          <button className="nav-button" onClick={handleCustomerServiceClick}>
            <FaHeadset className="nav-icon" />
            Customer Service
          </button>
        </div> */}
        
        <div className="profile-icon" onClick={() => alert("Go to Profile Details")}>
          <FaUser />
        </div>
      </header>

      {/* Search Bar with Filter */}
      {/* <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-icon"><FaSearch /></button>
      </div> */}

<div className="search-container relative">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg"
          />
          <button className="search-icon">
            <FaSearch />
          </button>
        </div>
        
        
        
        {showSearchDropdown && searchResults.length > 0 && (
          <div className="search-dropdown absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer flex flex-col"
                onClick={() => handleSearchResultClick(result.route)}
              >
                <span className="font-medium">{result.name}</span>
                <span className="text-sm text-gray-500">
                  {result.type} → {result.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="nav-buttons flex justify-center gap-4 mt-4">
  <button className="nav-button" onClick={handleAboutClick}>
    <FaInfoCircle className="nav-icon" />
    About
  </button>
  <button className="nav-button" onClick={handleCustomerServiceClick}>
    <FaHeadset className="nav-icon" />
    Customer Service
  </button>
</div>


      {/* Navigation Links for Cars and Bikes */}
      <nav className="category-links">
        <div className="dropdown">
          <button className="car" onClick={handleCarClick}>Cars</button>
          {showCarDropdown && (
            <div className="dropdown-menu">
              <button onClick={handlehatchClick}>Hatchback</button>
              <button onClick={handlesedanClick}>Sedan</button>
              <button onClick={handleLuxuryClick}>Luxury</button>
              <button onClick={handlesuvClick}>SUV</button>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button className="bike" onClick={handleBikeClick}>Bikes</button>
          {showBikeDropdown && (
            <div className="dropdown-menu">
              <button onClick={handlesportsClick}>Sports Bike</button>
              <button onClick={handlecommuterClick}>Commuter Bike</button>
              <button onClick={handleadventureClick}>Adventure Bike</button>
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
    </div>
  );
};

export default HomePage;
