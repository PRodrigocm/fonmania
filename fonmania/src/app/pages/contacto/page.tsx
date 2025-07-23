"use client";
import Header from "../../components/Header";
import { useState } from "react";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header />
      <main className="max-w-xl mx-auto py-8 px-4">
        <div className="mb-12 flex justify-center animate-fade-in-up duration-700">
          <div className="w-full max-w-3xl h-[180px] sm:h-[220px] bg-gradient-to-r from-[#FDBD24] to-[#7100E4] rounded-2xl shadow-2xl flex items-center justify-center">
            <Image src="/img/titulo_1.png" alt="Banner Contacto" width={420} height={120} className="object-contain drop-shadow-xl" />
          </div>
        </div>
        <h2 className="font-title text-3xl mb-6 text-[var(--color-morado)] animate-fade-in-up duration-700 delay-100">Contacto</h2>
        <p className="mb-4 animate-fade-in-up duration-700 delay-200">¿Tienes dudas o quieres comunicarte con nosotros? Llena el siguiente formulario o escríbenos a <a href="mailto:ventas@fonmania.com" className="text-[var(--color-morado)] underline">ventas@fonmania.com</a></p>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 animate-fade-in-up duration-700 delay-300" onSubmit={handleSubmit}>
          <label className="font-title">Nombre
            <input type="text" required className="block w-full border rounded p-2 mt-1" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
          </label>
          <label className="font-title">Email
            <input type="email" required className="block w-full border rounded p-2 mt-1" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </label>
          <label className="font-title">Mensaje
            <textarea required className="block w-full border rounded p-2 mt-1" rows={4} value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))} />
          </label>
          <button type="submit" className="mt-2 px-6 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition">Enviar</button>
          {enviado && <p className="text-green-600 font-bold mt-2 animate-fade-in-up duration-500">¡Mensaje enviado!</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
}

// Tailwind custom animation classes (agrega en tu CSS global si no existen):
// .animate-fade-in-up { @apply opacity-0 translate-y-8 animate-[fadeInUp_0.7s_ease-out_forwards]; }
// @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } } 