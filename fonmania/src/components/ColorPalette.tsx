export default function ColorPalette() {
  const colors = [
    { name: "#7100E4", label: "Morado" },
    { name: "#FDBD24", label: "Amarillo" },
    { name: "#FFFFFF", label: "Blanco" },
    { name: "#000000", label: "Negro" },
  ];

  return (
    <section className="flex justify-center gap-12 py-12 bg-white">
      {colors.map((color) => (
        <div key={color.name} className="flex flex-col items-center gap-2">
          <div
            className="w-16 h-16 rounded-full shadow-md"
            style={{ backgroundColor: color.name }}
          />
          <span className="text-sm font-semibold">{color.label}</span>
          <span className="text-xs font-mono">{color.name}</span>
        </div>
      ))}
    </section>
  );
}
