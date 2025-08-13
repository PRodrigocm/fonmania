"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import HeroBanner from "./components/HeroBanner";
import PhoneCarousel from "./components/PhoneCarousel";
import AccessoriesCarousel from "./components/AccessoriesCarousel";
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
      <HeroBanner />
      <main className="flex-1 py-8 px-4">
        {/* Carruseles de promociones y accesorios */}
        <PhoneCarousel />
        <AccessoriesCarousel />

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
