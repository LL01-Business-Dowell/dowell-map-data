import React from 'react';
import { motion } from 'framer-motion';
import { LocationIcon, PhoneIcon, WhatsappIcon, RatingIcon, CalendarIcon } from '../icons';

interface RestaurantCardProps {
  restaurant: any;
  index: number;
  isSelected: boolean;
  onSelect: (restaurant: any) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  index, 
  isSelected, 
  onSelect 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={() => onSelect(restaurant)}
      className={`p-4 border-b border-gray-200 hover:bg-blue-50 cursor-pointer transition ${isSelected ? 'bg-blue-50' : ''}`}
    >
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-800">{restaurant.Name}</h3>
        <div className="flex items-center">
          <RatingIcon />
          <span className="ml-1 text-gray-700">{restaurant.Rating}</span>
          <span className="ml-2 text-xs text-gray-500">({restaurant.Reviews})</span>
        </div>
      </div>
      
      <div className="mt-2 flex items-start">
        <LocationIcon />
        <p className="ml-1 text-sm text-gray-600 flex-1">{restaurant.Address}</p>
      </div>
      
      <div className="mt-2 flex items-center text-sm">
        <div className="flex items-center mr-4">
          <PhoneIcon />
          <span className="ml-1 text-gray-600">{restaurant.Phone}</span>
        </div>
        
        <div className="flex items-center">
          {restaurant["Whatsapp is conneted in GBP"]?.toString().toUpperCase() === 'YES' ? (
            <span className="flex items-center text-green-600">
              <WhatsappIcon />
              <span className="ml-1">Connected</span>
            </span>
          ) : (
            <span className="flex items-center text-gray-500">
              <WhatsappIcon />
              <span className="ml-1">Not Connected</span>
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span className="flex items-center">
          <CalendarIcon />
          <span className="ml-1">{restaurant.Date}</span>
        </span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {restaurant["City Name"]}
        </span>
      </div>
    </motion.div>
  );
};