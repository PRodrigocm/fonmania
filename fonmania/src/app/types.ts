export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  marca?: string;
  color?: string;
  // Detalles extendidos
  modelo?: string;
  pantalla?: string;
  bateria?: string;
  almacenamiento?: string;
  ram?: string;
  camara?: string;
  puertoCarga?: string;
  precioPromocion?: number;
  precioDescuento?: number;
  textoPromocion?: string;
  categoria?: string;
  modalidad?: string;
  linea?: string;
  plan?: string;
  planPromo?: string;
  financiamiento?: string;
  requiereNumero?: boolean;
  // Accesorios
  descripcion?: string;
  detalles?: string;
  compatibilidad?: string;
  dimensiones?: string;
  peso?: string;
  colores?: string;
}

export interface ItemCarrito extends Producto {
  cantidad: number;
} 