import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener accesorio por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const accesorioId = parseInt(id);
    
    const accesorio = await prisma.accesorio.findUnique({
      where: { id: accesorioId }
    });

    if (!accesorio) {
      return NextResponse.json(
        { message: 'Accesorio no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(accesorio);
  } catch (error) {
    console.error('Error obteniendo accesorio:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar accesorio
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const accesorioId = parseInt(id);
    const data = await request.json();

    const accesorio = await prisma.accesorio.update({
      where: { id: accesorioId },
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

    return NextResponse.json(accesorio);
  } catch (error) {
    console.error('Error actualizando accesorio:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar accesorio
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const accesorioId = parseInt(id);

    // Primero eliminar el ProductoGeneral asociado
    await prisma.productoGeneral.deleteMany({
      where: { accesorioId: accesorioId }
    });

    // Luego eliminar el accesorio
    await prisma.accesorio.delete({
      where: { id: accesorioId }
    });

    return NextResponse.json({ message: 'Accesorio eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando accesorio:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 