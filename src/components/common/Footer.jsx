import React from 'react';

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0 flex items-center">
              <img src="/src/assets/images/NWSDB_logo.png" alt="Company Logo" className="mb-4 w-32 mx-auto md:mx-0" /> 
             
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 md:ml-auto">
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="about" className="text-gray-400 hover:text-green-400">About Us</a></li>

                <li><a href="contact" className="text-gray-400 hover:text-green-400">Contact</a></li>
                
              </ul>
            </div>
           
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Customer Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;