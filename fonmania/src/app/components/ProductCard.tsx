"use client";
import Image from "next/image";
import type { Producto } from "../types";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useFavorites } from "./FavoritesContext";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

interface ProductCardProps {
  producto: Producto;
  onCardClick?: (producto: Producto) => void;
}

interface Reseña {
  id: number;
  calificacion: number;
  comentario: string;
  fecha: string;
  usuario: {
    nombre: string;
  };
}

interface ReseñasData {
  reseñas: Reseña[];
  calificacionPromedio: number;
  totalReseñas: number;
}

export default function ProductCard({ producto, onCardClick }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [reseñasData, setReseñasData] = useState<ReseñasData | null>(null);
  const { addToCart } = useCart();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  
  const { nombre, precio, imagen, descripcion, compatibilidad, dimensiones, categoria, marca, color, almacenamiento, modelo } = producto;
  
  const src = imagen || "/img/cat_1.png";
  const isAccesorio = categoria === 'Accesorio';
  const isFavorito = isFavorite(producto.id);
  
  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        const response = await fetch(`/api/productos/${producto.id}/reseñas`);
        if (response.ok) {
          const data = await response.json();
          setReseñasData(data);
        }
      } catch (error) {
        console.error('Error cargando reseñas:', error);
      }
    };

    fetchReseñas();
  }, [producto.id]);
  
  const handleCardClick = () => {
    if (onCardClick) onCardClick(producto);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(producto);
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorito) {
      removeFromFavorites(producto.id);
    } else {
      addToFavorites(producto.id);
    }
  };
  
  const showDetails = descripcion || compatibilidad || dimensiones || marca || color || almacenamiento || modelo;
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };
  
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex flex-col items-center w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative ${isAccesorio ? '' : 'cursor-pointer'}`}
      onClick={isAccesorio ? undefined : handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Botón de favoritos */}
      <button
        onClick={handleFavoriteToggle}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-md"
      >
        {isFavorito ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-500 text-lg" />
        )}
      </button>

      <Image 
        src={src} 
        alt={nombre || "Imagen de producto"} 
        width={120} 
        height={120} 
        className="object-contain mx-auto w-full max-w-[120px] h-auto" 
        style={{ height: "auto" }} 
      />
      <h3 className="font-title text-xl mt-2 mb-1 text-center">{nombre}</h3>
      
      {/* Calificación y reseñas */}
      {reseñasData && reseñasData.totalReseñas > 0 && (
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {renderStars(Math.round(reseñasData.calificacionPromedio))}
          </div>
          <span className="text-sm text-gray-600">
            ({reseñasData.totalReseñas})
          </span>
        </div>
      )}
      
      <span className="text-lg font-bold text-[var(--color-morado)]">
        S/ {typeof precio === 'number' ? precio.toFixed(2) : precio}
      </span>
      {marca && <p className="text-sm text-gray-600 mt-1">{marca}</p>}
      
      {/* Detalles dentro de la carta en hover, debajo del precio */}
      {hovered && showDetails && (
        <div className="w-full bg-white rounded-xl border border-[var(--color-morado)/20] p-3 my-2 text-sm text-gray-700 animate-fade-in">
          {descripcion && <div className="mb-1"><b>Descripción:</b> {descripcion}</div>}
          {compatibilidad && <div><b>Compatibilidad:</b> {compatibilidad}</div>}
          {dimensiones && <div><b>Dimensiones:</b> {dimensiones}</div>}
          {color && <div><b>Color:</b> {color}</div>}
          {almacenamiento && <div><b>Almacenamiento:</b> {almacenamiento}</div>}
          {modelo && <div><b>Modelo:</b> {modelo}</div>}
        </div>
      )}
      
      <button
        className="mt-3 px-4 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
} 