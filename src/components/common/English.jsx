import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const English = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(`button ${index + 1}`);
    setShowModal(true);  // Open the modal when a button is clicked
  };

  const buttonLabels = [
    'Water bills not received through SMS & E-Mail', 'Bill clearance', 'Request for name/address change/category change', 'Request for reconnection of disconnected connection', 'Request for installment', 'Request for browser supply', 'Request for meter testing', 'Request for bill summary/duplicate bill',
    'Payment corrections', 'Estimated bill', 'Meter reading error', 'High bill (internet leak/air flow/digit jump/meter defective)', 'Request for release of refund deposit', 'Illegal water consumption', 'Complaint regarding Revenue Assistants', 'Other complaints'
  ];

  const handleStatusSelection = async (status) => {
    setStatus(status);
    setShowModal(false);  // Close the modal after selection
    await submitStatus(status);
    navigate('/');  // Navigate back to Hero.jsx
  };

  const submitStatus = async (status) => {
    try {
      const response = await axios.post('http://localhost:8000/api/reactions', {
        button_label: selectedButton,
        status: status
      });
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="bg-gray-800 border-b border-gray-700 py-8">
      <div className="max-w-8xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Choose Your Status</h2>

        {/* Button Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Left Side Buttons */}
          <div className="flex flex-col space-y-4">
            {buttonLabels.slice(0, 8).map((label, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col space-y-4">
            {buttonLabels.slice(8).map((label, index) => (
              <button
                key={index + 8}
                onClick={() => handleButtonClick(index + 8)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-none shadow-lg w-full h-full text-center flex flex-col items-center justify-center">
              <h3 className="text-4xl font-semibold mb-8">Select Your Status</h3>
              <div className="flex justify-center space-x-16">
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('excellent')}
                    className="text-7xl p-8 bg-green-500 text-white rounded-full hover:bg-green-600"
                  >
                    <img src="\src\components\common\E.png" alt="Excellent" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">Excellent</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('good')}
                    className="text-7xl p-8 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    <img src="\src\components\common\G.png" alt="Good" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">Good</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('bad')}
                    className="text-7xl p-8 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <img src="\src\components\common\B.png" alt="Bad" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">Bad</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default English;