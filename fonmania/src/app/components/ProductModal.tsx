"use client";
import Image from "next/image";
import type { Producto } from "../types";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddToCart?: () => void;
  producto?: Producto;
}

const getImageSrc = (item: Producto | undefined | null) => {
  if (!item) return "";
  const src = item.imagen;
  if (typeof src === "string" && src.trim() !== "") {
    return src;
  }
  return "";
};

export default function ProductModal({ open, onClose, onAddToCart, producto }: ProductModalProps) {
  if (!open || !producto) return null;
  const p = producto;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-10 max-w-4xl md:max-w-5xl w-full relative flex flex-col md:flex-row items-center md:items-stretch animate-fade-in mx-auto">
        {/* Imagen principal */}
        <div className="flex flex-col justify-center items-center md:items-center md:justify-center md:w-1/2 p-4">
          {getImageSrc(p) && (
            <Image src={getImageSrc(p)!} alt={p.nombre || "Imagen de producto"} width={420} height={520} className="object-contain rounded-xl mx-auto shadow-lg" priority style={{ width: "100%", height: "auto", maxWidth: "420px", maxHeight: "520px" }} />
          )}
        </div>
        {/* Detalle */}
        <div className="flex-1 flex flex-col gap-4 md:pl-8 mt-6 md:mt-0 justify-center">
          <button
            className="absolute top-2 right-2 text-3xl text-[var(--color-morado)] hover:text-[var(--color-amarillo)]"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
          {/* Precio destacado */}
          <div className="flex flex-col gap-1 mb-2 items-center md:items-start">
            <span className="text-3xl font-bold text-[var(--color-morado)]">S/ {p.precioPromocion || p.precioDescuento || p.precio}</span>
            {p.precioPromocion || p.precioDescuento ? (
              <span className="text-lg line-through text-gray-400">S/ {p.precio}</span>
            ) : null}
          </div>
          {p.marca && <span className="uppercase text-xs text-gray-500 font-bold text-center md:text-left">{p.marca}</span>}
          <h3 className="font-title text-2xl md:text-3xl mb-2 text-center md:text-left">{p.nombre}</h3>
          {p.descripcion && <p className="text-gray-700 mb-2 text-center md:text-left">{p.descripcion}</p>}
          {/* Detalles celulares */}
          {(p.color || p.modalidad || p.linea || p.plan || p.planPromo || p.financiamiento) && (
            <ul className="text-sm text-gray-700 mb-2 flex flex-col gap-1 text-center md:text-left">
              {p.color && <li><b>Color:</b> {p.color}</li>}
              {p.modalidad && <li><b>Modalidad:</b> {p.modalidad}</li>}
              {p.linea && <li><b>Línea:</b> {p.linea}</li>}
              {p.plan && <li><b>Plan:</b> {p.plan} {p.planPromo && <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">{p.planPromo}</span>}</li>}
              {p.financiamiento && <li><b>Financiamiento:</b> {p.financiamiento}</li>}
            </ul>
          )}
          {/* Detalles accesorios solo si hay datos */}
          {p.categoria === 'accesorio' && (p.compatibilidad || p.dimensiones || p.peso || p.colores) && (
            <div className="mt-2 p-4 bg-gray-50 rounded-xl border text-gray-700 text-sm flex flex-col gap-2">
              <span className="font-bold block mb-1">Detalles del accesorio:</span>
              <ul className="flex flex-col gap-1">
                {p.compatibilidad && <li><b>Compatibilidad:</b> {p.compatibilidad}</li>}
                {p.dimensiones && <li><b>Dimensiones:</b> {p.dimensiones}</li>}
                {p.peso && <li><b>Peso:</b> {p.peso}</li>}
                {p.colores && <li><b>Colores:</b> {p.colores}</li>}
              </ul>
            </div>
          )}
          {/* Detalles celulares extendidos solo para celulares */}
          {(p.marca || p.modelo || p.pantalla || p.bateria || p.almacenamiento || p.ram || p.camara || p.puertoCarga) && (
            <div className="mt-2 p-4 bg-gray-50 rounded-xl border text-gray-700 text-sm flex flex-col gap-2">
              <span className="font-bold block mb-1">Detalles del producto:</span>
              <ul className="flex flex-col gap-1">
                <li><b>Marca:</b> {p.marca || 'No especificado'}</li>
                <li><b>Modelo:</b> {p.modelo || 'No especificado'}</li>
                <li><b>Pantalla:</b> {p.pantalla || 'No especificado'}</li>
                <li><b>Batería:</b> {p.bateria || 'No especificado'}</li>
                <li><b>Almacenamiento:</b> {p.almacenamiento || 'No especificado'}</li>
                <li><b>RAM:</b> {p.ram || 'No especificado'}</li>
                <li><b>Cámara:</b> {p.camara || 'No especificado'}</li>
                <li><b>Puerto de carga:</b> {p.puertoCarga || 'No especificado'}</li>
              </ul>
            </div>
          )}
          {p.requiereNumero && (
            <div className="mb-2">
              <label className="block text-sm font-bold mb-1">Ingresa el número a portar</label>
              <input
                type="text"
                placeholder="Número de celular"
                className="w-full border rounded p-2"
              />
            </div>
          )}
          <button
            className="w-full py-3 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-xl hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition mt-2 shadow-lg"
            onClick={() => { if (onAddToCart) onAddToCart(); onClose(); }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
} 