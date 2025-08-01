import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserIdFromToken } from '../../utils/auth';

const prisma = new PrismaClient();

// GET - Obtener favoritos del usuario
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const usuarioId = getUserIdFromToken(token);

    const favoritos = await prisma.favorito.findMany({
      where: {
        usuarioID: usuarioId
      },
      include: {
        producto: {
          include: {
            categoria: true,
            marca: {
              select: {
                nombre: true
              }
            },
            imagenes: true
          }
        }
      }
    });

    // Transformar los datos para que marca sea un string en lugar de un objeto
    const favoritosTransformados = favoritos.map(favorito => ({
      ...favorito,
      producto: {
        ...favorito.producto,
        marca: favorito.producto.marca?.nombre || null
      }
    }));

    return NextResponse.json(favoritosTransformados);
  } catch (error) {
    console.error('Error obteniendo favoritos:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// POST - Agregar producto a favoritos
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const usuarioId = getUserIdFromToken(token);

    const { productoID } = await request.json();

    if (!productoID) {
      return NextResponse.json({ error: 'ID del producto requerido' }, { status: 400 });
    }

    // Verificar si el producto existe
    const producto = await prisma.producto.findUnique({
      where: { ID: productoID }
    });

    if (!producto) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }

    // Verificar si ya está en favoritos
    const favoritoExistente = await prisma.favorito.findFirst({
      where: {
        usuarioID: usuarioId,
        productoID: productoID
      }
    });

    if (favoritoExistente) {
      return NextResponse.json({ error: 'Producto ya está en favoritos' }, { status: 400 });
    }

    // Agregar a favoritos
    const nuevoFavorito = await prisma.favorito.create({
      data: {
        usuarioID: usuarioId,
        productoID: productoID
      }
    });

    return NextResponse.json(nuevoFavorito, { status: 201 });
  } catch (error) {
    console.error('Error agregando a favoritos:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
} 