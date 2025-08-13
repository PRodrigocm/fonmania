"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageGallery({ images, alt, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      {/* Miniaturas (vertical en md+) */}
      {images.length > 1 && (
        <div className="hidden md:flex md:flex-col md:gap-2 md:mr-4 md:overflow-y-auto md:max-h-[400px]">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition flex-shrink-0 ${
                index === currentIndex
                  ? 'border-[var(--color-morado)]'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image src={image} alt={`${alt} mini ${index}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Imagen principal */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden flex-grow">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Imagen ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority={currentIndex === 0}
        />
        
        {/* Navegación con flechas */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Imagen anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Siguiente imagen"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas horizontales en móvil */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 md:hidden">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                index === currentIndex
                  ? "border-[var(--color-morado)]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Indicador de posición */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex
                  ? "bg-[var(--color-morado)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 