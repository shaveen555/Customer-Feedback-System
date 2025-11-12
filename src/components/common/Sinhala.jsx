import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sinhala = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(`button ${index + 1}`);
    setShowModal(true);
  };

  const buttonLabels = [
    'SMS සහ විද්‍යුත් තැපෑලෙන් නොලැබුණු ජල බිල්පත්', 'බිල්පත් නිරීක්ශනය', 'නම/ලිපිනය වෙනස් කිරීම/ප්‍රභේදය වෙනස් කිරීම සඳහා ඉල්ලීම', 'විසන්ධි වූ සම්බන්ධතාවය නැවත සම්බන්ධ කිරීම සඳහා ඉල්ලීම', 'වාරිකය සඳහා ඉල්ලීම', 'බ්‍රවුසර සැපයුම සඳහා ඉල්ලීම', 'මනු පරීක්ෂාව සඳහා ඉල්ලීම', 'බිල්පත් සාරාංශය සඳහා ඉල්ලීම',
    'ගෙවීම් නිවැරදි කිරීම්', 'ඇස්තමේන්තුගත බිල්පත', 'මීටර කියවීමේ දෝෂය', 'අධික බිල්පත් (දත්ත කාන්දුව/වාත ප්‍රවාහය/ඉලක්කම් පැනීම/මීටර දෝෂ සහිත)', 'මුදල් ආපසු ගෙවීමේ තැන්පතු මුදා හැරීමට ඉල්ලීම', 'නීති විරෝධී ජල පරිභෝජනය', 'ආදායම් සහකාරවරුන් සම්බන්ධ පැමිණිල්ල', 'වෙනත් පැමිණිලි'
  ];

  const handleStatusSelection = async (status) => {
    setStatus(status);
    setShowModal(false);
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">ඔබගේ තත්ත්වය තෝරන්න</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
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

        {selectedButton && (
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold mb-2">{selectedButton} සඳහා තත්ත්වය</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleStatusSelection('excellent')}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <img src="\src\components\common\E.png" alt="පරිපුර්ණ" className="w-8 h-8 inline-block mr-2" />
                පරිපුර්ණ 😍
              </button>
              <button
                onClick={() => handleStatusSelection('good')}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                <img src="\src\components\common\G.png" alt="හොඳයි" className="w-8 h-8 inline-block mr-2" />
                හොඳයි 🙂  
              </button>
              <button
                onClick={() => handleStatusSelection('bad')}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <img src="\src\components\common\B.png" alt="නරකයි" className="w-8 h-8 inline-block mr-2" />
                නරකයි 😞
              </button>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-none shadow-lg w-full h-full text-center flex flex-col items-center justify-center">
              <h3 className="text-4xl font-semibold mb-8">ඔබගේ තෘප්තිමත්භාවය තෝරන්න</h3>
              <div className="flex justify-center space-x-16">
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('excellent')}
                    className="text-7xl p-8 bg-green-500 text-white rounded-full hover:bg-green-600"
                  >
                    <img src="\src\components\common\E.png" alt="පරිපුර්ණ" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">පරිපුර්ණ</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('good')}
                    className="text-7xl p-8 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    <img src="\src\components\common\G.png" alt="හොඳයි" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">හොඳයි</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleStatusSelection('bad')}
                    className="text-7xl p-8 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <img src="\src\components\common\B.png" alt="නරකයි" className="w-32 h-32" />
                  </button>
                  <p className="mt-4 text-xl">නරකයි</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sinhala;