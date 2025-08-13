"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface FavoritesContextType {
  favorites: number[];
  addToFavorites: (productId: number) => Promise<void>;
  removeFromFavorites: (productId: number) => Promise<void>;
  isFavorite: (productId: number) => boolean;
  getFavoritesCount: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          return;
        }

        const response = await fetch('/api/favoritos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setFavorites(data.map((fav: { productoID: number }) => fav.productoID));
        } else if (response.status === 401) {
          // Token inválido, limpiar localStorage
          localStorage.removeItem('userToken');
          localStorage.removeItem('userData');
        }
      } catch (error) {
        console.error('Error cargando favoritos:', error);
      }
    };

    loadFavorites();
  }, []);

  const addToFavorites = async (productId: number | string) => {
    try {
      console.log('addToFavorites llamado con productId:', productId);
      console.log('Tipo de productId:', typeof productId);
      
      // Convertir a número si es string
      const numericId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
      
      if (!numericId || numericId <= 0 || isNaN(numericId)) {
        console.error('ID de producto inválido:', productId, 'convertido a:', numericId);
        return;
      }

      const token = localStorage.getItem('userToken');
      if (!token) {
        // Redirigir al login si no está autenticado
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
        return;
      }

      console.log('Enviando a API favoritos:', { productoID: numericId });

      const response = await fetch('/api/favoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productoID: numericId })
      });

      if (response.ok) {
        setFavorites(prev => [...prev, numericId]);
      } else if (response.status === 401) {
        // Token inválido, redirigir al login
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
      } else {
        const errorData = await response.json();
        console.error('Error agregando a favoritos:', errorData.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error agregando a favoritos:', error);
    }
  };

  const removeFromFavorites = async (productId: number) => {
    try {
      const token = localStorage.getItem('userToken');
      if (!token) return;

      const response = await fetch(`/api/favoritos/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setFavorites(prev => prev.filter(id => id !== productId));
      } else if (response.status === 401) {
        // Token inválido, limpiar localStorage
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
      } else {
        const errorData = await response.json();
        console.error('Error removiendo de favoritos:', errorData.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error removiendo de favoritos:', error);
    }
  };

  const isFavorite = (productId: number) => {
    return favorites.includes(productId);
  };

  const getFavoritesCount = () => {
    return favorites.length;
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      removeFromFavorites, 
      isFavorite, 
      getFavoritesCount 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites debe usarse dentro de <FavoritesProvider>");
  return ctx;
} 