import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserIdFromToken } from '../../../../utils/auth';

const prisma = new PrismaClient();

// GET - Obtener reseñas de un producto
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);

    if (isNaN(productoId)) {
      return NextResponse.json({ error: 'ID de producto inválido' }, { status: 400 });
    }

    // TODO: Implementar reseñas cuando se agregue el modelo al schema
    // const reseñas = await prisma.reseña.findMany({
    //   where: {
    //     productoID: productoId
    //   },
    //   include: {
    //     usuario: {
    //       select: {
    //         nombre: true
    //       }
    //     }
    //   },
    //   orderBy: {
    //     fecha: 'desc'
    //   }
    // });

    // Calcular calificación promedio
    // const calificacionPromedio = reseñas.length > 0 
    //   ? reseñas.reduce((acc, reseña) => acc + reseña.calificacion, 0) / reseñas.length 
    //   : 0;

    return NextResponse.json({
      reseñas: [],
      calificacionPromedio: 0,
      totalReseñas: 0
    });
  } catch (error) {
    console.error('Error obteniendo reseñas:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// POST - Agregar reseña a un producto
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const usuarioId = getUserIdFromToken(token);
    const { id } = await params;
    const productoId = parseInt(id);

    if (isNaN(productoId)) {
      return NextResponse.json({ error: 'ID de producto inválido' }, { status: 400 });
    }

    const { calificacion, comentario } = await request.json();

    if (!calificacion || !comentario) {
      return NextResponse.json({ error: 'Calificación y comentario son requeridos' }, { status: 400 });
    }

    if (calificacion < 1 || calificacion > 5) {
      return NextResponse.json({ error: 'Calificación debe estar entre 1 y 5' }, { status: 400 });
    }

    // TODO: Implementar reseñas cuando se agregue el modelo al schema
    // // Verificar si el usuario ya ha reseñado este producto
    // const reseñaExistente = await prisma.reseña.findFirst({
    //   where: {
    //     usuarioID: usuarioId,
    //     productoID: productoId
    //   }
    // });

    // if (reseñaExistente) {
    //   return NextResponse.json({ error: 'Ya has reseñado este producto' }, { status: 400 });
    // }

    // // Crear la reseña
    // const nuevaReseña = await prisma.reseña.create({
    //   data: {
    //     usuarioID: usuarioId,
    //     productoID: productoId,
    //     calificacion,
    //     comentario,
    //     fecha: new Date().toISOString()
    //   },
    //   include: {
    //     usuario: {
    //       select: {
    //         nombre: true
    //       }
    //     }
    //   }
    // });

    return NextResponse.json({ message: 'Funcionalidad de reseñas no implementada aún' }, { status: 501 });
  } catch (error) {
    console.error('Error creando reseña:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
} 