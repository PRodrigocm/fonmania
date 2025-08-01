"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import type { Producto } from "../types";

interface ProductListProps {
  onProductClick?: (producto: Producto) => void;
  categoria?: string;
}

export default function ProductList({ onProductClick, categoria }: ProductListProps) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        let url = "/api/productos";
        if (categoria) {
          url += `?categoria=${encodeURIComponent(categoria)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }
        
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        console.error("Error cargando productos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, [categoria]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">
          <p className="font-bold">Error al cargar productos</p>
          <p className="text-sm">{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No hay productos disponibles</h3>
        <p className="text-gray-500">
          {categoria ? `No se encontraron productos en la categoría "${categoria}"` : "No hay productos en el catálogo"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id} 
          producto={producto}
          onCardClick={onProductClick}
        />
      ))}
    </div>
  );
} 