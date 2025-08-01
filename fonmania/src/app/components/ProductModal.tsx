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

const getImageSrc = (item: Producto | undefined | null) => {
  if (!item) return "";
  const src = item.imagen;
  if (typeof src === "string" && src.trim() !== "") {
    return src;
  }
  return "";
};

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
          const response = await fetch(`/api/productos/${producto.id}/reseñas`);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-6xl w-full relative flex flex-col lg:flex-row items-stretch animate-fade-in mx-auto max-h-[90vh] overflow-hidden">
        {/* Galería de imágenes - Lado izquierdo */}
        <div className="lg:w-1/2 p-4 flex flex-col">
          {productImages.length > 0 ? (
            <ImageGallery 
              images={productImages} 
              alt={p.nombre || "Imagen de producto"}
              className="h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 rounded-xl">
              <span className="text-gray-400">Sin imágenes disponibles</span>
            </div>
          )}
        </div>

        {/* Detalles del producto - Lado derecho */}
        <div className="lg:w-1/2 p-4 flex flex-col justify-between overflow-y-auto">
          <div>
          <button
              className="absolute top-4 right-4 text-3xl text-[var(--color-morado)] hover:text-[var(--color-amarillo)] z-10"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Precio destacado */}
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-3xl font-bold text-[var(--color-morado)]">
                S/ {typeof p.precio === 'number' ? p.precio.toFixed(2) : p.precio}
              </span>
              {p.precioPromocion && (
                <span className="text-lg text-green-600 font-semibold">
                  ¡Oferta! S/ {p.precioPromocion.toFixed(2)}
                </span>
              )}
            </div>

            {/* Marca y nombre */}
            {p.marca && (
              <span className="uppercase text-xs text-gray-500 font-bold mb-2 block">
                {p.marca}
              </span>
            )}
            <h3 className="font-title text-2xl md:text-3xl mb-4 text-[var(--color-negro)]">
              {p.nombre}
            </h3>

            {/* Calificación y reseñas */}
            {reseñasData && reseñasData.totalReseñas > 0 && (
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  {renderStars(Math.round(reseñasData.calificacionPromedio))}
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {reseñasData.calificacionPromedio.toFixed(1)}
                </span>
                <span className="text-gray-600">
                  ({reseñasData.totalReseñas} reseñas)
                </span>
          </div>
            )}

            {/* Descripción */}
            {p.descripcion && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                {p.descripcion}
              </p>
            )}

            {/* Especificaciones técnicas */}
            <div className="space-y-4 mb-6">
          {/* Detalles básicos */}
              {(p.color || p.almacenamiento || p.modelo) && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Características Principales</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  </div>
                </div>
              )}

              {/* Especificaciones técnicas para celulares */}
              {p.categoria === 'Celular' && (p.pantalla || p.bateria || p.camara || p.ram) && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Especificaciones Técnicas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.pantalla && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Pantalla</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.pantalla}</span>
                      </div>
                    )}
                    {p.bateria && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Batería</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.bateria}</span>
                      </div>
                    )}
                    {p.camara && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Cámara</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.camara}</span>
                      </div>
                    )}
                    {p.ram && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">RAM</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.ram}</span>
                      </div>
                    )}
                    {p.puertoCarga && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Puerto de Carga</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.puertoCarga}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Detalles específicos para accesorios */}
              {p.categoria === 'Accesorio' && (p.compatibilidad || p.dimensiones || p.peso) && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Detalles del Accesorio</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.compatibilidad && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Compatibilidad</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.compatibilidad}</span>
                      </div>
                    )}
                    {p.dimensiones && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Dimensiones</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.dimensiones}</span>
                      </div>
                    )}
                    {p.peso && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Peso</span>
                        <span className="text-sm text-gray-900 font-semibold">{p.peso}</span>
                      </div>
                    )}
                  </div>
            </div>
          )}
          
              {/* Información adicional */}
              {(p.detalles || p.colores) && (
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-[var(--color-morado)] mb-3 text-lg">Información Adicional</h4>
                  <div className="space-y-2">
                    {p.detalles && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Detalles</span>
                        <span className="text-sm text-gray-900">{p.detalles}</span>
                      </div>
                    )}
                    {p.colores && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 mb-1">Colores disponibles</span>
                        <span className="text-sm text-gray-900">{p.colores}</span>
                      </div>
                    )}
                  </div>
            </div>
          )}

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
          </div>

          {/* Botón de agregar al carrito */}
          <div className="mt-6">
          <button
              className="w-full py-4 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-xl font-bold hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition shadow-lg"
            onClick={() => { if (onAddToCart) onAddToCart(); onClose(); }}
          >
              Agregar al Carrito
          </button>
          </div>
        </div>
      </div>
    </div>
  );
} 