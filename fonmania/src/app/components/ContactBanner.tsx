import Image from "next/image";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="w-full max-w-none my-10 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#A259E6] via-[#7100E4] to-[#3D0066] rounded-3xl shadow-2xl overflow-hidden min-h-[320px]">
      {/* Texto a la izquierda */}
      <div className="flex-1 flex flex-col items-center md:items-start px-4 py-8 sm:px-8 md:p-16 text-[var(--color-amarillo)]">
        <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left mb-4 drop-shadow-xl">
          ¡Te esperamos en Fonmania!
        </h2>
        <p className="font-raleway text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md sm:max-w-xl md:max-w-2xl text-center md:text-left mb-6 drop-shadow-lg">
          Visítanos y vive la mejor experiencia en tecnología, promociones y atención personalizada.
        </p>
        <Link href="/contacto">
          <button className="w-full sm:w-auto px-8 py-3 sm:px-12 sm:py-4 rounded-xl bg-[var(--color-amarillo)] text-[var(--color-morado)] font-title text-lg sm:text-2xl font-bold shadow-2xl hover:bg-white hover:scale-105 hover:text-[var(--color-morado)] transition-all duration-300">
            Ir a Contacto
          </button>
        </Link>
      </div>
      {/* Imagen a la derecha */}
      <div className="flex-1 flex justify-center items-center p-6 sm:p-10 md:p-12">
        <Image
          src="/img/cat_2.png"
          alt="Te esperamos en Fonmania"
          width={220}
          height={220}
          className="object-contain drop-shadow-2xl w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] lg:w-[340px] lg:h-[340px]"
        />
      </div>
    </section>
  );
} 