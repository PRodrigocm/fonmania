"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    title: "Audífonos Inalámbricos",
    desc: "Disfruta de tu música favorita con la mejor calidad y libertad de movimiento. ¡Perfectos para cualquier ocasión!",
    price: "$59.99",
    cta: "Comprar ahora"
  },
  {
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    title: "Cargador Rápido",
    desc: "Carga tus dispositivos en tiempo récord con la última tecnología de carga rápida.",
    price: "$29.99",
    cta: "Ver más"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "Funda Protectora",
    desc: "Protege tu celular con estilo y seguridad. Variedad de colores y materiales.",
    price: "$24.99",
    cta: "Comprar"
  }
];

export default function CarouselBanner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50);
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => setIndex((prev) => (prev + 1) % slides.length), 300);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimeout);
    };
  }, [index]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[250px] flex justify-center items-center mt-8 mb-12 py-12 bg-white"
      style={{
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        position: "relative"
      }}
    >
      {/* Flecha izquierda */}
      <button
        onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-2xl text-blue-600" />
      </button>
      {/* Flecha derecha */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
        aria-label="Siguiente"
      >
        <FaChevronRight className="text-2xl text-blue-600" />
      </button>
      <div className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center px-8 py-8 relative overflow-hidden">
        {/* Imagen a la izquierda */}
        <div className={`basis-1/2 flex justify-center items-center transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain rounded-2xl shadow-lg"
          />
        </div>
        {/* Texto a la derecha */}
        <div className={`basis-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-0 lg:px-12 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-gray-900 tracking-tight">{slide.title}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-3">{slide.desc}</p>
          <span className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 block">{slide.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {slide.cta}
          </button>
          {/* Puntos de navegación */}
          <div className="flex gap-2 mt-4 justify-center sm:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full border-2 border-blue-400 transition-all duration-300 ${index === i ? 'bg-blue-400' : 'bg-transparent'}`}
                aria-label={`Ir al slide ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 