import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LocationIcon, PhoneIcon, WebsiteIcon, CheckIcon, CrossIcon, 
  MapPinIcon, CategoryIcon, ClockIcon, SocialMediaIcon, 
  GlobeIcon, PersonIcon, DeviceIcon, CalendarIcon, WhatsappIcon
} from '../icons';

interface RestaurantDetailProps {
  selectedRestaurant: any;
  setSelectedRestaurant: (restaurant: any) => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ 
  selectedRestaurant, 
  setSelectedRestaurant 
}) => {
  const [currentTab, setCurrentTab] = useState('basic');

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {halfStar && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="md:w-1/2 bg-white rounded-lg shadow-md"
    >
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Restaurant Details</h2>
        <button 
          onClick={() => setSelectedRestaurant(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setCurrentTab('basic')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              currentTab === 'basic'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Basic Info
          </button>
          <button
            onClick={() => setCurrentTab('business')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              currentTab === 'business'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Business Details
          </button>
          <button
            onClick={() => setCurrentTab('additional')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              currentTab === 'additional'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Additional Info
          </button>
        </nav>
      </div>
      
      <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 380px)' }}>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{selectedRestaurant.Name}</h1>
            <p className="text-sm text-gray-500">
              Also known as: {selectedRestaurant["Name from Maps"] || 'N/A'}
            </p>
            <p className="text-gray-600 mt-2 flex items-start">
              <LocationIcon />
              <span className="ml-1">{selectedRestaurant.Address}</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {selectedRestaurant["City Name"]}
            </div>
            <div className="mt-2 flex items-center">
              {renderStars(selectedRestaurant.Rating)}
              <span className="ml-2 font-medium">{selectedRestaurant.Rating}</span>
              <span className="ml-1 text-sm text-gray-500">({selectedRestaurant.Reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Basic Info Tab */}
        {currentTab === 'basic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <PhoneIcon />
                  <span className="ml-2 text-gray-700">{selectedRestaurant.Phone}</span>
                </div>
                
                <div className="flex items-center">
                  {selectedRestaurant["Whatsapp is conneted in GBP"]?.toString().toUpperCase() === 'YES' ? (
                    <div className="flex items-center text-green-600">
                      <WhatsappIcon />
                      <span className="ml-2">WhatsApp Connected</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500">
                      <WhatsappIcon />
                      <span className="ml-2">WhatsApp Not Connected</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <WebsiteIcon />
                  <a 
                    href={selectedRestaurant.Website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 hover:text-blue-800 truncate"
                  >
                    {selectedRestaurant.Website ? 'View Website' : 'No Website Available'}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Restaurant Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    <MapPinIcon />
                  </div>
                  <span className="ml-2 text-gray-700">Plus Code: {selectedRestaurant["Plus Code"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    <CategoryIcon />
                  </div>
                  <span className="ml-2 text-gray-700">Category: {selectedRestaurant.Category || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    <ClockIcon />
                  </div>
                  <span className="ml-2 text-gray-700">Hours: {selectedRestaurant.Hours || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Compliance Status</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Has_Multiple_Locations ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Has Multiple Locations</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Has_Valid_Pincode ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Has Valid Pincode</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Has_Contact_Info ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Has Contact Info</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Has_Sufficient_Reviews ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Has Sufficient Reviews</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Has_Working_Hours ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Has Working Hours</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant.Meets_All_Criteria ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Meets All Criteria</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Actions</h3>
              <div className="space-y-3">
                <a
                  href={selectedRestaurant["Google Maps Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </a>
                
                <a
                  href={selectedRestaurant["Service_Options"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  View Service Options
                </a>
                
                <a
                  href={`tel:${selectedRestaurant.Phone}`}
                  className="text-green-600 hover:text-green-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Restaurant
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Business Details Tab */}
        {currentTab === 'business' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Social Media</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <SocialMediaIcon />
                  <span className="ml-2 text-gray-700">Platforms: {selectedRestaurant["Social media Platform"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <WebsiteIcon />
                  <a 
                    href={selectedRestaurant["Events or offers on Social media?(link)"]} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 hover:text-blue-800 truncate"
                  >
                    {selectedRestaurant["Events or offers on Social media?(link)"] ? 'View Social Media' : 'No Social Media Link Available'}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant["Check WhatsApp link is connected"] === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">WhatsApp Link Connected</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant["Verified Google Business Profile(URL)"] === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Verified Google Business Profile</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CategoryIcon />
                  <span className="ml-2 text-gray-700">Order Booking Platforms: {selectedRestaurant["order booking platforms"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <GlobeIcon />
                  <span className="ml-2 text-gray-700">Order Booking Language: {selectedRestaurant["order booking language "] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <DeviceIcon />
                  <span className="ml-2 text-gray-700">Device Used: {selectedRestaurant["Device"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="ml-2 text-gray-700">Seating Capacity: {selectedRestaurant["seating capacity"] || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Notes</h3>
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="text-gray-700">{selectedRestaurant["Notes"] || 'No notes available for this restaurant.'}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Additional Info Tab */}
        {currentTab === 'additional' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Respondent Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <PersonIcon />
                  <span className="ml-2 text-gray-700">Age: {selectedRestaurant["Age"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <PersonIcon />
                  <span className="ml-2 text-gray-700">Gender: {selectedRestaurant["gender"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <CategoryIcon />
                  <span className="ml-2 text-gray-700">Responsibility: {selectedRestaurant["responsibility of the respondant"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant["Are you the owner of the restaurant?"] === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Is Owner</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant["Are you comfortable in English"] === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Comfortable in English</span>
                </div>
                
                <div className="flex items-center">
                  <div className="min-w-8 flex items-center">
                    {selectedRestaurant["Are you willing to participate"] === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                  </div>
                  <span className="ml-2 text-gray-700">Willing to Participate</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-md font-medium text-gray-700 mb-2">Respondent Name/Contact</h4>
                <div className="p-3 bg-white rounded border border-gray-200">
                  <p className="text-gray-700">{selectedRestaurant["Name and contact details of the respondant( No (Ask for responsibility details, accept only managers"] || 'No contact details available.'}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CalendarIcon />
                  <span className="ml-2 text-gray-700">Date: {selectedRestaurant["Date"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <CategoryIcon />
                  <span className="ml-2 text-gray-700">Status: {selectedRestaurant["Status"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <LocationIcon />
                  <span className="ml-2 text-gray-700">Is Dine In: {selectedRestaurant["Is_Dine_In"] || 'N/A'}</span>
                </div>
                
                <div className="flex items-center">
                  <div className="text-sm">
                    <span className="text-gray-700">Client List: {selectedRestaurant["Client list"] || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Raw Data Button */}
            <div className="mt-4">
              <button 
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
                onClick={() => {
                  alert('This would show the raw data for this restaurant in JSON format.');
                }}
              >
                View Raw Data
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};