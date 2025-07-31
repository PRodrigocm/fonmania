import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function GET() {
  try {
    const accesorios = await prisma.productoGeneral.findMany({
      where: { tipo: 'accesorio' },
      include: { accesorio: true },
      orderBy: { id: 'asc' },
    });
    // Extrae solo el objeto accesorio
    const soloAccesorios = accesorios.map((p) => p.accesorio).filter(Boolean);
    return NextResponse.json(soloAccesorios);
  } catch {
    return NextResponse.json({ error: 'Error al obtener accesorios' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Crear el accesorio
    const accesorio = await prisma.accesorio.create({
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        imagen: data.imagen,
        descripcion: data.descripcion || null,
        compatibilidad: data.compatibilidad || null,
        dimensiones: data.dimensiones || null,
        peso: data.peso || null,
        colores: data.colores || null,
        precioPromocion: data.precioPromocion ? parseFloat(data.precioPromocion) : null,
        precioDescuento: data.precioDescuento ? parseFloat(data.precioDescuento) : null,
        textoPromocion: data.textoPromocion || null,
      }
    });

    // Crear el ProductoGeneral asociado
    await prisma.productoGeneral.create({
      data: {
        tipo: 'accesorio',
        accesorioId: accesorio.id
      }
    });

    return NextResponse.json(accesorio, { status: 201 });
  } catch (error) {
    console.error('Error creando accesorio:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 