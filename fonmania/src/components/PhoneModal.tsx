"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

type Phone = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    storage: string;
    ram: string;
    camera: string;
    battery?: string;
    screen?: string;
  };
  featured?: boolean;
  discount?: number;
  rating?: number;
  inStock: boolean;
};

type PhoneModalProps = {
  phone: Phone | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function PhoneModal({ phone, isOpen, onClose }: PhoneModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !phone) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{phone.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src={phone.image}
              alt={phone.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#7100E4]">${phone.price}</span>
              {phone.originalPrice && (
                <span className="text-xl line-through text-gray-500">${phone.originalPrice}</span>
              )}
              {phone.discount && (
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
                  {phone.discount}% OFF
                </span>
              )}
            </div>
          </div>

          {/* Specs */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Especificaciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Almacenamiento</p>
                <p className="text-gray-600">{phone.specs.storage}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">RAM</p>
                <p className="text-gray-600">{phone.specs.ram}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Cámara</p>
                <p className="text-gray-600">{phone.specs.camera}</p>
              </div>
              {phone.specs.battery && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Batería</p>
                  <p className="text-gray-600">{phone.specs.battery}</p>
                </div>
              )}
              {phone.specs.screen && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Pantalla</p>
                  <p className="text-gray-600">{phone.specs.screen}</p>
                </div>
              )}
            </div>
          </div>

          {/* Rating */}
          {phone.rating && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Valoración</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-lg font-semibold">{phone.rating}/5</span>
              </div>
            </div>
          )}

          {/* Stock */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full font-semibold ${
              phone.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {phone.inStock ? 'En Stock' : 'Agotado'}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-[#7100E4] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5A00B2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!phone.inStock}
            >
              Comprar Ahora
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 