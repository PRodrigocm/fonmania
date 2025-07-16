export default function HeroBanner() {
  return (
    <section className="bg-[#7100E4] text-white py-20 px-6 text-center rounded-lg shadow-lg mb-12">
      <h1 className="text-5xl font-nunito font-bold mb-4">
        Bienvenido a Fonmania
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8 font-raleway">
        La mejor tienda para comprar celulares y accesorios con las mejores promociones y garantía.
      </p>
      <button className="bg-[#FDBD24] text-black font-semibold px-8 py-3 rounded hover:bg-yellow-400 transition-colors">
        Explorar Productos
      </button>
    </section>
  );
}
