import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// GET - Obtener estadísticas del dashboard
export async function GET() {
  try {
    const prisma = new PrismaClient();
    
    const [
      totalCelulares,
      totalAccesorios,
      totalPedidos,
      pedidosPendientes,
      ventasHoy,
      ventasMes,
      productosConPromocion
    ] = await Promise.all([
      prisma.celular.count(),
      prisma.accesorio.count(),
      prisma.pedido.count(),
      prisma.pedido.count({ where: { estado: 'PENDIENTE' } }),
      prisma.pedido.aggregate({
        where: {
          creadoEn: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        },
        _sum: { total: true }
      }),
      prisma.pedido.aggregate({
        where: {
          creadoEn: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        },
        _sum: { total: true }
      }),
      prisma.celular.count({
        where: {
          OR: [
            { precioPromocion: { not: null } },
            { precioDescuento: { not: null } },
            { textoPromocion: { not: null } }
          ]
        }
      })
    ]);

    const stats = {
      totalCelulares,
      totalAccesorios,
      totalPedidos,
      pedidosPendientes,
      ventasHoy: ventasHoy._sum.total || 0,
      ventasMes: ventasMes._sum.total || 0,
      totalPromociones: productosConPromocion
    };

    await prisma.$disconnect();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 