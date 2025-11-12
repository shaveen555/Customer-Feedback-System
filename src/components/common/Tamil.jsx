import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tamil = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(`button ${index + 1}`);
    setShowModal(true);  // Open the modal when a button is clicked
  };

  const buttonLabels = [
    'SMS மற்றும் மின்னஞ்சல் மூலம் தண்ணீர் பில்கள் வரவில்லை', 'பில் கிளியரன்ஸ்', 'பெயர்/முகவரி மாற்றம்/வகை மாற்றத்திற்கான கோரிக்கை', 'துண்டிக்கப்பட்ட இணைப்பை மீண்டும் இணைக்க கோரிக்கை', 'தவணைக்கான கோரிக்கை', 'உலாவி வழங்குவதற்கான கோரிக்கை', 'மீட்டர் சோதனைக்கான கோரிக்கை', 'பில் தொகைக்கான கோரிக்கை',
    'கட்டண திருத்தங்கள்', 'மதிப்பீடு செய்யப்பட்ட பில்', 'மீட்டர் வாசிப்பு பிழை', 'அதிக பில் (இன்டர்நெட் கசிவு/காற்று ஓட்டம்/இலக்கத் தாண்டுதல்/மீட்டர் குறைபாடு)', 'ரீஃபண்ட் டெபாசிட் விடுவிக்கக் கோரிக்கை', 'சட்டவிரோத நீர் நுகர்வு', 'வருவாய் உதவியாளர்கள் தொடர்பான புகார்', 'பிற புகார்கள்'
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">உங்கள் நிலையைத் தேர்ந்தெடுக்கவும்</h2>

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
              <h3 className="text-4xl font-semibold mb-8">உங்கள் நிலையைத் தேர்ந்தெடுக்கவும்</h3>
              <div className="flex justify-center space-x-16">
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('excellent')}
                    className="text-7xl p-8 bg-green-500 text-white rounded-full hover:bg-green-600"
                  >
                    <img src="\src\components\common\E.png" alt="சிறந்தது" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">சிறந்தது</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('good')}
                    className="text-7xl p-8 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    <img src="\src\components\common\G.png" alt="நன்று" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">நன்று</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('bad')}
                    className="text-7xl p-8 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <img src="\src\components\common\B.png" alt="மோசமாக" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">மோசமாக</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tamil;