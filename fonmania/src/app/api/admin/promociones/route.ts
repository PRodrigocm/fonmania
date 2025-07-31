import { NextRequest, NextResponse } from 'next/server';

// GET - Obtener todas las promociones
export async function GET() {
  try {
    // Simulación de datos de promociones
    const promociones = [
      {
        id: 1,
        nombre: 'Descuento iPhone',
        descripcion: '20% de descuento en todos los iPhone',
        tipo: 'porcentaje',
        valor: 20,
        fechaInicio: '2024-01-01',
        fechaFin: '2024-12-31',
        activa: true,
        productosAplicables: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14']
      },
      {
        id: 2,
        nombre: 'Envío Gratis',
        descripcion: 'Envío gratis en compras superiores a $100,000',
        tipo: 'envio',
        valor: 0,
        fechaInicio: '2024-01-01',
        fechaFin: '2024-12-31',
        activa: true,
        productosAplicables: ['Todos los productos']
      },
      {
        id: 3,
        nombre: 'Accesorios 2x1',
        descripcion: 'Lleva 2 accesorios por el precio de 1',
        tipo: 'cantidad',
        valor: 50,
        fechaInicio: '2024-02-01',
        fechaFin: '2024-02-29',
        activa: false,
        productosAplicables: ['Cargadores', 'Fundas', 'Auriculares']
      }
    ];
    
    return NextResponse.json(promociones);
  } catch (error) {
    console.error('Error obteniendo promociones:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - Crear nueva promoción
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const nuevaPromocion = {
      id: Date.now(),
      nombre: data.nombre,
      descripcion: data.descripcion,
      tipo: data.tipo,
      valor: parseFloat(data.valor),
      fechaInicio: data.fechaInicio,
      fechaFin: data.fechaFin,
      activa: data.activa || true,
      productosAplicables: data.productosAplicables || []
    };
    
    return NextResponse.json(nuevaPromocion, { status: 201 });
  } catch (error) {
    console.error('Error creando promoción:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 