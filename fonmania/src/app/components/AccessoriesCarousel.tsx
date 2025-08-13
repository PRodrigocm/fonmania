"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Producto } from "../types";
import ProductModal from "./ProductModal";

export default function AccessoriesCarousel({ onAddToCart }: { onAddToCart?: (item: Producto) => void }) {
  const [accesorios, setAccesorios] = useState<Producto[]>([]);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState<Producto | null>(null);

  useEffect(() => {
    fetch("/api/accesorios")
      .then(res => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setAccesorios(arr);
      })
      .catch(() => setAccesorios([]));
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const itemsPerSlide = isMobile ? 1 : 2;
  const maxIndex = accesorios.length - itemsPerSlide;

  const next = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  const visibleAccessories = accesorios.slice(index, index + itemsPerSlide);

  const getImageSrc = (item: Producto | undefined | null) => {
    const src = item?.imagen;
    if (typeof src === "string" && src.trim() !== "") {
      return src;
    }
    // Usa un placeholder real que exista en public/img
    return "/img/cat_3.png";
  };

  return (
    <div className="w-full my-16">
      <h2 className="font-title text-4xl mb-10 text-[var(--color-morado)] text-center">Accesorios</h2>
      <div className="relative flex items-center justify-center gap-8">
        <button
          onClick={prev}
          className="bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-full p-4 shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition text-2xl"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <div className="flex gap-10">
          {visibleAccessories.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition w-[280px] h-[420px]"
              onClick={() => setModal(a)}
            >
              <Image src={getImageSrc(a)} alt={a.nombre || "Accesorio"} width={180} height={180} className="mb-4 object-contain w-full max-w-[180px] h-auto" priority style={{ height: "auto" }} />
              <h3 className="font-title text-2xl mt-2 mb-2">{a.nombre}</h3>
              <span className="text-xl font-bold text-[var(--color-morado)]">S/ {typeof a.precio === 'number' ? a.precio.toFixed(2) : a.precio}</span>
              {a.marca && <p className="text-sm text-gray-600 mt-1">{a.marca}</p>}
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-full p-4 shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition text-2xl"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      {/* Modal */}
      <ProductModal
        open={!!modal}
        onClose={() => setModal(null)}
        onAddToCart={modal ? () => { if (onAddToCart) onAddToCart(modal!); setModal(null); } : undefined}
        producto={modal ?? undefined}
      />
    </div>
  );
} 