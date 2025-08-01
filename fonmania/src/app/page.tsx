"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import type { Producto } from "./types";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-title text-4xl font-bold text-[var(--color-morado)] mb-4">
              Bienvenido a Fonmania
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia selección de productos con las mejores marcas y precios del mercado.
            </p>
          </div>

          <ProductList 
            onProductClick={handleProductClick}
          />
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
