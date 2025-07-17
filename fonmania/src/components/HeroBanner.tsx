import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import cat1 from "../../img/cat_1_g1.png";
import cat2 from "../../img/cat_2_g1.png";
import cat3 from "../../img/cat_3_g1.png";

const banners = [
  {
    img: cat1,
    bg: "#FDBD24", // Amarillo
    title: "Bienvenido a Fonmania",
    desc: "La mejor tienda para comprar celulares y accesorios con las mejores promociones y garantía.",
    text: "text-[#7100E4]", // Morado
    button: "bg-[#7100E4] text-white hover:bg-[#5A00B2]",
    imgClass: ""
  },
  {
    img: cat2,
    bg: "#fff", // Blanco
    title: "¡Nuevos Accesorios!",
    desc: "Descubre la nueva colección de accesorios para tu celular con descuentos exclusivos.",
    text: "text-[#7100E4]", // Morado
    button: "bg-[#7100E4] text-white hover:bg-[#5A00B2]",
    imgClass: ""
  },
  {
    img: cat3,
    bg: "#000", // Negro
    title: "Promociones Especiales",
    desc: "Aprovecha nuestras ofertas limitadas en celulares de última generación.",
    text: "text-white",
    button: "bg-white text-[#7100E4] hover:bg-gray-200",
    imgClass: "scale-x-[-1]"
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Carrusel automático con fade
  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50);
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => setIndex((prev) => (prev + 1) % banners.length), 300);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimeout);
    };
  }, [index]);

  // Fade in/out al hacer scroll usando Intersection Observer
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const banner = banners[index];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-screen flex items-center justify-center transition-colors duration-700 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      style={{ background: banner.bg }}
    >
      <div className={`flex flex-row items-center justify-center w-full max-w-4xl mx-auto gap-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {/* Imagen a la izquierda */}
        <div className="flex-1 flex justify-center min-w-0">
          <Image 
            src={banner.img} 
            alt="Gato Fonmania" 
            className={`w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] h-auto object-contain ${banner.imgClass}`}
          />
        </div>
        {/* Texto a la derecha */}
        <div className={`flex-1 text-center md:text-left min-w-0 ${banner.text}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-nunito font-bold mb-4 transition-all duration-700 ${banner.text}`}>
            {banner.title}
          </h1>
          <p className={`text-base sm:text-lg max-w-xl mb-8 font-raleway mx-auto md:mx-0 transition-all duration-700 ${banner.text}`}>
            {banner.desc}
          </p>
          <button className={`font-semibold px-8 py-3 rounded transition-colors duration-300 ${banner.button}`}>
            Explorar Productos
          </button>
          {/* Puntos de navegación */}
          <div className="flex gap-2 mt-8 justify-center md:justify-start">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full border-2 border-gray-400 transition-all duration-300 ${index === i ? 'bg-gray-400' : 'bg-transparent'}`}
                aria-label={`Ir al banner ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
