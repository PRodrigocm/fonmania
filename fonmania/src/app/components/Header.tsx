import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header({ carritoCount = 0 }: { carritoCount?: number }) {
  const [open, setOpen] = useState(false);
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
        <Link href="/carrito" className="ml-4 relative">
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
