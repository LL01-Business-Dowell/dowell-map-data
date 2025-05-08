import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { StatCards } from './StatCards';
import { Filters } from './Filters';
import { RestaurantList } from './RestaurantList';
import { RestaurantDetail } from './RestaurantDetail';
import { MapView } from './MapView';
import { useRestaurants } from '../hooks/useRestaurants';

export const RestaurantDashboard: React.FC = () => {
  const {
    data,
    filteredData,
    loading,
    statistics,
    cities,
    searchTerm,
    setSearchTerm,
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
    currentPage,
    setCurrentPage,
    currentItems,
    indexOfFirstItem,
    indexOfLastItem,
    totalPages
  } = useRestaurants();

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [mapView, setMapView] = useState(false);
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

  // Handle restaurant selection
  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setMapView(false);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        mapView={mapView}
        setMapView={setMapView}
      />

      <div className="container mx-auto px-4 -mt-6">
        <StatCards statistics={statistics} />
      </div>

      <div className="container mx-auto px-4 mt-8">
        <Filters 
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedWhatsappFilter={selectedWhatsappFilter}
          setSelectedWhatsappFilter={setSelectedWhatsappFilter}
          selectedCriteriaFilter={selectedCriteriaFilter}
          setSelectedCriteriaFilter={setSelectedCriteriaFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          cities={cities}
          isFiltersExpanded={isFiltersExpanded}
          setIsFiltersExpanded={setIsFiltersExpanded}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <RestaurantList 
              filteredData={filteredData}
              currentItems={currentItems}
              selectedRestaurant={selectedRestaurant}
              handleRestaurantSelect={handleRestaurantSelect}
              mapView={mapView}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginate={paginate}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              totalPages={totalPages}
            />
            
            {selectedRestaurant && !mapView && (
              <RestaurantDetail 
                selectedRestaurant={selectedRestaurant}
                setSelectedRestaurant={setSelectedRestaurant}
              />
            )}
            
            {mapView && (
              <MapView />
            )}
          </div>
        )}
      </div>
    </>
  );
}