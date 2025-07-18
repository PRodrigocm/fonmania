import { useState, useMemo } from "react";
import { Phone, allPhones } from "./phoneData";

export function usePhoneFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredPhones = useMemo(() => {
    return allPhones.filter(phone => {
      const matchesSearch = phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === "" || phone.brand === selectedBrand;
      const matchesPrice = priceRange === "" || 
        (priceRange === "low" && phone.price < 500) ||
        (priceRange === "medium" && phone.price >= 500 && phone.price < 1000) ||
        (priceRange === "high" && phone.price >= 1000);
      
      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [searchTerm, selectedBrand, priceRange]);

  const sortedPhones = useMemo(() => {
    return [...filteredPhones].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [filteredPhones, sortBy]);

  return {
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredPhones: sortedPhones,
    totalCount: allPhones.length,
    filteredCount: sortedPhones.length
  };
} 