import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from '../icons';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  mapView: boolean;
  setMapView: (view: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  mapView, 
  setMapView 
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-4 md:mb-0"
          >
            <div className="w-12 h-12 rounded-lg bg-white text-blue-600 flex items-center justify-center mr-3 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">DoWell Map Data</h1>
              <p className="text-blue-100 text-sm">Restaurant Database Management</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/20 backdrop-blur-sm text-white placeholder-blue-100 w-full md:w-64"
              />
              <div className="absolute left-3 top-2.5">
                <SearchIcon />
              </div>
            </div>
            
            <button 
              onClick={() => setMapView(!mapView)}
              className={`px-4 py-2 rounded-lg flex items-center justify-center ${mapView ? 'bg-indigo-800 text-white' : 'bg-white text-indigo-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
              {mapView ? 'List View' : 'Map View'}
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};