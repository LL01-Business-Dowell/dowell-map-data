import { useState, useEffect } from "react";

export const useRestaurants = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedWhatsappFilter, setSelectedWhatsappFilter] = useState("All");
  const [selectedCriteriaFilter, setSelectedCriteriaFilter] = useState("All");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Load data
  useEffect(() => {
    try {
      const sampleData = [
        [
          {
            "City Name": "Chanda",
            Name: "Pooja Palace Restaurant & Rooms",
            Phone: 241242212,
            "Google Maps Link":
              "https://www.google.com/maps/place/Pooja+Palace+Restaurant+%26+Rooms/data=!4m7!3m6!1s0x3bdcba7ebd9d76ff:0x6c60c88c3823932d!8m2!3d19.1176255!4d74.7296967!16s%2Fg%2F11g6ykg71m!19sChIJ_3advX663DsRLZMjOIzIYGw?authuser=0&hl=sw&rclk=1",
            "Name from Maps": "Pooja Palace Restaurant & Rooms",
            Address:
              "4P9H+3V4, Savedi, Ahilya Nagar, Maharashtra 414003, India",
            Rating: 4.4,
            Reviews: 1348,
            "Plus Code": "N/A",
            Website:
              "https://www.google.com/maps/place/Chhappan+Bhog+Thali+Restaurant/data=!4m7!3m6!1s0x3bdcbb66c6632be5:0xcbf4954913527147!8m2!3d19.1429383!4d74.713446!16s%2Fg%2F11h7fmdzqy!19sChIJ5Stjxma73DsRR3FSE0mV9Ms?authuser=0&hl=sw&rclk=1",
            Category: "N/A",
            Hours: "N/A",
            Has_Multiple_Locations: false,
            Has_Valid_Pincode: false,
            Has_Contact_Info: true,
            Has_Sufficient_Reviews: true,
            Has_Working_Hours: false,
            Meets_All_Criteria: false,
            "": "",
            Service_Options:
              "https://www.google.com/search?q=Pooja+Palace+Restaurant+&+Rooms+4P9H+3V4,+Savedi,+Ahilya+Nagar,+Maharashtra+414003,+India",
            Is_Dine_In: "Ahilya Nagar",
            "Social media Platform": "",
            "Events or offers on Social media?(link)": "",
            "Check WhatsApp link is connected": "",
            "Verified Google Business Profile(URL)": "",
            "order booking platforms": "",
            "order booking language ": "",
            Device: "",
            "seating capacity": "",
            Age: "",
            gender: "",
            "responsibility of the respondant": "",
            "Are you the owner of the restaurant?": "",
            "Name and contact details of the respondant( No (Ask for responsibility details, accept only managers":
              "",
            "Are you comfortable in English": "",
            "Are you willing to participate": "",
            "Client list": "",
            Status: "",
            Notes: "",
            "Whatsapp ": "",
            "Whatsapp is conneted in GBP": "No",
            Date: "15/04/2025",
          },
          {
            "City Name": "Chanda",
            Name: "Panchsheel Park Family Restaurant",
            Phone: "2488 213 055",
            "Google Maps Link":
              "https://www.google.com/maps/place/Panchsheel+Park+Family+Restaurant/data=!4m7!3m6!1s0x3bdccb085d79fc39:0x713954f7bd51399b!8m2!3d18.9550794!4d74.5332525!16s%2Fg%2F11b75qg7c9!19sChIJOfx5XQjL3DsRmzlRvfdUOXE?authuser=0&hl=sw&rclk=1",
            "Name from Maps": "Panchsheel Park Family Restaurant",
            Address: "Pune - Ahilyanagar Hwy, Supe, Maharashtra 414301, India",
            Rating: 4.4,
            Reviews: 1348,
            "Plus Code": "N/A",
            Website:
              "https://www.google.com/maps/place/Chhappan+Bhog+Thali+Restaurant/data=!4m7!3m6!1s0x3bdcbb66c6632be5:0xcbf4954913527147!8m2!3d19.1429383!4d74.713446!16s%2Fg%2F11h7fmdzqy!19sChIJ5Stjxma73DsRR3FSE0mV9Ms?authuser=0&hl=sw&rclk=1",
            Category: "N/A",
            Hours: "N/A",
            Has_Multiple_Locations: false,
            Has_Valid_Pincode: false,
            Has_Contact_Info: true,
            Has_Sufficient_Reviews: true,
            Has_Working_Hours: false,
            Meets_All_Criteria: false,
            "": "",
            Service_Options:
              "https://www.google.com/search?q=Panchsheel+Park+Family+Restaurant+Pune+-+Ahilyanagar+Hwy,+Supe,+Maharashtra+414301,+India",
            Is_Dine_In: "Supe",
            "Social media Platform": "",
            "Events or offers on Social media?(link)": "",
            "Check WhatsApp link is connected": "",
            "Verified Google Business Profile(URL)": "",
            "order booking platforms": "",
            "order booking language ": "",
            Device: "",
            "seating capacity": "",
            Age: "",
            gender: "",
            "responsibility of the respondant": "",
            "Are you the owner of the restaurant?": "",
            "Name and contact details of the respondant( No (Ask for responsibility details, accept only managers":
              "",
            "Are you comfortable in English": "",
            "Are you willing to participate": "",
            "Client list": "",
            Status: "",
            Notes: "",
            "Whatsapp ": "",
            "Whatsapp is conneted in GBP": "No",
            Date: "15/04/2025",
          },
        ],
        [
          {
            "City Name": "Kollam",
            Name: "Hotel Seapark",
            Phone: "476 270 1000",
            "Google Maps Link":
              "https://www.google.com/maps/place/Hotel+Seapark/data=!4m10!3m9!1s0x3b05ffc218f1b78f:0xbf1f01e379ea74ac!5m2!4m1!1i2!8m2!3d8.9387622!4d76.5447374!16s%2Fg%2F11sk7xw1sc!19sChIJj7fxGML_BTsRrHTqeeMBH78?authuser=0&hl=sw&rclk=1",
            "Name from Maps": "Hotel Seapark",
            Address:
              "Mammen Thoppil Rd, Neendakara, Kollam, Kerala 691582, India",
            Rating: 3.9,
            Reviews: 2668,
            "Plus Code": "N/A",
            Website:
              "https://www.google.com/maps/place/Nadaala+Restaurant/data=!4m7!3m6!1s0x3b0600bbca2cabe9:0xf627cb51447478db!8m2!3d8.9564142!4d76.5340528!16s%2Fg%2F11g7z0p2gk!19sChIJ6assyrsABjsR23h0RFHLJ_Y?authuser=0&hl=sw&rclk=1",
            Category: "N/A",
            Hours: "N/A",
            Has_Multiple_Locations: false,
            Has_Valid_Pincode: false,
            Has_Contact_Info: true,
            Has_Sufficient_Reviews: true,
            Has_Working_Hours: false,
            Meets_All_Criteria: false,
            "": "",
            Service_Options:
              "https://www.google.com/search?q=Hotel+Seapark+Mammen+Thoppil+Rd,+Neendakara,+Kollam,+Kerala+691582,+India",
            Is_Dine_In: "Kollam",
            "Social media Platform": "",
            "Events or offers on Social media?(link)": "",
            "Check WhatsApp link is connected": "",
            "Verified Google Business Profile(URL)": "",
            "order booking platforms": "",
            "order booking language ": "",
            Device: "",
            "seating capacity": "",
            Age: "",
            gender: "",
            "responsibility of the respondant": "",
            "Are you the owner of the restaurant?": "",
            "Name and contact details of the respondant( No (Ask for responsibility details, accept only managers":
              "",
            "Are you comfortable in English": "",
            "Are you willing to participate": "",
            "Client list": "",
            Status: "",
            Notes: "",
            "Whatsapp ": "",
            "Whatsapp is conneted in GBP": "NO",
            Date: "15/04/2025",
          },
          {
            "City Name": "Kollam",
            Name: "Grand street food (kattachal Kuzhi Nadan Kozhi Peratt)",
            Phone: "81569 78566",
            "Google Maps Link":
              "https://www.google.com/maps/place/Grand+street+food+%28kattachal+Kuzhi+Nadan+Kozhi+Peratt%29/data=!4m7!3m6!1s0x3b05e38cfa6514d7:0x17d8ad15c6a64aa3!8m2!3d8.8654918!4d76.6527637!16s%2Fg%2F11n0k93yb5!19sChIJ1xRl-ozjBTsRo0qmxhWt2Bc?authuser=0&hl=sw&rclk=1",
            "Name from Maps":
              "Grand street food (kattachal Kuzhi Nadan Kozhi Peratt)",
            Address: "Umayanalloor, Mayyanad, Kerala 691589, India",
            Rating: 3.9,
            Reviews: 2668,
            "Plus Code": "N/A",
            Website:
              "https://www.google.com/maps/place/Nadaala+Restaurant/data=!4m7!3m6!1s0x3b0600bbca2cabe9:0xf627cb51447478db!8m2!3d8.9564142!4d76.5340528!16s%2Fg%2F11g7z0p2gk!19sChIJ6assyrsABjsR23h0RFHLJ_Y?authuser=0&hl=sw&rclk=1",
            Category: "N/A",
            Hours: "N/A",
            Has_Multiple_Locations: false,
            Has_Valid_Pincode: false,
            Has_Contact_Info: true,
            Has_Sufficient_Reviews: true,
            Has_Working_Hours: false,
            Meets_All_Criteria: false,
            "": "",
            Service_Options:
              "https://www.google.com/search?q=Grand+street+food+(kattachal+Kuzhi+Nadan+Kozhi+Peratt)+Umayanalloor,+Mayyanad,+Kerala+691589,+India",
            Is_Dine_In: "Mayyanad",
            "Social media Platform": "",
            "Events or offers on Social media?(link)": "",
            "Check WhatsApp link is connected": "",
            "Verified Google Business Profile(URL)": "",
            "order booking platforms": "",
            "order booking language ": "",
            Device: "",
            "seating capacity": "",
            Age: "",
            gender: "",
            "responsibility of the respondant": "",
            "Are you the owner of the restaurant?": "",
            "Name and contact details of the respondant( No (Ask for responsibility details, accept only managers":
              "",
            "Are you comfortable in English": "",
            "Are you willing to participate": "",
            "Client list": "",
            Status: "",
            Notes: "",
            "Whatsapp ": "",
            "Whatsapp is conneted in GBP": "NO",
            Date: "15/04/2025",
          },
        ],
      ];

      // Add more sample data if needed
      const flattenedSampleData = sampleData.flat();
      const moreRestaurants = Array.from({ length: 10 }, (_, i) => {
        const baseRestaurant =
          flattenedSampleData[i % flattenedSampleData.length];
        return {
          ...baseRestaurant,
          Name: `${baseRestaurant.Name} ${i + 1}`,
          Rating: Math.round((3 + Math.random() * 2) * 10) / 10,
          Reviews: Math.floor(100 + Math.random() * 1000),
        };
      });

      const allData = [...flattenedSampleData, ...moreRestaurants];

      // Extract unique cities
      const uniqueCities = [
        ...new Set(allData.map((item) => item["City Name"])),
      ].filter(Boolean);

      setData(allData);
      setFilteredData(allData);
      setCities(uniqueCities);
      setLoading(false);
    } catch (error) {
      console.error("Error parsing data:", error);
      setLoading(false);
    }
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...data];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (item) =>
          item.Name?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item["Name from Maps"]
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.Address?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item["City Name"]
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.Is_Dine_In?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Apply city filter
    if (selectedCity !== "All") {
      result = result.filter((item) => item["City Name"] === selectedCity);
    }

    // Apply WhatsApp filter
    if (selectedWhatsappFilter !== "All") {
      const isConnected = selectedWhatsappFilter === "Connected";
      result = result.filter((item) => {
        const whatsappStatus =
          item["Whatsapp is conneted in GBP"]?.toString().toUpperCase() || "";
        return isConnected ? whatsappStatus === "YES" : whatsappStatus === "NO";
      });
    }

    // Apply Criteria filter
    if (selectedCriteriaFilter !== "All") {
      const meetsAllCriteria = selectedCriteriaFilter === "Yes";
      result = result.filter((item) => {
        return meetsAllCriteria
          ? item.Meets_All_Criteria === true
          : item.Meets_All_Criteria === false;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortBy] || "";
      let bValue = b[sortBy] || "";

      // Handle numeric values
      if (sortBy === "Rating" || sortBy === "Reviews") {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
      } else {
        // Handle string values
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
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
    whatsappConnected: data.filter(
      (item) =>
        String(item["Whatsapp is conneted in GBP"]).toUpperCase() === "YES"
    ).length,
    highRating: data.filter((item) => Number(item.Rating) >= 4.5).length,
    meetsAllCriteria: data.filter((item) => item.Meets_All_Criteria === true)
      .length,
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
