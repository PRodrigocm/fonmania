import Image from "next/image";
import type { Producto } from "../types";
import { useState } from "react";

interface ProductCardProps extends Producto {
  onAdd: () => void;
  onCardClick?: (item: Producto) => void;
}

export default function ProductCard({ nombre, precio, imagen, onAdd, onCardClick, descripcion, compatibilidad, dimensiones, peso, colores, categoria, ...rest }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const src = imagen || "/img/placeholder.png";
  const isAccesorio = categoria === 'accesorio';
  const handleCardClick = () => {
    if (!isAccesorio && onCardClick) onCardClick({ nombre, precio, imagen, descripcion, compatibilidad, dimensiones, peso, colores, categoria, ...rest } as Producto);
  };
  const showDetails = descripcion || compatibilidad || dimensiones || peso || colores;
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex flex-col items-center w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative ${isAccesorio ? '' : 'cursor-pointer'}`}
      onClick={isAccesorio ? undefined : handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image 
        src={src} 
        alt={nombre || "Imagen de producto"} 
        width={120} 
        height={120} 
        className="object-contain mx-auto w-full max-w-[120px] h-auto" 
        style={{ height: "auto" }} 
      />
      <h3 className="font-title text-xl mt-2 mb-1">{nombre}</h3>
      <span className="text-lg font-bold text-[var(--color-morado)]">S/ {precio}</span>
      {/* Detalles dentro de la carta en hover, debajo del precio */}
      {hovered && showDetails && (
        <div className="w-full bg-white rounded-xl border border-[var(--color-morado)/20] p-3 my-2 text-sm text-gray-700 animate-fade-in">
          {descripcion && <div className="mb-1"><b>Descripción:</b> {descripcion}</div>}
          {compatibilidad && <div><b>Compatibilidad:</b> {compatibilidad}</div>}
          {dimensiones && <div><b>Dimensiones:</b> {dimensiones}</div>}
          {peso && <div><b>Peso:</b> {peso}</div>}
          {colores && <div><b>Colores:</b> {colores}</div>}
        </div>
      )}
      <button
        className="mt-3 px-4 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
        onClick={e => { e.stopPropagation(); onAdd(); }}
      >
        Agregar al carrito
      </button>
    </div>
  );
} 