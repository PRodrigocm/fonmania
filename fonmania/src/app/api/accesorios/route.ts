import { NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function GET() {
  try {
    const accesorios = await prisma.productoGeneral.findMany({
      where: { tipo: 'accesorio' },
      include: { accesorio: true },
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(accesorios);
  } catch {
    return NextResponse.json({ error: 'Error al obtener accesorios' }, { status: 500 });
  }
} 