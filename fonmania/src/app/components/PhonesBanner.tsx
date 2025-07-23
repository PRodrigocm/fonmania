import Image from "next/image";

export default function PhonesBanner() {
  return (
    <section className="w-full my-12 flex flex-col md:flex-row items-center justify-center bg-[var(--color-amarillo)] rounded-xl shadow-lg overflow-hidden min-h-[220px]">
      {/* Imagen a la izquierda */}
      <div className="flex-1 flex justify-center items-center p-6">
        <Image
          src="/img/cat_1.png"
          alt="Teléfonos Fonmania"
          width={180}
          height={180}
          className="object-contain drop-shadow-xl"
        />
      </div>
      {/* Texto a la derecha */}
      <div className="flex-1 flex flex-col items-center md:items-start p-8 text-[#7100E4]">
        <h2 className="font-title text-4xl md:text-5xl font-bold text-center md:text-left">
          ¡Promociones en Celulares!
        </h2>
      </div>
    </section>
  );
} 