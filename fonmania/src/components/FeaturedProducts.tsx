"use client";

import { useState, useRef } from "react";
import PhoneCard from "./PhoneCard";
import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Phone = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    storage: string;
    ram: string;
    camera: string;
    battery?: string;
    screen?: string;
  };
  featured?: boolean;
  discount?: number;
};

type FeaturedProductsProps = {
  phones: Phone[];
};

export default function FeaturedProducts({ phones }: FeaturedProductsProps) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const phonesPerGroup = 3;
  // Mostrar todos los teléfonos, no solo los destacados
  const allPhones = phones;
  const totalGroups = Math.ceil(allPhones.length / phonesPerGroup);
  
  const currentPhones = allPhones.slice(
    currentGroup * phonesPerGroup,
    (currentGroup + 1) * phonesPerGroup
  );

  // Efecto para mostrar las tarjetas gradualmente
  React.useEffect(() => {
    setVisibleCards(0);
    const timer = setTimeout(() => setVisibleCards(1), 100);
    const timer2 = setTimeout(() => setVisibleCards(2), 300);
    const timer3 = setTimeout(() => setVisibleCards(3), 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentGroup]);

  const nextGroup = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGroup((prev) => (prev + 1) % totalGroups);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevGroup = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToGroup = (groupIndex: number) => {
    if (!isTransitioning && groupIndex !== currentGroup) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGroup(groupIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-raleway font-semibold mb-6 text-center text-[#7100E4]">
        Productos Destacados
      </h2>
      <div 
        ref={containerRef}
        className="relative overflow-hidden select-none"
        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
      >
        {/* Flecha izquierda */}
        {totalGroups > 1 && (
          <button
            onClick={prevGroup}
            className="absolute left-0 top-1/2 -translate-y-12 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
            style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}
            aria-label="Anterior"
            disabled={isTransitioning}
          >
            <FaChevronLeft className="text-2xl text-[#7100E4]" />
          </button>
        )}
        {/* Flecha derecha */}
        {totalGroups > 1 && (
          <button
            onClick={nextGroup}
            className="absolute right-0 top-1/2 -translate-y-12 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
            style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}
            aria-label="Siguiente"
            disabled={isTransitioning}
          >
            <FaChevronRight className="text-2xl text-[#7100E4]" />
          </button>
        )}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[90rem] mx-auto px-8 transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-0 transform scale-95' : 'transform scale-100'
          }`}
        >
          {currentPhones.map((phone, index) => (
            <div 
              key={phone.id} 
              className={`flex justify-center transition-all duration-700 ease-out ${
                index < visibleCards 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <PhoneCard phone={phone} />
            </div>
          ))}
        </div>
      </div>
      {/* Puntos indicadores */}
      {totalGroups > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalGroups }, (_, index) => (
            <button
              key={index}
              onClick={() => goToGroup(index)}
              disabled={isTransitioning}
              className={`w-3ed-full transition-all duration-200 ${
                index === currentGroup
                  ? 'bg-[#7100E4]'
                  : 'bg-gray-300 hover:bg-gray-400'
              } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
} 