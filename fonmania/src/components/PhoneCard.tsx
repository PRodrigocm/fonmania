"use client";

import { useState } from "react";
import Image from "next/image";

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

type PhoneCardProps = {
  phone: Phone;
  onCardClick?: (phone: Phone) => void;
};

export default function PhoneCard({ phone, onCardClick }: PhoneCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(phone);
    } else {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      className="w-full max-w-sm h-[35rem] relative"
      style={{ 
        cursor: "pointer",
        perspective: "1000px"
      }}
      onClick={handleCardClick}
    >
      <div
        className={`w-full h-full transition-transform duration-700 ease-in-out ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ 
          transformStyle: "preserve-3d",
          position: "relative"
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute w-full h-full rounded-2xl p-0 flex flex-col items-center shadow-lg overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <Image
            src={phone.image}
            alt={phone.name}
            fill
            sizes="400px"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-white text-3xl font-nunito font-bold text-center px-4 drop-shadow-2xl">
              {phone.name}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute w-full h-full bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-2xl font-nunito font-bold mb-4">{phone.name}</h3>
          <p className="text-2xl mb-2 font-semibold text-[#7100E4]">${phone.price}</p>
          {phone.originalPrice && (
            <p className="text-lg mb-2 line-through text-gray-500">${phone.originalPrice}</p>
          )}
          {phone.discount && (
            <p className="text-lg mb-2 text-yellow-500 font-semibold">
              {phone.discount}% OFF
            </p>
          )}
          <div className="text-base mb-6 text-center">
            <p>Almacenamiento: {phone.specs.storage}</p>
            <p>RAM: {phone.specs.ram}</p>
            <p>Camara: {phone.specs.camera}</p>
            {phone.specs.battery && <p>Bateria: {phone.specs.battery}</p>}
            {phone.specs.screen && <p>Pantalla: {phone.specs.screen}</p>}
          </div>
          <button
            className="bg-[#FDBD24] text-black font-raleway font-semibold px-8 py-3 rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-md"
            type="button"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
