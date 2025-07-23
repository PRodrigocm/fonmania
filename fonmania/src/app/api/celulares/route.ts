import { NextResponse } from 'next/server';
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