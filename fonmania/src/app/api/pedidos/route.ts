import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getUserIdFromToken } from '../../utils/auth';

const prisma = new PrismaClient();

// GET - Obtener pedidos del usuario
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const usuarioId = getUserIdFromToken(token);

    const pedidos = await prisma.pedido.findMany({
      where: {
        usuarioID: usuarioId
      },
      include: {
        detalles: {
          include: {
            producto: {
              include: {
                marca: true,
                imagenes: true
              }
            }
          }
        },
        envio: true,
        metodoPago: true
      },
      orderBy: {
        fecha: 'desc'
      }
    });

    // Transformar los datos para el frontend
    const pedidosTransformados = pedidos.map(pedido => ({
      ID: pedido.ID,
      fecha: pedido.fecha,
      estado: pedido.estado,
      total: pedido.total,
      detalles: pedido.detalles.map(detalle => ({
        ID: detalle.ID,
        producto: {
          nombre: detalle.producto.nombre,
          imagen: detalle.producto.imagenes?.[0]?.url || "/img/cat_1.png",
          marca: detalle.producto.marca?.nombre || "Sin marca"
        },
        cantidad: detalle.cantidad,
        precio_unitario: detalle.precio_unitario,
        subtotal: detalle.subtotal
      })),
      envio: pedido.envio ? {
        empresa: pedido.envio.empresa,
        codigoSeguimiento: pedido.envio.codigoSeguimiento,
        estado: pedido.envio.estado
      } : null,
      metodoPago: pedido.metodoPago?.nombre || "No especificado"
    }));

    return NextResponse.json(pedidosTransformados);
  } catch (error) {
    console.error('Error obteniendo pedidos:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
} 