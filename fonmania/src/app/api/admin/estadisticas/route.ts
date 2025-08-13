import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const periodo = searchParams.get('periodo') || 'mes';

    // Calcular fechas según el período
    const ahora = new Date();
    let fechaInicio: Date;
    
    switch (periodo) {
      case 'semana':
        fechaInicio = new Date(ahora.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'trimestre':
        fechaInicio = new Date(ahora.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      case 'año':
        fechaInicio = new Date(ahora.getFullYear(), 0, 1);
        break;
      default: // mes
        fechaInicio = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
    }

    // Obtener categorías
    const categoriaCelular = await prisma.categoria.findFirst({
      where: { nombre: 'Celular' }
    });
    const categoriaAccesorio = await prisma.categoria.findFirst({
      where: { nombre: 'Accesorio' }
    });

    // Obtener estadísticas básicas
    const [
      totalCelulares,
      totalAccesorios,
      totalPedidos,
      pedidosPendientes,
      pedidosCompletados,
      pedidosCancelados,
      ventasHoy,
      ventasPeriodo,
      totalUsuarios
    ] = await Promise.all([
      prisma.producto.count({
        where: categoriaCelular ? { categoriaID: categoriaCelular.ID } : { ID: 0 }
      }),
      prisma.producto.count({
        where: categoriaAccesorio ? { categoriaID: categoriaAccesorio.ID } : { ID: 0 }
      }),
      prisma.pedido.count(),
      prisma.pedido.count({ where: { estado: 'pendiente' } }),
      prisma.pedido.count({ where: { estado: 'completado' } }),
      prisma.pedido.count({ where: { estado: 'cancelado' } }),
      prisma.pedido.aggregate({
        where: {
          fecha: {
            gte: new Date(ahora.setHours(0, 0, 0, 0)).toISOString()
          }
        },
        _sum: { total: true }
      }),
      prisma.pedido.aggregate({
        where: {
          fecha: {
            gte: fechaInicio.toISOString()
          }
        },
        _sum: { total: true }
      }),
      prisma.usuario.count()
    ]);

    // Contar productos con promociones (usando la tabla de promociones)
    const productosPromocion = await prisma.productoPromocion.count();

    // Datos de ejemplo para ventas por mes (todos en cero)
    const ventasPorMes = [
      { mes: 'Enero', ventas: 0 },
      { mes: 'Febrero', ventas: 0 },
      { mes: 'Marzo', ventas: 0 },
      { mes: 'Abril', ventas: 0 },
      { mes: 'Mayo', ventas: 0 },
      { mes: 'Junio', ventas: 0 },
    ];

    // Datos de ejemplo para productos más vendidos
    const productosMasVendidos = [
      { nombre: 'iPhone 15 Pro', ventas: 45, tipo: 'celular' },
      { nombre: 'Samsung Galaxy S24', ventas: 38, tipo: 'celular' },
      { nombre: 'Cargador Inalámbrico', ventas: 32, tipo: 'accesorio' },
      { nombre: 'AirPods Pro', ventas: 28, tipo: 'accesorio' },
      { nombre: 'Google Pixel 8', ventas: 25, tipo: 'celular' },
    ];

    // Calcular crecimiento (ejemplo)
    const crecimiento = 15; // Porcentaje de crecimiento

    return NextResponse.json({
      ventas: {
        total: ventasPeriodo._sum.total || 0,
        hoy: ventasHoy._sum.total || 0,
        semana: periodo === 'semana' ? ventasPeriodo._sum.total || 0 : 0,
        mes: periodo === 'mes' ? ventasPeriodo._sum.total || 0 : 0,
        crecimiento,
      },
      productos: {
        totalCelulares,
        totalAccesorios,
        productosPromocion,
      },
      pedidos: {
        total: totalPedidos,
        pendientes: pedidosPendientes,
        completados: pedidosCompletados,
        cancelados: pedidosCancelados,
      },
      usuarios: {
        total: totalUsuarios,
        nuevos: 0, // No hay nuevos usuarios por defecto
        activos: totalUsuarios, // Todos los usuarios están activos
      },
      ventasPorMes,
      productosMasVendidos,
    });

  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 