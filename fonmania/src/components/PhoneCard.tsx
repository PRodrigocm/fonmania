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
};

type PhoneCardProps = {
  phone: Phone;
};

export default function PhoneCard({ phone }: PhoneCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-96 perspective"
      onClick={() => setFlipped(!flipped)}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d origin-center ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden border rounded-lg p-0 flex flex-col items-center shadow overflow-hidden relative">
          <Image
            src={phone.image}
            alt={phone.name}
            fill
            sizes="256px"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-white text-2xl font-nunito font-bold text-center px-2 drop-shadow-lg">
              {phone.name}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-white border rounded-lg p-4 flex flex-col items-center shadow rotate-y-180">
          <h3 className="text-xl font-nunito font-bold mb-2">{phone.name}</h3>
          <p className="text-lg mb-1 font-semibold text-[#7100E4]">${phone.price}</p>
          {phone.originalPrice && (
            <p className="text-sm mb-2 line-through text-gray-500">${phone.originalPrice}</p>
          )}
          {phone.discount && (
            <p className="text-sm mb-2 text-yellow-500 font-semibold">
              {phone.discount}% OFF
            </p>
          )}
          <div className="text-sm mb-4 text-center">
            <p>Storage: {phone.specs.storage}</p>
            <p>RAM: {phone.specs.ram}</p>
            <p>Camera: {phone.specs.camera}</p>
            {phone.specs.battery && <p>Battery: {phone.specs.battery}</p>}
            {phone.specs.screen && <p>Screen: {phone.specs.screen}</p>}
          </div>
          <button
            className="bg-[#FDBD24] text-black font-raleway font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition-colors"
            type="button"
          >
            Comprar
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
