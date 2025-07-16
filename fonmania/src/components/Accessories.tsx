export default function Accessories() {
  const accessories = [
    { id: 1, name: "Cargador Rápido", price: "$29.99" },
    { id: 2, name: "Audífonos Inalámbricos", price: "$59.99" },
    { id: 3, name: "Protector de Pantalla", price: "$19.99" },
    { id: 4, name: "Funda Protectora", price: "$24.99" },
  ];

  return (
    <section className="mb-12 px-6">
      <h2 className="text-3xl font-raleway font-semibold mb-6 text-center text-[#7100E4]">
        Accesorios Populares
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="w-48 p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
              Imagen
            </div>
            <h3 className="font-nunito font-semibold mb-2">{item.name}</h3>
            <p className="font-bold text-lg">{item.price}</p>
            <button className="mt-4 bg-[#FDBD24] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
