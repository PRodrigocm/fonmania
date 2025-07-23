"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Producto } from "../types";
import ProductModal from "./ProductModal";

export default function PhoneCarousel({ onAddToCart }: { onAddToCart?: (item: Producto) => void }) {
  const [telefonos, setTelefonos] = useState<Producto[]>([]);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState<Producto | null>(null);

  useEffect(() => {
    fetch("/api/productos")
      .then(res => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        // Extrae solo los objetos 'celular' que tengan promoción
        const promos = arr
          .map((p) => p.celular)
          .filter((c) => c && (c.precioPromocion || c.precioDescuento));
        setTelefonos(promos);
      });
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const itemsPerSlide = isMobile ? 1 : 2;
  const maxIndex = telefonos.length - itemsPerSlide;

  const next = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  const visiblePhones = telefonos.slice(index, index + itemsPerSlide);

  const getImageSrc = (item: Producto | undefined | null) => {
    const src = item?.imagen;
    if (typeof src === "string" && src.trim() !== "" && src.startsWith('/img/')) {
      return src;
    }
    return null;
  };

  return (
    <div className="w-full my-16">
      <h2 className="font-title text-4xl mb-10 text-[var(--color-morado)] text-center">Promociones</h2>
      <div className="relative flex items-center justify-center gap-8">
        <button
          onClick={prev}
          className="bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-full p-4 shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition text-2xl"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <div className="flex gap-10">
          {visiblePhones.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition min-w-[260px] max-w-[320px]"
              onClick={() => setModal(p)}
            >
              {getImageSrc(p) && (
                <Image src={getImageSrc(p)!} alt={p.nombre} width={180} height={180} className="mb-4" priority style={{ height: "auto" }} />
              )}
              <h3 className="font-title text-2xl mt-2 mb-2">{p.nombre}</h3>
              <span className="text-xl font-bold text-[var(--color-morado)]">S/ {p.precioPromocion || p.precioDescuento || p.precio}</span>
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