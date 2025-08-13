import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const promociones = await prisma.promocion.findMany({
      orderBy: {
        ID: 'desc'
      }
    });

    return NextResponse.json(promociones);
  } catch (error) {
    console.error('Error obteniendo promociones:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
