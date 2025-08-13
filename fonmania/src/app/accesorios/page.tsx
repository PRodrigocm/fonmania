"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import type { Producto } from "../types";

export default function AccesoriosPage() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filteredProductos, setFilteredProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Obtener productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/productos?categoria=Accesorio');
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

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-title text-4xl font-bold text-[var(--color-morado)] mb-4">
              Accesorios
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complementa tu dispositivo con los mejores accesorios y gadgets del mercado.
            </p>
          </div>

          <div className="space-y-12">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
                  <p className="text-gray-600">Cargando productos...</p>
                </div>
              </div>
            ) : filteredProductos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎧</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No se encontraron accesorios</h3>
                <p className="text-gray-500">No hay accesorios disponibles en este momento.</p>
              </div>
            ) : (
              <>
                {/* Cargadores */}
                {filteredProductos.filter(p => p.modelo === 'Cargador').length > 0 && (
                  <div>
                    <h2 className="font-title text-3xl font-bold text-[var(--color-morado)] mb-6">Cargadores</h2>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                      {filteredProductos.filter(p => p.modelo === 'Cargador').map((producto, index) => (
                        <div key={`producto-cargador-${producto.id}-${index}`} className="flex-shrink-0 w-72">
                          <ProductCard producto={producto} onCardClick={handleProductClick} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Protectores */}
                {filteredProductos.filter(p => p.modelo === 'Protector').length > 0 && (
                  <div>
                    <h2 className="font-title text-3xl font-bold text-[var(--color-morado)] mb-6">Protectores</h2>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                      {filteredProductos.filter(p => p.modelo === 'Protector').map((producto, index) => (
                        <div key={`producto-protector-${producto.id}-${index}`} className="flex-shrink-0 w-72">
                          <ProductCard producto={producto} onCardClick={handleProductClick} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audífonos */}
                {filteredProductos.filter(p => p.modelo === 'Audífonos').length > 0 && (
                  <div>
                    <h2 className="font-title text-3xl font-bold text-[var(--color-morado)] mb-6">Audífonos</h2>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                      {filteredProductos.filter(p => p.modelo === 'Audífonos').map((producto, index) => (
                        <div key={`producto-audifonos-${producto.id}-${index}`} className="flex-shrink-0 w-72">
                          <ProductCard producto={producto} onCardClick={handleProductClick} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Otros */}
                {filteredProductos.filter(p => !['Cargador','Protector','Audífonos'].includes(p.modelo ?? '')).length > 0 && (
                  <div>
                    <h2 className="font-title text-3xl font-bold text-[var(--color-morado)] mb-6">Otros</h2>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                      {filteredProductos.filter(p => !['Cargador','Protector','Audífonos'].includes(p.modelo ?? '')).map((producto, index) => (
                        <div key={`producto-otros-${producto.id}-${index}`} className="flex-shrink-0 w-72">
                          <ProductCard producto={producto} onCardClick={handleProductClick} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
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