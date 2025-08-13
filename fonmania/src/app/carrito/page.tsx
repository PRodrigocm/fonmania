"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../components/CartContext";
import { FaTrash, FaArrowLeft, FaLock, FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import ProductModal from "../components/ProductModal";
import type { Producto } from "../types";

export default function Carrito() {
  const { 
    items, 
    updateQuantity, 
    removeFromCart, 
    getSubtotal, 
    getShippingCost, 
    getTotal,
    getItemCount 
  } = useCart();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userData = localStorage.getItem("userData");
    setIsAuthenticated(!!(token && userData));
  }, []);

  const cambiarCantidad = (id: number, delta: number) => {
    const item = items.find(p => p.id === id);
    if (item) {
      updateQuantity(id, item.cantidad + delta);
    }
  };

  const eliminarProducto = (id: number) => {
    removeFromCart(id);
  };

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      router.push("/login?redirect=/carrito/checkout");
      return;
    }
    router.push("/carrito/checkout");
  };

  const handleProductClick = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const subtotal = getSubtotal();
  const envio = getShippingCost();
  const total = getTotal();
  const itemCount = getItemCount();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
        <Header />
        <main className="w-full max-w-lg mx-auto flex-1 py-8 px-2 sm:px-0">
          <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="font-title text-2xl text-[var(--color-morado)] font-bold mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-6">
              ¡Agrega algunos productos para comenzar a comprar!
            </p>
            <button 
              onClick={() => router.push("/")}
              className="w-full py-3 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition flex items-center justify-center gap-2"
            >
              <FaArrowLeft /> Continuar Comprando
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="w-full max-w-lg mx-auto flex-1 py-8 px-2 sm:px-0">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-title text-xl sm:text-2xl text-[var(--color-morado)] font-bold">
              Carrito de Compras <span className="text-base font-normal">({itemCount} items)</span>
            </h2>
            <button 
              onClick={() => router.push("/")}
              className="text-[var(--color-morado)] hover:text-[var(--color-amarillo)] transition"
            >
              <FaArrowLeft />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 mb-6">
            {items.map((producto, index) => (
              <div key={`carrito-item-${producto.id}-${index}`} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                <div 
                  className="flex items-center gap-4 flex-1 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition"
                  onClick={() => handleProductClick(producto)}
                >
                  <Image 
                    src={producto.imagen && producto.imagen.trim() !== "" ? producto.imagen : "/img/cat_1.png"}
                    alt={producto.nombre}
                    width={60}
                    height={60}
                    className="rounded-lg bg-gray-200 object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-title text-lg font-bold text-[var(--color-morado)] hover:text-[var(--color-amarillo)] transition">
                      {producto.nombre}
                    </div>
                    {producto.marca && (
                      <div className="text-sm text-gray-600">{producto.marca}</div>
                    )}
                    <div className="text-[var(--color-morado)] font-bold">
                      S/ {producto.precio.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <FaEye className="text-xs" />
                      <span>Click para ver detalles</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => cambiarCantidad(producto.id, -1)} 
                      className="w-7 h-7 rounded bg-gray-200 text-xl font-bold flex items-center justify-center hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg w-6 text-center">
                      {producto.cantidad}
                    </span>
                    <button 
                      onClick={() => cambiarCantidad(producto.id, 1)} 
                      className="w-7 h-7 rounded bg-gray-200 text-xl font-bold flex items-center justify-center hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => eliminarProducto(producto.id)} 
                    className="text-red-500 font-title font-semibold hover:text-red-700 transition flex items-center gap-1 text-sm"
                  >
                    <FaTrash className="text-xs" /> Eliminar
                  </button>
                  <div className="text-sm text-gray-600">
                    Subtotal: S/ {(producto.precio * producto.cantidad).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-bold">S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Envío:</span>
              <span className="font-bold">
                {envio === 0 ? "Gratis" : `S/ ${envio.toFixed(2)}`}
              </span>
            </div>
            {envio === 0 ? (
            <div className="mb-2 text-green-600 text-sm font-semibold">
              ¡Envío gratis por compras mayores a S/ 200!
            </div>
            ) : (
              <div className="mb-2 text-gray-500 text-sm">
                Agrega S/ {(200 - subtotal).toFixed(2)} más para envío gratis
              </div>
            )}
            <div className="flex justify-between items-center border-t pt-4 mt-2">
              <span className="font-title text-xl font-bold">Total:</span>
              <span className="font-title text-2xl font-bold text-[var(--color-morado)]">
                S/ {total.toFixed(2)}
              </span>
            </div>
            
            {/* Botón de proceder al pago con verificación de autenticación */}
            <button 
              className="w-full mt-6 py-3 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg font-bold shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition flex items-center justify-center gap-2"
              onClick={handleProceedToCheckout}
            >
              {isAuthenticated ? (
                "Proceder al Pago"
              ) : (
                <>
                  <FaLock className="text-sm" />
                  Iniciar Sesión para Pagar
                </>
              )}
            </button>
            
            {!isAuthenticated && (
              <p className="text-center text-sm text-gray-600 mt-2">
                Necesitas iniciar sesión para completar tu compra
              </p>
            )}
          </div>
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