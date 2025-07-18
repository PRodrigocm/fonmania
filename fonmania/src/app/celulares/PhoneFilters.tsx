"use client";

import { FaSearch } from 'react-icons/fa';

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

type PhoneFiltersProps = {
  phones: Phone[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  filteredCount: number;
};

export default function PhoneFilters({
  phones,
  searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  filteredCount
}: PhoneFiltersProps) {
  const brands = [...new Set(phones.map(phone => phone.brand))];

  return (
    <div className="sticky top-32">
      <h2 className="text-2xl font-bold text-white mb-6">Filtros</h2>
      
      {/* Búsqueda */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">Buscar</label>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
          <input
            type="text"
            placeholder="Buscar celulares..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent bg-purple-700 text-white placeholder-purple-300"
          />
        </div>
      </div>

      {/* Ordenar */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">Ordenar por</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent bg-purple-700 text-white"
        >
          <option value="featured">Destacados</option>
          <option value="price-low">Precio: Menor a Mayor</option>
          <option value="price-high">Precio: Mayor a Menor</option>
          <option value="rating">Mejor Valorados</option>
          <option value="name">Nombre A-Z</option>
        </select>
      </div>

      {/* Filtro por marca */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">Marca</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-purple-700 text-white"
        >
          <option value="">Todas las marcas</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Filtro por precio */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-white mb-2">Rango de Precio</label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-purple-700 text-white"
        >
          <option value="">Todos los precios</option>
          <option value="low">Menos de $500</option>
          <option value="medium">$500 - $999</option>
          <option value="high">$1000 o más</option>
        </select>
      </div>

      {/* Resultados */}
      <div className="pt-4 border-t border-purple-600">
        <p className="text-purple-200 text-sm">
          {filteredCount} celular{filteredCount !== 1 ? 'es' : ''} encontrado{filteredCount !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
} 