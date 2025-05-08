import React from 'react';
import { motion } from 'framer-motion';
import { FilterIcon } from '../icons';

interface FiltersProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedWhatsappFilter: string;
  setSelectedWhatsappFilter: (filter: string) => void;
  selectedCriteriaFilter: string;
  setSelectedCriteriaFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  cities: string[];
  isFiltersExpanded: boolean;
  setIsFiltersExpanded: (expanded: boolean) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCity,
  setSelectedCity,
  selectedWhatsappFilter,
  setSelectedWhatsappFilter,
  selectedCriteriaFilter,
  setSelectedCriteriaFilter,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  cities,
  isFiltersExpanded,
  setIsFiltersExpanded
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FilterIcon />
              <span className="ml-2 font-medium text-gray-700">Filters:</span>
            </div>
            
            <button
              onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              {isFiltersExpanded ? 'Collapse Filters' : 'Expand Filters'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transform ${isFiltersExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Cities</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={selectedWhatsappFilter}
                onChange={(e) => setSelectedWhatsappFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All WhatsApp Status</option>
                <option value="Connected">WhatsApp Connected</option>
                <option value="NotConnected">WhatsApp Not Connected</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={selectedCriteriaFilter}
                onChange={(e) => setSelectedCriteriaFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Criteria Status</option>
                <option value="Yes">Meets All Criteria</option>
                <option value="No">Doesn't Meet All Criteria</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Name">Sort by Name</option>
                <option value="Rating">Sort by Rating</option>
                <option value="Reviews">Sort by Reviews</option>
                <option value="City Name">Sort by City</option>
                <option value="Date">Sort by Date</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
          
          {isFiltersExpanded && (
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Has Valid Contact</label>
                  <select 
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Has Sufficient Reviews</label>
                  <select 
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Has Working Hours</label>
                  <select 
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};