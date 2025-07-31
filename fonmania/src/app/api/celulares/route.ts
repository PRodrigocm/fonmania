import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function GET() {
  try {
    const celulares = await prisma.productoGeneral.findMany({
      where: { tipo: 'celular' },
      include: { celular: true },
      orderBy: { id: 'asc' },
    });
    // Extrae solo el objeto celular
    const soloCelulares = celulares.map((p) => p.celular).filter(Boolean);
    return NextResponse.json(soloCelulares);
  } catch {
    return NextResponse.json({ error: 'Error al obtener celulares' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Crear el celular
    const celular = await prisma.celular.create({
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        imagen: data.imagen,
        marca: data.marca || null,
        color: data.color || null,
        modelo: data.modelo || null,
        pantalla: data.pantalla || null,
        bateria: data.bateria || null,
        almacenamiento: data.almacenamiento || null,
        ram: data.ram || null,
        camara: data.camara || null,
        puertoCarga: data.puertoCarga || null,
        precioPromocion: data.precioPromocion ? parseFloat(data.precioPromocion) : null,
        precioDescuento: data.precioDescuento ? parseFloat(data.precioDescuento) : null,
        textoPromocion: data.textoPromocion || null,
      }
    });

    // Crear el ProductoGeneral asociado
    await prisma.productoGeneral.create({
      data: {
        tipo: 'celular',
        celularId: celular.id
      }
    });

    return NextResponse.json(celular, { status: 201 });
  } catch (error) {
    console.error('Error creando celular:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 