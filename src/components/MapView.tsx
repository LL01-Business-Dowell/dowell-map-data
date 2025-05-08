import React from 'react';
import { motion } from 'framer-motion';

export const MapView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="md:w-1/2 bg-white rounded-lg shadow-md"
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Map View</h2>
      </div>
      
      <div className="p-6">
        <div className="bg-gray-100 rounded-lg flex items-center justify-center" style={{height: "500px"}}>
          <div className="text-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Map Integration</h3>
            <p className="text-gray-500 mb-4">Google Maps would be displayed here showing restaurant locations.</p>
            <p className="text-gray-500 text-sm">This is a placeholder for an actual Google Maps integration.</p>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Map Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-gray-500 text-xs">Restaurants Plotted</p>
              <p className="text-xl font-bold text-gray-800">42</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-gray-500 text-xs">Average Rating</p>
              <p className="text-xl font-bold text-gray-800">4.2</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-gray-500 text-xs">WhatsApp Connected</p>
              <p className="text-xl font-bold text-gray-800">15</p>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <p className="text-gray-500 text-xs">Cities Visible</p>
              <p className="text-xl font-bold text-gray-800">3</p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Refresh Map Data
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};