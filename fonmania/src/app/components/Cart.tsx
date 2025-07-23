interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

interface ItemCarrito extends Producto {
  cantidad: number;
}

interface CartProps {
  items: ItemCarrito[];
  onRemove: (id: number) => void;
  onPay: () => void;
  total: number;
}

export default function Cart({ items, onRemove, onPay, total }: CartProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.nombre} x{item.cantidad} <span className="text-[var(--color-morado)]">S/ {item.precio * item.cantidad}</span>
            </span>
            <button
              className="ml-4 px-2 py-1 rounded bg-[var(--color-amarillo)] text-[var(--color-morado)] font-title hover:bg-[var(--color-morado)] hover:text-[var(--color-amarillo)] transition"
              onClick={() => onRemove(item.id)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-xl">Total: S/ {total}</span>
        <button
          className="px-6 py-2 rounded bg-[var(--color-morado)] text-[var(--color-amarillo)] font-title text-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-morado)] transition"
          onClick={onPay}
        >
          Pagar con Yape/PagoEfectivo
        </button>
      </div>
    </div>
  );
} 