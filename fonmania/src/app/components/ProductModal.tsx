"use client";
import Image from "next/image";
import type { Producto } from "../types";
import ImageGallery from "./ImageGallery";
import { useState, useEffect } from "react";
import { FaStar, FaUser } from "react-icons/fa";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
  producto?: Producto;
}

interface Reseña {
  ID: number;
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

const getProductImages = (producto: Producto): string[] => {
  const images: string[] = [];
  
  // Agregar imagen principal si existe
  if (producto.imagen && producto.imagen.trim() !== "") {
    images.push(producto.imagen);
  }
  
  // Agregar imágenes adicionales si existen
  if (producto.imagenes && producto.imagenes.length > 0) {
    images.push(...producto.imagenes.filter(img => img && img.trim() !== ""));
  }
  
  return images;
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
    />
  ));
};

export default function ProductModal({ open, onClose, onAddToCart, producto }: ProductModalProps) {
  const [reseñasData, setReseñasData] = useState<ReseñasData | null>(null);
  const [isLoadingReseñas, setIsLoadingReseñas] = useState(false);

  useEffect(() => {
    if (open && producto) {
      const fetchReseñas = async () => {
        try {
          setIsLoadingReseñas(true);
          const response = await fetch(`/api/productos/${producto.id}/resenas`);
          if (response.ok) {
            const data = await response.json();
            setReseñasData(data);
          }
        } catch (error) {
          console.error('Error cargando reseñas:', error);
        } finally {
          setIsLoadingReseñas(false);
        }
      };

      fetchReseñas();
    }
  }, [open, producto]);

  if (!open || !producto) return null;

  const p = producto;
  const productImages = getProductImages(p);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 md:p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-full max-h-[95vh] md:max-h-[85vh] relative flex flex-col animate-fade-in mx-auto overflow-hidden">
        
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 text-3xl text-[var(--color-morado)] hover:text-[var(--color-amarillo)] z-10"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Imagen fija en la parte superior */}
        <div className="w-full h-48 md:h-64 p-4 md:p-6 flex-shrink-0">
          {productImages.length > 0 ? (
            <ImageGallery 
              images={productImages} 
              alt={p.nombre || "Imagen de producto"}
              className="h-full w-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 rounded-xl">
              <span className="text-gray-400">Sin imágenes disponibles</span>
            </div>
          )}
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 pt-0">
          {/* Título y precio */}
          <h2 className="font-title text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-morado)] mb-2 pr-8">
            {p.nombre}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-morado)]">
              S/ {typeof p.precio === 'number' ? p.precio.toFixed(2) : p.precio}
            </span>
            {p.marca && (
              <span className="px-3 py-1 bg-[var(--color-amarillo)] text-[var(--color-morado)] rounded-full text-sm font-semibold w-fit">
                {p.marca}
              </span>
            )}
          </div>

          {/* Descripción */}
          {p.descripcion && (
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">{p.descripcion}</p>
            </div>
          )}

          {/* Características principales */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Características Principales</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-600 mb-1">Producto</span>
                <span className="text-sm text-gray-900 font-semibold">{p.nombre}</span>
              </div>
              {p.marca && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Marca</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.marca}</span>
                </div>
              )}
              {p.modelo && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Modelo</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.modelo}</span>
                </div>
              )}
              {p.color && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Color</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.color}</span>
                </div>
              )}
              {p.almacenamiento && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Almacenamiento</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.almacenamiento}</span>
                </div>
              )}
              {p.categoria && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Categoría</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.categoria}</span>
                </div>
              )}
            </div>
          </div>

          {/* Especificaciones técnicas adicionales */}
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Especificaciones Técnicas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.ram && p.ram !== 'N/A' && p.ram !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">RAM</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.ram}</span>
                </div>
              )}
              {p.pantalla && p.pantalla !== 'N/A' && p.pantalla !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Pantalla</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.pantalla}</span>
                </div>
              )}
              {p.bateria && p.bateria !== 'N/A' && p.bateria !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Batería</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.bateria}</span>
                </div>
              )}
              {p.camara && p.camara !== 'N/A' && p.camara !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Cámara</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.camara}</span>
                </div>
              )}
              {p.puertoCarga && p.puertoCarga !== 'N/A' && p.puertoCarga !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Puerto de Carga</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.puertoCarga}</span>
                </div>
              )}
              {p.compatibilidad && p.compatibilidad !== 'N/A' && p.compatibilidad !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Compatibilidad</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.compatibilidad}</span>
                </div>
              )}
              {p.dimensiones && p.dimensiones !== 'N/A' && p.dimensiones !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Dimensiones</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.dimensiones}</span>
                </div>
              )}
              {p.peso && p.peso !== 'N/A' && p.peso !== '' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600 mb-1">Peso</span>
                  <span className="text-sm text-gray-900 font-semibold">{p.peso}</span>
                </div>
              )}
            </div>
          </div>

          {/* Sección de Reseñas */}
          {reseñasData && reseñasData.totalReseñas > 0 && (
            <div className="bg-yellow-50 rounded-xl p-4">
              <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Reseñas de Clientes</h4>
              <div className="space-y-3 max-h-40 overflow-y-auto">
                {reseñasData.reseñas.slice(0, 3).map((reseña) => (
                  <div key={reseña.ID} className="border-b border-yellow-200 pb-3 last:border-b-0">
                    <div className="flex items-center gap-2 mb-1">
                      <FaUser className="text-gray-400 text-sm" />
                      <span className="text-sm font-semibold text-gray-700">
                        {reseña.usuario.nombre}
                      </span>
                      <div className="flex items-center gap-1 ml-auto">
                        {renderStars(reseña.calificacion)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{reseña.comentario}</p>
                    <span className="text-xs text-gray-400">
                      {new Date(reseña.fecha).toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {reseñasData.totalReseñas > 3 && (
                  <p className="text-sm text-gray-500 text-center pt-2">
                    Y {reseñasData.totalReseñas - 3} reseñas más...
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Botón de agregar al carrito fijo en la parte inferior */}
        <div className="p-4 md:p-6 pt-0 bg-white border-t border-gray-100 flex-shrink-0">
          <button
            className="w-full py-3 md:py-4 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg md:text-xl font-bold hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition shadow-lg"
            onClick={() => { if (onAddToCart) onAddToCart(); onClose(); }}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
