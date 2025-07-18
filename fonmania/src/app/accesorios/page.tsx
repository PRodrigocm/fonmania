"use client";
import Accessories from '../../components/Accessories';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselBanner from './CarouselBanner';

export default function AccesoriosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center bg-white">
        <div className="h-28 w-full" />
        <CarouselBanner />
        {/* Accesorios populares con fondo blanco */}
        <div className="w-full max-w-7xl px-4">
          <Accessories />
        </div>
      </main>
      <Footer />
    </>
  );
} 