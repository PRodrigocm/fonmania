import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes, FaUser, FaSignOutAlt, FaHeart, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useFavorites } from "./FavoritesContext";

interface User {
  nombre: string;
  correo: string;
}

export default function Header({ carritoCount = 0 }: { carritoCount?: number }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { getFavoritesCount } = useFavorites();
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (user) {
      setFavoritesCount(getFavoritesCount());
    }
  }, [user, getFavoritesCount]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    setUser(null);
    setFavoritesCount(0);
    window.location.href = '/inicio';
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-[var(--color-morado)] relative z-50 sticky top-0 shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4">
        <Link href="/inicio">
          <Image src="/img/titulo_2.png" alt="Fonmania Logo" width={180} height={60} priority style={{ width: 'auto', height: 'auto' }} />
        </Link>
      </div>
      {/* Menú desktop */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link href="/inicio" className="text-[var(--color-amarillo)] font-title text-lg hover:underline">Inicio</Link>
        <Link href="/celulares" className="text-[var(--color-amarillo)] font-title text-lg hover:underline">Celulares</Link>
        <Link href="/accesorios" className="text-[var(--color-amarillo)] font-title text-lg hover:underline">Accesorios</Link>
        <Link href="/contacto" className="text-[var(--color-amarillo)] font-title text-lg hover:underline">Contacto</Link>
        
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-amarillo)] font-title text-sm">
              ¡Hola, {user.nombre}!
            </span>
            <Link 
              href="/mi-cuenta" 
              className="text-[var(--color-amarillo)] hover:text-white transition flex items-center gap-2"
            >
              <FaUserCircle className="text-lg" />
              <span className="font-title">Mi Cuenta</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-[var(--color-amarillo)] hover:text-white transition flex items-center gap-2"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-title">Cerrar</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-[var(--color-amarillo)] font-title text-lg hover:underline flex items-center gap-2">
              <FaUser className="text-lg" />
              Iniciar
            </Link>
            <Link href="/register" className="text-[var(--color-amarillo)] font-title text-lg hover:underline">
              Registrarse
            </Link>
          </div>
        )}
        
        {/* Favoritos - solo visible si el usuario está logueado */}
        {user && (
          <Link href="/favoritos" className="relative">
            <FaHeart className="text-white text-2xl" />
            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-amarillo)] text-[var(--color-morado)] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs border-2 border-[var(--color-morado)]">
                {favoritesCount}
              </span>
            )}
          </Link>
        )}
        
        <Link href="/carrito" className="relative">
          <FaShoppingCart className="text-white text-3xl" />
          {carritoCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--color-amarillo)] text-[var(--color-morado)] font-bold rounded-full w-7 h-7 flex items-center justify-center text-base border-2 border-[var(--color-morado)]">
              {carritoCount}
            </span>
          )}
        </Link>
      </nav>
      {/* Menú hamburguesa móvil */}
      <button className="md:hidden text-[var(--color-amarillo)] text-3xl ml-2" onClick={() => setOpen(true)} aria-label="Abrir menú">
        <FaBars />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div className="w-64 bg-[var(--color-morado)] h-full flex flex-col p-6 gap-6 relative animate-fade-in">
            <button className="absolute top-4 right-4 text-[var(--color-amarillo)] text-2xl" onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <FaTimes />
            </button>
            <Link href="/inicio" className="text-[var(--color-amarillo)] font-title text-xl hover:underline" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/celulares" className="text-[var(--color-amarillo)] font-title text-xl hover:underline" onClick={() => setOpen(false)}>Celulares</Link>
            <Link href="/accesorios" className="text-[var(--color-amarillo)] font-title text-xl hover:underline" onClick={() => setOpen(false)}>Accesorios</Link>
            <Link href="/contacto" className="text-[var(--color-amarillo)] font-title text-xl hover:underline" onClick={() => setOpen(false)}>Contacto</Link>
            
            {user ? (
              <>
                <div className="border-t border-[var(--color-amarillo)/30] pt-4 mt-4">
                  <span className="text-[var(--color-amarillo)] font-title text-lg">
                    ¡Hola, {user.nombre}!
                  </span>
                </div>
                <Link href="/mi-cuenta" className="text-[var(--color-amarillo)] font-title text-xl hover:underline flex items-center gap-2" onClick={() => setOpen(false)}>
                  <FaUserCircle className="text-lg" />
                  Mi Cuenta
                </Link>
                <Link href="/favoritos" className="text-[var(--color-amarillo)] font-title text-xl hover:underline flex items-center gap-2" onClick={() => setOpen(false)}>
                  <FaHeart className="text-lg" />
                  Favoritos
                  {favoritesCount > 0 && (
                    <span className="bg-[var(--color-amarillo)] text-[var(--color-morado)] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {favoritesCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="text-[var(--color-amarillo)] hover:text-white transition flex items-center gap-2 font-title text-xl"
                >
                  <FaSignOutAlt className="text-lg" />
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-[var(--color-amarillo)] font-title text-xl hover:underline flex items-center gap-2" onClick={() => setOpen(false)}>
                  <FaUser className="text-lg" />
                  Iniciar Sesión
                </Link>
                <Link href="/register" className="text-[var(--color-amarillo)] font-title text-xl hover:underline" onClick={() => setOpen(false)}>
                  Registrarse
                </Link>
              </>
            )}
            
            <Link href="/carrito" className="relative mt-4" onClick={() => setOpen(false)}>
              <FaShoppingCart className="text-white text-3xl" />
              {carritoCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-amarillo)] text-[var(--color-morado)] font-bold rounded-full w-7 h-7 flex items-center justify-center text-base border-2 border-[var(--color-morado)]">
                  {carritoCount}
                </span>
              )}
            </Link>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
