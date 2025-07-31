import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener celular por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const celularId = parseInt(id);
    
    const celular = await prisma.celular.findUnique({
      where: { id: celularId }
    });

    if (!celular) {
      return NextResponse.json(
        { message: 'Celular no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(celular);
  } catch (error) {
    console.error('Error obteniendo celular:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar celular
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const celularId = parseInt(id);
    const data = await request.json();

    const celular = await prisma.celular.update({
      where: { id: celularId },
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

    return NextResponse.json(celular);
  } catch (error) {
    console.error('Error actualizando celular:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar celular
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const celularId = parseInt(id);

    // Primero eliminar el ProductoGeneral asociado
    await prisma.productoGeneral.deleteMany({
      where: { celularId: celularId }
    });

    // Luego eliminar el celular
    await prisma.celular.delete({
      where: { id: celularId }
    });

    return NextResponse.json({ message: 'Celular eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando celular:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 