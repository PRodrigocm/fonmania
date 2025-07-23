"use client";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import type { Producto } from "../types";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { FaFilter, FaSearch, FaMoneyBillWave, FaMobileAlt, FaPalette, FaSync } from "react-icons/fa";
import ProductModal from "../components/ProductModal";
import { useCart } from "../components/CartContext";

export default function Celulares() {
  const { addToCart, getItemCount } = useCart();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtro, setFiltro] = useState({ nombre: "", min: "", max: "", marca: "", color: "" });
  const [marcas, setMarcas] = useState<string[]>([]);
  const [colores, setColores] = useState<string[]>([]);
  const [modal, setModal] = useState<Producto | null>(null);

  useEffect(() => {
    fetch("/api/celulares")
      .then(res => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setProductos(arr);
        setMarcas([...new Set(arr.map((p: Producto) => p.marca).filter(Boolean))] as string[]);
        setColores([...new Set(arr.map((p: Producto) => p.color).filter(Boolean))] as string[]);
      })
      .catch(() => setProductos([]));
  }, []);

  const limpiarFiltros = () => setFiltro({ nombre: "", min: "", max: "", marca: "", color: "" });

  const productosFiltrados = productos.filter((p) => {
    const nombreOk = p.nombre.toLowerCase().includes(filtro.nombre.toLowerCase());
    const minOk = filtro.min === "" || p.precio >= Number(filtro.min);
    const maxOk = filtro.max === "" || p.precio <= Number(filtro.max);
    const marcaOk = !filtro.marca || p.marca === filtro.marca;
    const colorOk = !filtro.color || p.color === filtro.color;
    return nombreOk && minOk && maxOk && marcaOk && colorOk;
  });

  const handleAddToCart = (producto: Producto) => {
    addToCart(producto);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header carritoCount={getItemCount()} />
      <main className="w-full flex-1">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 h-full min-h-[60vh]">
          {/* Filtros a la izquierda tipo nav bar moderno */}
          <aside className="md:w-72 md:h-full md:min-h-[600px] md:sticky md:top-24 md:left-0 md:rounded-none md:shadow-2xl md:border-r bg-white/70 backdrop-blur-lg rounded-xl md:rounded-none shadow p-8 flex flex-col gap-6 mb-4 md:mb-0 md:mr-0 md:ml-0 md:self-stretch z-10 border border-[var(--color-morado)/20]">
            <div className="flex items-center gap-3 mb-2">
              <FaFilter className="text-[var(--color-morado)] text-2xl" />
              <h3 className="font-title text-2xl text-[var(--color-morado)]">Filtrar</h3>
            </div>
            <div className="flex items-center gap-2">
              <FaSearch className="text-[var(--color-morado)]" />
              <label className="font-title w-full">Nombre
                <input type="text" className="border border-[var(--color-morado)/30] rounded p-2 w-full mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" value={filtro.nombre} onChange={e => setFiltro(f => ({ ...f, nombre: e.target.value }))} placeholder="Buscar por nombre" />
              </label>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-[var(--color-morado)]" />
              <label className="font-title w-full">Precio mínimo
                <div className="relative">
                  <input type="number" className="border border-[var(--color-morado)/30] rounded p-2 w-full mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition pr-10" value={filtro.min} onChange={e => setFiltro(f => ({ ...f, min: e.target.value }))} placeholder="Mínimo" min={0} />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">S/</span>
                </div>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-[var(--color-morado)]" />
              <label className="font-title w-full">Precio máximo
                <div className="relative">
                  <input type="number" className="border border-[var(--color-morado)/30] rounded p-2 w-full mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition pr-10" value={filtro.max} onChange={e => setFiltro(f => ({ ...f, max: e.target.value }))} placeholder="Máximo" min={0} />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">S/</span>
                </div>
              </label>
            </div>
            <hr className="my-2 border-[var(--color-morado)/20]" />
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-[var(--color-morado)]" />
              <label className="font-title w-full">Marca
                <select className="border border-[var(--color-morado)/30] rounded p-2 w-full mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" value={filtro.marca} onChange={e => setFiltro(f => ({ ...f, marca: e.target.value }))}>
                  <option value="">Todas</option>
                  {marcas.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <FaPalette className="text-[var(--color-morado)]" />
              <label className="font-title w-full">Color
                <select className="border border-[var(--color-morado)/30] rounded p-2 w-full mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" value={filtro.color} onChange={e => setFiltro(f => ({ ...f, color: e.target.value }))}>
                  <option value="">Todos</option>
                  {colores.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </label>
            </div>
            <button className="mt-4 px-4 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition flex items-center gap-2 self-end" onClick={limpiarFiltros}>
              <FaSync /> Limpiar filtros
            </button>
          </aside>
          {/* Grid de productos */}
          <section className="flex-1 w-full">
            <ProductList productos={productosFiltrados} onAdd={handleAddToCart} onCardClick={setModal} />
            <ProductModal open={!!modal} onClose={() => setModal(null)} producto={modal ?? undefined} onAddToCart={() => modal && handleAddToCart(modal)} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 