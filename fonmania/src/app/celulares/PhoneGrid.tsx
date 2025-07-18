"use client";

import PhoneCard from "../../components/PhoneCard";

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
  rating?: number;
  inStock: boolean;
};

type PhoneGridProps = {
  phones: Phone[];
  onCardClick: (phone: Phone) => void;
};

export default function PhoneGrid({ phones, onCardClick }: PhoneGridProps) {
  if (phones.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📱</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron celulares</h3>
        <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {phones.map((phone) => (
        <div key={phone.id} className="flex justify-center">
          <PhoneCard phone={phone} onCardClick={onCardClick} />
        </div>
      ))}
    </div>
  );
} 