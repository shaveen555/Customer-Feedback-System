import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSinhalaClick = () => {
    navigate('/Sinhala'); // Redirect to the '/Sinhala' page
  };

  const handleEnglishClick = () => {
    navigate('/English'); // Redirect to the '/English' page
  };

  const handleTamilClick = () => {
    navigate('/Tamil'); // Redirect to the '/Tamil' page
  };

  const handleViewReportClick = () => {
    navigate('/report'); // Redirect to the '/report' page
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-blue-900 h-96">
        <div className="absolute top-4 right-4">
          <button
            onClick={handleViewReportClick}
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
          >
            View Report
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              
            </h1>
            
            {/* Language Buttons */}
            <div className="mt-8 flex justify-center space-x-6">
              <button 
                onClick={handleEnglishClick} // Handle the click for English button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                English
              </button>
              <button
                onClick={handleSinhalaClick} // Handle the click for Sinhala button
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                සිංහල
              </button>
              <button
                onClick={handleTamilClick} // Handle the click for Tamil button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;