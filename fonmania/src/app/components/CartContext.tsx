"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import type { Producto } from "../types";

interface ItemCarrito extends Producto {
  cantidad: number;
}

interface CartContextType {
  items: ItemCarrito[];
  addToCart: (producto: Producto) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getSubtotal: () => number;
  getShippingCost: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([]);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem('fonmania-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('fonmania-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (producto: Producto) => {
    setItems((prev) => {
      const found = prev.find((item) => item.id === producto.id);
      if (found) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const getSubtotal = () => {
    return items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  };

  const getShippingCost = () => {
    const subtotal = getSubtotal();
    return subtotal > 100 ? 0 : 10;
  };

  const getTotal = () => {
    return getSubtotal() + getShippingCost();
  };

  const getItemCount = () => {
    return items.reduce((acc, item) => acc + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart, 
      getTotal,
      getSubtotal,
      getShippingCost,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
} 