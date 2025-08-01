"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import type { Producto } from "../types";
import { FaHeart, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useFavorites } from "../components/FavoritesContext";
import { useCart } from "../components/CartContext";

interface Favorito {
  ID: number;
  productoID: number;
  producto: Producto;
}

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isFavorite, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadFavoritos = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('userToken');
        if (!token) {
          window.location.href = '/login?redirect=/favoritos';
          return;
        }

        const response = await fetch('/api/favoritos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setFavoritos(data);
        } else if (response.status === 401) {
          window.location.href = '/login?redirect=/favoritos';
        }
      } catch (error) {
        console.error('Error cargando favoritos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavoritos();
  }, []);

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleRemoveFavorite = async (productId: number) => {
    await removeFromFavorites(productId);
    setFavoritos(prev => prev.filter(fav => fav.productoID !== productId));
  };

  const handleAddToCart = (e: React.MouseEvent, producto: Producto) => {
    e.stopPropagation();
    addToCart(producto);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="flex-1 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-morado)] mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando favoritos...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-title text-4xl font-bold text-[var(--color-morado)] mb-4">
              Mis Favoritos
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tus productos guardados para comprar más tarde.
            </p>
          </div>

          {favoritos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💔</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No tienes favoritos</h3>
              <p className="text-gray-500 mb-6">
                Agrega productos a tus favoritos para verlos aquí
              </p>
              <Link 
                href="/"
                className="px-6 py-3 bg-[var(--color-morado)] text-[var(--color-amarillo)] rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition font-title font-bold"
              >
                Explorar Productos
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoritos.map((favorito) => {
                const producto = favorito.producto;
                return (
                  <div
                    key={favorito.ID}
                    className="bg-white rounded-lg shadow p-4 flex flex-col items-center w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative cursor-pointer"
                    onClick={() => handleProductClick(producto)}
                  >
                    {/* Botón de eliminar de favoritos */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFavorite(producto.id);
                      }}
                      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-md"
                    >
                      <FaHeart className="text-red-500 text-lg" />
                    </button>

                    <Image 
                      src={producto.imagen || "/img/cat_1.png"} 
                      alt={producto.nombre} 
                      width={120} 
                      height={120} 
                      className="object-contain mx-auto w-full max-w-[120px] h-auto" 
                      style={{ height: "auto" }} 
                    />
                    <h3 className="font-title text-xl mt-2 mb-1 text-center">{producto.nombre}</h3>
                    
                    {/* Calificación */}
                    {producto.reseñas && producto.reseñas.length > 0 && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(Math.round(producto.reseñas.reduce((acc, r) => acc + r.calificacion, 0) / producto.reseñas.length))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({producto.reseñas.length})
                        </span>
                      </div>
                    )}
                    
                    <span className="text-lg font-bold text-[var(--color-morado)]">
                      S/ {producto.precio.toFixed(2)}
                    </span>
                    {producto.marca && <p className="text-sm text-gray-600 mt-1">{producto.marca}</p>}
                    
                    <button
                      className="mt-3 px-4 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
                      onClick={(e) => handleAddToCart(e, producto)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Modal de producto */}
      <ProductModal
        open={isModalOpen}
        onClose={handleCloseModal}
        producto={selectedProduct || undefined}
      />
    </div>
  );
} 