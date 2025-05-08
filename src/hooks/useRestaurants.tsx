import { useState, useEffect } from "react";
import restaurantsData from '../data/restaurants.json';

// Define the Restaurant interface based on the data structure
interface Restaurant {
  Name?: string;
  "Name from Maps"?: string;
  Address?: string;
  "City Name"?: string;
  Rating?: string | number;
  Reviews?: string | number;
  Is_Dine_In?: string | boolean;
  "Whatsapp is conneted in GBP"?: string;
  Meets_All_Criteria?: string | boolean;
  _whatsappConnected?: boolean;
  [key: string]: any; // Allow for additional properties
}

// Ensure restaurantsData is treated as an array of arrays of Restaurant objects
const typedRestaurantsData = restaurantsData as Restaurant[][];

export const useRestaurants = () => {
  const [data, setData] = useState<Restaurant[]>([]);
  const [filteredData, setFilteredData] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedWhatsappFilter, setSelectedWhatsappFilter] = useState("All");
  const [selectedCriteriaFilter, setSelectedCriteriaFilter] = useState("All");
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Load data
  useEffect(() => {
    try {
      console.log("Loading restaurant data...");
      
      // Flatten the nested array structure
      // The JSON structure is an array of arrays of restaurant objects
      const flattenedData = typedRestaurantsData.flat();
      
      // Normalize data to ensure consistent formats
      const normalizedData = flattenedData.map(item => {
        // Convert string "true"/"false" to actual boolean values for criteria
        const meetsAllCriteria = 
          item.Meets_All_Criteria === true || 
          String(item.Meets_All_Criteria).toLowerCase() === "true";
        
        // Normalize WhatsApp connection status - handle "NO", "No", and "no" variations
        const whatsappStatus = String(item["Whatsapp is conneted in GBP"] || "").toUpperCase();
        const whatsappConnected = whatsappStatus === "YES";
        
        return {
          ...item,
          Meets_All_Criteria: meetsAllCriteria,
          "Whatsapp is conneted in GBP": whatsappStatus,
          _whatsappConnected: whatsappConnected // Add computed field for easier filtering
        };
      });

      console.log(`Loaded ${normalizedData.length} restaurants`);
      
      // Extract unique cities and ensure they're all strings
      const uniqueCities = [
        ...new Set(normalizedData.map((item) => item["City Name"] || ""))
      ]
        .filter(Boolean) // Remove empty strings
        .filter((city): city is string => typeof city === 'string') // Type guard to ensure all elements are strings
        .sort();

      console.log("Found cities:", uniqueCities);
      
      setData(normalizedData);
      setFilteredData(normalizedData);
      setCities(uniqueCities);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  }, []);

  // Apply filters and search
  useEffect(() => {
    if (data.length === 0) return;
    
    console.log("Applying filters with:", {
      searchTerm,
      selectedCity,
      selectedWhatsappFilter,
      selectedCriteriaFilter
    });
    
    let result = [...data];

    // Apply search filter
    if (searchTerm && searchTerm.trim() !== "") {
      const normalizedSearchTerm = searchTerm.toLowerCase().trim();
      result = result.filter(
        (item) => {
          return (
            (item.Name?.toString().toLowerCase() || "").includes(normalizedSearchTerm) ||
            (item["Name from Maps"]?.toString().toLowerCase() || "").includes(normalizedSearchTerm) ||
            (item.Address?.toString().toLowerCase() || "").includes(normalizedSearchTerm) ||
            (item["City Name"]?.toString().toLowerCase() || "").includes(normalizedSearchTerm) ||
            (item.Is_Dine_In?.toString().toLowerCase() || "").includes(normalizedSearchTerm)
          );
        }
      );
    }

    // Apply city filter
    if (selectedCity !== "All") {
      result = result.filter((item) => item["City Name"] === selectedCity);
    }

    // Apply WhatsApp filter - specifically handling the "NO" and "No" variations
    if (selectedWhatsappFilter !== "All") {
      const isConnected = selectedWhatsappFilter === "Connected";
      result = result.filter((item) => {
        // First try the computed field
        if ('_whatsappConnected' in item) {
          return item._whatsappConnected === isConnected;
        }
        
        // Fallback to string comparison
        const whatsappStatus = String(item["Whatsapp is conneted in GBP"] || "").toUpperCase();
        return isConnected ? whatsappStatus === "YES" : (whatsappStatus === "NO" || whatsappStatus === "");
      });
    }

    // Apply Criteria filter
    if (selectedCriteriaFilter !== "All") {
      const meetsAllCriteria = selectedCriteriaFilter === "Yes";
      result = result.filter((item) => item.Meets_All_Criteria === meetsAllCriteria);
    }

    console.log(`Filtered data from ${data.length} to ${result.length} items`);

    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      // Handle undefined or null values
      if (aValue === undefined || aValue === null) aValue = "";
      if (bValue === undefined || bValue === null) bValue = "";

      // Handle numeric values
      if (sortBy === "Rating" || sortBy === "Reviews") {
        aValue = parseFloat(aValue as string) || 0;
        bValue = parseFloat(bValue as string) || 0;
      } else {
        // Handle string values
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });

    setFilteredData(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    data,
    searchTerm,
    selectedCity,
    selectedWhatsappFilter,
    selectedCriteriaFilter,
    sortBy,
    sortOrder,
  ]);

  // Calculate current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate statistics
  const statistics = {
    totalRestaurants: data.length,
    totalCities: cities.length,
    whatsappConnected: data.filter(item => {
      const whatsappStatus = String(item["Whatsapp is conneted in GBP"] || "").toUpperCase();
      return whatsappStatus === "YES";
    }).length,
    highRating: data.filter((item) => Number(item.Rating) >= 4.5).length,
    meetsAllCriteria: data.filter((item) => item.Meets_All_Criteria === true).length,
  };

  return {
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
    totalPages,
  };
};
