import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';

const Report = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [reportData, setReportData] = useState(null);
  const [viewByMonth, setViewByMonth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleViewReport = async () => {
    try {
      const endpoint = viewByMonth
        ? `http://localhost:8000/api/reports/month?date=${selectedDate}`
        : `http://localhost:8000/api/reports?date=${selectedDate}`;
      const response = await axios.get(endpoint);
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };

  const toggleViewByMonth = () => {
    setViewByMonth(!viewByMonth);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginFormVisible(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">View Report</h2>
      {!isLoggedIn ? (
        <div className="text-center">
          <button
            onClick={() => setIsLoginFormVisible(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login to View Report
          </button>
          {isLoginFormVisible && <Login onLogin={handleLogin} />}
        </div>
      ) : (
        <>
          <div className="mb-6">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Select Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-4 py-2 border rounded-lg w-full"
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={viewByMonth}
                onChange={toggleViewByMonth}
                className="form-checkbox"
              />
              <span className="ml-2">View by Month</span>
            </label>
          </div>
          <button
            onClick={handleViewReport}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
          >
            View Report
          </button>

          {reportData && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Report for {selectedDate}</h3>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Complaint Type</th>
                    <th className="py-2">Excellent</th>
                    <th className="py-2">Good</th>
                    <th className="py-2">Bad</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(reportData).map((button, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2">
                        {(() => {
                          switch (button) {
                            case 'button 1':
                              return 'Water bills not received through SMS & E-Mail';
                            case 'button 2':
                              return 'Bill clearance';
                            case 'button 3':
                              return 'Request for name/address change/category change';
                            case 'button 4':
                              return 'Request for reconnection of disconnected connection';
                            case 'button 5':
                              return 'Request for installment';
                            case 'button 6':
                              return 'Request for browser supply';
                            case 'button 7':
                              return 'Request for meter testing';
                            case 'button 8':
                              return 'Request for bill summary/duplicate bill';
                            case 'button 9':
                              return 'Payment corrections';
                            case 'button 10':
                              return 'Estimated bill';
                            case 'button 11':
                              return 'Meter reading error';
                            case 'button 12':
                              return 'High bill (internet leak/air flow/digit jump/meter defective)';
                            case 'button 13':
                              return 'Request for release of refund deposit';
                            case 'button 14':
                              return 'Illegal water consumption';
                            case 'button 15':
                              return 'Complaint regarding Revenue Assistants';
                            case 'button 16':
                              return 'Other complaints';
                            default:
                              return 'Other complaints';
                          }
                        })()}
                      </td>
                      <td className="py-2">{reportData[button].excellent}</td>
                      <td className="py-2">{reportData[button].good}</td>
                      <td className="py-2">{reportData[button].bad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Report;