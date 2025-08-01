import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserIdFromToken } from '../../../utils/auth';

const prisma = new PrismaClient();

// DELETE - Eliminar producto de favoritos
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const usuarioId = getUserIdFromToken(token);
    const productoId = parseInt(id);

    if (isNaN(productoId)) {
      return NextResponse.json({ error: 'ID de producto inválido' }, { status: 400 });
    }

    // Buscar y eliminar el favorito
    const favorito = await prisma.favorito.findFirst({
      where: {
        usuarioID: usuarioId,
        productoID: productoId
      }
    });

    if (!favorito) {
      return NextResponse.json({ error: 'Favorito no encontrado' }, { status: 404 });
    }

    await prisma.favorito.delete({
      where: {
        ID: favorito.ID
      }
    });

    return NextResponse.json({ message: 'Favorito eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando favorito:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
} 