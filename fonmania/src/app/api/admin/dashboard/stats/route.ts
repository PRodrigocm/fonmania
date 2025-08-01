import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// GET - Obtener estadísticas del dashboard
export async function GET() {
  try {
    const prisma = new PrismaClient();
    
    // Obtener categorías
    const categoriaCelular = await prisma.categoria.findFirst({
      where: { nombre: 'Celular' }
    });
    const categoriaAccesorio = await prisma.categoria.findFirst({
      where: { nombre: 'Accesorio' }
    });
    
    const [
      totalCelulares,
      totalAccesorios,
      totalPedidos,
      pedidosPendientes,
      ventasHoy,
      ventasMes,
      productosConPromocion
    ] = await Promise.all([
      prisma.producto.count({
        where: categoriaCelular ? { categoriaID: categoriaCelular.ID } : { ID: 0 }
      }),
      prisma.producto.count({
        where: categoriaAccesorio ? { categoriaID: categoriaAccesorio.ID } : { ID: 0 }
      }),
      prisma.pedido.count(),
      prisma.pedido.count({ where: { estado: 'PENDIENTE' } }),
      prisma.pedido.aggregate({
        where: {
          fecha: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)).toISOString()
          }
        },
        _sum: { total: true }
      }),
      prisma.pedido.aggregate({
        where: {
          fecha: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()
          }
        },
        _sum: { total: true }
      }),
      prisma.productoPromocion.count()
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