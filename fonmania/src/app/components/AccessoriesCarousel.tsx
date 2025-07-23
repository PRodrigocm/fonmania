"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Producto } from "../types";

export default function AccessoriesCarousel({ onAddToCart }: { onAddToCart?: (item: Producto) => void }) {
  const [accesorios, setAccesorios] = useState<Producto[]>([]);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState<Producto | null>(null);

  useEffect(() => {
    fetch("/api/accesorios")
      .then(res => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        const soloAccesorios = arr.map((p) => p.accesorio).filter(Boolean);
        setAccesorios(soloAccesorios);
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
              className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition min-w-[260px] max-w-[320px]"
              onClick={() => setModal(a)}
            >
              <Image src={getImageSrc(a)} alt={a.nombre || "Accesorio"} width={180} height={180} className="mb-4 object-contain w-full max-w-[180px] h-auto" priority style={{ height: "auto" }} />
              <h3 className="font-title text-2xl mt-2 mb-2">{a.nombre}</h3>
              <span className="text-xl font-bold text-[var(--color-morado)]">S/ {typeof a.precio === 'number' && !isNaN(a.precio) ? a.precio.toFixed(2) : '--'}</span>
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
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-10 max-w-3xl w-full relative flex flex-col md:flex-row items-center md:items-stretch animate-fade-in">
            {/* Imagen principal */}
            <div className="flex flex-col justify-center items-center md:items-center md:justify-center md:w-1/2 p-4">
              {getImageSrc(modal) && (
                <Image src={getImageSrc(modal)!} alt={modal?.nombre || "Accesorio"} width={240} height={320} className="object-contain rounded-xl mx-auto shadow-lg bg-[#f6f6fa]" />
              )}
            </div>
            {/* Detalle */}
            <div className="flex-1 flex flex-col gap-4 md:pl-8 mt-6 md:mt-0 justify-center">
              <button
                className="absolute top-2 right-2 text-3xl text-[var(--color-morado)] hover:text-[var(--color-amarillo)]"
                onClick={() => setModal(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h3 className="font-title text-2xl md:text-3xl mb-2 text-center md:text-left">{modal.nombre}</h3>
              <p className="text-gray-700 mb-2 text-center md:text-left">{modal.descripcion}</p>
              <button
                className="w-full py-3 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-xl hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition mt-2 shadow-lg"
                onClick={() => { if (onAddToCart) onAddToCart(modal); setModal(null); }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 