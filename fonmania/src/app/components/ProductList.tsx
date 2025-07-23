import ProductCard from "./ProductCard";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

interface ProductListProps {
  productos: Producto[];
  onAdd: (item: Producto) => void;
  onCardClick?: (item: Producto) => void;
}

export default function ProductList({ productos, onAdd, onCardClick }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {productos.map((p) => (
        <ProductCard key={p.id} {...p} onAdd={() => onAdd(p)} onCardClick={onCardClick} />
      ))}
    </div>
  );
} 