"use client";

import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import ContactBanner from "../components/ContactBanner";
import ContactHighlights from "../components/ContactHighlights";
import { FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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
      <main className="max-w-5xl mx-auto py-8 px-4">
        <ContactBanner />
        <ContactHighlights />

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Info de contacto y mapa */}
          <div className="flex-1 flex flex-col gap-6 bg-white rounded-2xl shadow-2xl p-6 animate-fade-in">
            <div className="flex items-center gap-3 text-[var(--color-morado)] text-xl font-title mb-2">
              <FaEnvelope />
              <span>Correo:</span>
            </div>
            <a href="mailto:ventas@fonmania.com" className="text-[var(--color-morado)] underline mb-4 transition hover:text-[var(--color-amarillo)]">ventas@fonmania.com</a>
            <div className="flex items-center gap-3 text-[var(--color-morado)] text-xl font-title mb-2">
              <FaWhatsapp />
              <span>WhatsApp:</span>
            </div>
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener" className="text-[var(--color-morado)] underline mb-4 transition hover:text-[var(--color-amarillo)]">+51 999 999 999</a>
            <div className="flex items-center gap-3 text-[var(--color-morado)] text-xl font-title mb-2">
              <FaClock />
              <span>Horario:</span>
            </div>
            <span className="mb-4">Lunes a Sábado de 09:00 am a 18:00 pm o 20:00 pm</span>
            <div className="flex items-center gap-3 text-[var(--color-morado)] text-xl font-title mb-2">
              <FaMapMarkerAlt />
              <span>Ubicación:</span>
            </div>
            <a href="https://maps.app.goo.gl/xtPjwWUAoBwjFDeD6" target="_blank" rel="noopener" className="text-[var(--color-morado)] underline mb-4 transition hover:text-[var(--color-amarillo)]">Ver en Google Maps</a>
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.863643147426!2d-71.515720883965!3d-16.401724037175896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424beb4d970995%3A0x92ebe32becedc494!2sFONTEC!5e0!3m2!1ses!2spe!4v1753301174051!5m2!1ses!2spe"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Fonmania"
                className="transition hover:scale-105"
              ></iframe>
            </div>
          </div>
          {/* Formulario */}
          <div className="flex-1 flex flex-col justify-center">
            <form className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-4 animate-fade-in" onSubmit={handleSubmit}>
              <label htmlFor="nombre" className="font-title">Nombre</label>
              <input id="nombre" type="text" autoComplete="off" required suppressHydrationWarning className="block w-full border-2 border-[var(--color-morado)/30] rounded p-2 mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
              <label htmlFor="email" className="font-title">Email</label>
              <input id="email" type="email" autoComplete="off" required suppressHydrationWarning className="block w-full border-2 border-[var(--color-morado)/30] rounded p-2 mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              <label htmlFor="mensaje" className="font-title">Mensaje</label>
              <textarea id="mensaje" required suppressHydrationWarning className="block w-full border-2 border-[var(--color-morado)/30] rounded p-2 mt-1 focus:ring-2 focus:ring-[var(--color-morado)] transition" rows={4} value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))} />
              <button type="submit" className="mt-2 px-6 py-2 rounded-xl bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg shadow-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition">Enviar</button>
              {enviado && <p className="text-green-600 font-bold mt-2 animate-fade-in">¡Mensaje enviado!</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 