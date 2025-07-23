import { NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function GET() {
  try {
    const productos = await prisma.productoGeneral.findMany({
      where: { tipo: 'celular' },
      include: { celular: true },
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(productos);
  } catch {
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
} 
