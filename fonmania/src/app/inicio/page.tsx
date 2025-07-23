"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import WhyFonomania from "../components/WhyFonmania";
import PhoneCarousel from "../components/PhoneCarousel";
import AccessoriesCarousel from "../components/AccessoriesCarousel";
import { useCart } from "../components/CartContext";

export default function Inicio() {
  const { getItemCount, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[var(--color-blanco)] text-[var(--color-negro)]">
      <Header carritoCount={getItemCount()} />
      <main className="w-full py-8 px-2 sm:px-6 md:px-12">
        <HeroBanner />
        <WhyFonomania />
        <PhoneCarousel onAddToCart={addToCart} />
        <AccessoriesCarousel onAddToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
} 