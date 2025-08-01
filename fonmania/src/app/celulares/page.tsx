"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import type { Producto } from "../types";
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterState {
  marca: string;
  precioMin: string;
  precioMax: string;
  almacenamiento: string;
  color: string;
  modelo: string;
}

export default function CelularesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filteredProductos, setFilteredProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    marca: "",
    precioMin: "",
    precioMax: "",
    almacenamiento: "",
    color: "",
    modelo: ""
  });

  // Obtener productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/productos?categoria=Celular');
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
          setFilteredProductos(data);
        }
      } catch (error) {
        console.error('Error cargando productos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...productos];

    if (filters.marca) {
      filtered = filtered.filter(p => 
        p.marca && p.marca.toLowerCase().includes(filters.marca.toLowerCase())
      );
    }

    if (filters.precioMin) {
      const minPrice = parseFloat(filters.precioMin);
      filtered = filtered.filter(p => p.precio >= minPrice);
    }

    if (filters.precioMax) {
      const maxPrice = parseFloat(filters.precioMax);
      filtered = filtered.filter(p => p.precio <= maxPrice);
    }

    if (filters.almacenamiento) {
      filtered = filtered.filter(p => 
        p.almacenamiento && p.almacenamiento.toLowerCase().includes(filters.almacenamiento.toLowerCase())
      );
    }

    if (filters.color) {
      filtered = filtered.filter(p => 
        p.color && p.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    }

    if (filters.modelo) {
      filtered = filtered.filter(p => 
        p.modelo && p.modelo.toLowerCase().includes(filters.modelo.toLowerCase())
      );
    }

    setFilteredProductos(filtered);
  }, [filters, productos]);

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      marca: "",
      precioMin: "",
      precioMax: "",
      almacenamiento: "",
      color: "",
      modelo: ""
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== "");

  // Obtener valores únicos para los filtros
  const marcas = [...new Set(productos.map(p => p.marca).filter(Boolean))];
  const almacenamientos = [...new Set(productos.map(p => p.almacenamiento).filter(Boolean))];
  const colores = [...new Set(productos.map(p => p.color).filter(Boolean))];
  const modelos = [...new Set(productos.map(p => p.modelo).filter(Boolean))];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-title text-4xl font-bold text-[var(--color-morado)] mb-4">
              Celulares
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre la última tecnología en smartphones con las mejores marcas y precios.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
              >
                <FaFilter />
                Filtros
                {showFilters ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  <FaTimes />
                  Limpiar Filtros
                </button>
              )}
            </div>

            {showFilters && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Filtro por Marca */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca
                    </label>
                    <select
                      value={filters.marca}
                      onChange={(e) => handleFilterChange('marca', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    >
                      <option value="">Todas las marcas</option>
                      {marcas.map(marca => (
                        <option key={marca} value={marca}>{marca}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filtro por Precio Mínimo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Precio Mínimo (S/)
                    </label>
                    <input
                      type="number"
                      value={filters.precioMin}
                      onChange={(e) => handleFilterChange('precioMin', e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    />
                  </div>

                  {/* Filtro por Precio Máximo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Precio Máximo (S/)
                    </label>
                    <input
                      type="number"
                      value={filters.precioMax}
                      onChange={(e) => handleFilterChange('precioMax', e.target.value)}
                      placeholder="5000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    />
                  </div>

                  {/* Filtro por Almacenamiento */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Almacenamiento
                    </label>
                    <select
                      value={filters.almacenamiento}
                      onChange={(e) => handleFilterChange('almacenamiento', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    >
                      <option value="">Todos los almacenamientos</option>
                      {almacenamientos.map(alm => (
                        <option key={alm} value={alm}>{alm}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filtro por Color */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <select
                      value={filters.color}
                      onChange={(e) => handleFilterChange('color', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    >
                      <option value="">Todos los colores</option>
                      {colores.map(color => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filtro por Modelo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <select
                      value={filters.modelo}
                      onChange={(e) => handleFilterChange('modelo', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-morado)] focus:border-transparent"
                    >
                      <option value="">Todos los modelos</option>
                      {modelos.map(modelo => (
                        <option key={modelo} value={modelo}>{modelo}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Información de resultados */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Mostrando {filteredProductos.length} de {productos.length} productos
                    {hasActiveFilters && " con filtros aplicados"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Lista de productos filtrados */}
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando productos...</p>
              </div>
            </div>
          ) : filteredProductos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No se encontraron productos</h3>
              <p className="text-gray-500 mb-6">
                {hasActiveFilters 
                  ? "Intenta ajustar los filtros para ver más resultados"
                  : "No hay celulares disponibles en este momento"
                }
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition font-title font-bold"
                >
                  Limpiar Filtros
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProductos.map((producto) => (
                <ProductCard 
                  key={producto.id} 
                  producto={producto}
                  onCardClick={handleProductClick}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Modal de producto */}
      <ProductModal
        open={isModalOpen}
        onClose={handleCloseModal}
        producto={selectedProduct || undefined}
      />
    </div>
  );
} 