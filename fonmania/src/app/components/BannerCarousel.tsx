"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const banners = [
  { src: "/img/titulo_1.png", alt: "Banner 1" },
  { src: "/img/titulo_2.png", alt: "Banner 2" },
  { src: "/img/logo.png", alt: "Banner 3" },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  const prev = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const next = () => setIndex((prev) => (prev + 1) % banners.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        src={banners[index].src}
        alt={banners[index].alt}
        width={900}
        height={300}
        className="w-full h-[200px] sm:h-[300px] object-contain bg-white transition-all duration-700"
        priority
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-full p-2 shadow hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-full p-2 shadow hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
        aria-label="Siguiente"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[var(--color-morado)]" : "bg-[var(--color-amarillo)]"} border border-[var(--color-morado)] transition`}
          />
        ))}
      </div>
    </div>
  );
} 