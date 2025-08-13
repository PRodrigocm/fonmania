export interface User {
  nombre: string;
  email: string;
  dni: string;
  direccion: string;
}

export interface PedidoDetalle {
  ID: number;
  producto: {
    nombre: string;
    imagen: string;
    marca: string;
  };
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export interface Pedido {
  ID: number;
  fecha: string;
  estado: string;
  total: number;
  detalles: PedidoDetalle[];
  envio?: {
    empresa: string;
    codigoSeguimiento: string;
    estado: string;
  };
}

export interface UserUpdateData {
  nombre: string;
  email: string;
  direccion: string;
  dni: string;
}
