"use client";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import type { Producto } from "../types";
import Image from "next/image";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";

export default function Accesorios() {
  const { addToCart, getItemCount } = useCart();
  const [accesorios, setAccesorios] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("/api/accesorios")
      .then(res => res.json())
      .then(data => {
        const arr = Array.isArray(data) ? data : [];
        const soloAccesorios = arr.map((p) => p.accesorio).filter(Boolean);
        setAccesorios(soloAccesorios);
      })
      .catch(() => setAccesorios([]));
  }, []);

  const handleAddToCart = (producto: Producto) => {
    addToCart(producto);
  };

  return (
    <div className="min-h-screen bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header carritoCount={getItemCount()} />
      <main className="max-w-5xl mx-auto px-4 mt-0 mb-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[320px] md:min-h-[400px] p-10 md:p-16 bg-white rounded-2xl shadow-lg mb-12 mt-0">
          {/* Imagen a la izquierda */}
          <div className="flex-1 flex justify-center items-center">
            <Image src="/img/cat_3.png" alt="Banner Accesorios" width={320} height={320} className="rounded-xl shadow-lg object-contain" />
          </div>
          {/* Texto a la derecha */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <h2 className="font-title text-5xl mb-6 text-[var(--color-morado)]">Accesorios</h2>
            <p className="text-xl text-gray-700 max-w-xl">Encuentra los mejores accesorios para tu celular: fundas, cargadores, auriculares y mucho más. ¡Complementa tu experiencia móvil con productos de calidad y estilo!</p>
          </div>
        </div>
        <div className="w-full">
          <ProductList productos={accesorios} onAdd={handleAddToCart} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 