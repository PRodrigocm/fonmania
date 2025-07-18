"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PhoneModal from "../../components/PhoneModal";
import PhoneFilters from "./PhoneFilters";
import PhoneGrid from "./PhoneGrid";
import PageHeader from "./PageHeader";
import { usePhoneFilters } from "./usePhoneFilters";
import { allPhones } from "./phoneData";
import type { Phone } from "./phoneData";

export default function CelularesPage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredPhones,
    filteredCount
  } = usePhoneFilters();

  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (phone: Phone) => {
    setSelectedPhone(phone);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhone(null);
  };

  return (
    <div className="min-h-screen bg-white text-black font-raleway flex flex-col">
      <Header />
      
      <main className="flex-grow flex pt-28">
        {/* Sidebar con filtros */}
        <aside className="w-80 bg-[#7100E4] p-6 border-r border-purple-600 min-h-screen">
          <PhoneFilters
            phones={allPhones}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filteredCount={filteredCount}
          />
        </aside>

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          <PageHeader />
          <PhoneGrid phones={filteredPhones} onCardClick={handleCardClick} />
        </div>
      </main>

      {/* Modal */}
      <PhoneModal 
        phone={selectedPhone} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      <Footer />
    </div>
  );
} 