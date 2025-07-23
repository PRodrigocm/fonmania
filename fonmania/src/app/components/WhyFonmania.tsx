import { FaBolt, FaShieldAlt, FaTruck } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-[var(--color-morado)]" size={40} />, // Entrega rápida
    bg: "bg-[var(--color-amarillo)]",
    title: "Entrega Rápida",
    desc: "Recibe tu pedido en 24-48 horas",
  },
  {
    icon: <FaShieldAlt className="text-white" size={40} />, // Garantía
    bg: "bg-[var(--color-morado)]",
    title: "Garantía Total",
    desc: "12 meses de garantía en todos los productos",
  },
  {
    icon: <FaTruck className="text-[var(--color-morado)]" size={40} />, // Envío gratis
    bg: "bg-[var(--color-amarillo)]",
    title: "Envío Gratis",
    desc: "En compras mayores a $100",
  },
];

export default function WhyFonomania() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#f9f6ff] to-white">
      <h2 className="text-center font-title text-4xl sm:text-5xl text-[var(--color-morado)] font-bold mb-14">¿Por qué elegir Fonmania?</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-2xl flex flex-col items-center p-12 transition hover:shadow-2xl gap-6">
            <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-4 text-3xl ${f.bg}`}>
              {f.icon}
            </div>
            <h3 className="font-title text-2xl font-bold mb-2 text-[var(--color-morado)] text-center">{f.title}</h3>
            <p className="text-gray-700 text-center text-lg">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 