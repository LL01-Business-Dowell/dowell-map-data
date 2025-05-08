import React from 'react';
import { motion } from 'framer-motion';
import { RestaurantCard } from './RestaurantCard';
import { Pagination } from './Pagination';

interface RestaurantListProps {
  filteredData: any[];
  currentItems: any[];
  selectedRestaurant: any;
  handleRestaurantSelect: (restaurant: any) => void;
  mapView: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  paginate: (pageNumber: number) => void;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  totalPages: number;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  filteredData,
  currentItems,
  selectedRestaurant,
  handleRestaurantSelect,
  mapView,
  currentPage,
  setCurrentPage,
  paginate,
  indexOfFirstItem,
  indexOfLastItem,
  totalPages
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={`${selectedRestaurant || mapView ? 'md:w-1/2' : 'w-full'} bg-white rounded-lg shadow-md`}
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          Restaurants ({filteredData.length})
        </h2>
      </div>
      
      {filteredData.length === 0 ? (
        <div className="p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-gray-500">No restaurants found matching your criteria</p>
          <button 
            onClick={() => {
              setCurrentPage(1);
              // Reset filters would be handled in parent component
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 380px)' }}>
          {currentItems.map((restaurant, index) => (
            <RestaurantCard 
              key={index}
              restaurant={restaurant}
              index={index}
              isSelected={selectedRestaurant === restaurant}
              onSelect={handleRestaurantSelect}
            />
          ))}
        </div>
      )}
      
      {/* Pagination */}
      {filteredData.length > 0 && (
        <Pagination 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          paginate={paginate}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          totalItems={filteredData.length}
        />
      )}
    </motion.div>
  );
};