"use client";

import { FaHeadset, FaTruck, FaShieldAlt } from "react-icons/fa";

export default function ContactHighlights() {
  const items = [
    {
      icon: <FaHeadset className="text-4xl text-[var(--color-amarillo)]" />,
      title: "Soporte 24/7",
      desc: "Nuestro equipo está disponible para ayudarte en cualquier momento."
    },
    {
      icon: <FaTruck className="text-4xl text-[var(--color-amarillo)]" />,
      title: "Envíos a todo Perú",
      desc: "Recibe tus productos rápidamente en cualquier región del país."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[var(--color-amarillo)]" />,
      title: "Garantía 12 meses",
      desc: "Todos nuestros productos cuentan con garantía de un año."
    },
  ];

  return (
    <section className="w-full my-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center bg-[var(--color-morado)]/95 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform"
        >
          {item.icon}
          <h3 className="font-title text-xl mt-4 mb-2">{item.title}</h3>
          <p className="text-sm opacity-90 max-w-xs">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
