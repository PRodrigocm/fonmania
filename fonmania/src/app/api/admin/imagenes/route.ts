import { NextRequest, NextResponse } from 'next/server';

// GET - Obtener todas las imágenes
export async function GET() {
  try {
    // Simulación de datos de imágenes
    const imagenes = [
      {
        id: 1,
        nombre: 'Banner Principal',
        tipo: 'banner',
        url: '/img/banner-principal.jpg',
        activa: true,
        fechaCreacion: '2024-01-15'
      },
      {
        id: 2,
        nombre: 'iPhone 15 Pro',
        tipo: 'producto',
        url: '/img/iphone-15-pro.jpg',
        activa: true,
        fechaCreacion: '2024-01-10'
      },
      {
        id: 3,
        nombre: 'Samsung Galaxy S24',
        tipo: 'producto',
        url: '/img/samsung-s24.jpg',
        activa: true,
        fechaCreacion: '2024-01-08'
      },
      {
        id: 4,
        nombre: 'Cargador Inalámbrico',
        tipo: 'producto',
        url: '/img/cargador-inalambrico.jpg',
        activa: false,
        fechaCreacion: '2024-01-05'
      }
    ];
    
    return NextResponse.json(imagenes);
  } catch (error) {
    console.error('Error obteniendo imágenes:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - Subir nueva imagen
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // En una implementación real, aquí se procesaría la imagen
    // y se guardaría en el servidor o en un servicio de almacenamiento
    
    const nuevaImagen = {
      id: Date.now(),
      nombre: data.nombre,
      tipo: data.tipo,
      url: data.url,
      activa: data.activa || true,
      fechaCreacion: new Date().toISOString().split('T')[0]
    };
    
    return NextResponse.json(nuevaImagen, { status: 201 });
  } catch (error) {
    console.error('Error subiendo imagen:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 