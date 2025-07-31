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
      totalAdmins
    ] = await Promise.all([
      prisma.celular.count(),
      prisma.accesorio.count(),
      prisma.pedido.count(),
      prisma.pedido.count({ where: { estado: 'pendiente' } }),
      prisma.pedido.count({ where: { estado: 'completado' } }),
      prisma.pedido.count({ where: { estado: 'cancelado' } }),
      prisma.pedido.aggregate({
        where: {
          creadoEn: {
            gte: new Date(ahora.setHours(0, 0, 0, 0))
          }
        },
        _sum: { total: true }
      }),
      prisma.pedido.aggregate({
        where: {
          creadoEn: {
            gte: fechaInicio
          }
        },
        _sum: { total: true }
      }),
      prisma.usuarioAdmin.count()
    ]);

    // Contar productos con promociones
    const productosPromocion = await Promise.all([
      prisma.celular.count({
        where: {
          OR: [
            { precioPromocion: { not: null } },
            { precioDescuento: { not: null } }
          ]
        }
      }),
      prisma.accesorio.count({
        where: {
          OR: [
            { precioPromocion: { not: null } },
            { precioDescuento: { not: null } }
          ]
        }
      })
    ]);

    // Datos de ejemplo para ventas por mes
    const ventasPorMes = [
      { mes: 'Enero', ventas: 15000 },
      { mes: 'Febrero', ventas: 18000 },
      { mes: 'Marzo', ventas: 22000 },
      { mes: 'Abril', ventas: 19000 },
      { mes: 'Mayo', ventas: 25000 },
      { mes: 'Junio', ventas: 28000 },
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
        productosPromocion: productosPromocion[0] + productosPromocion[1],
      },
      pedidos: {
        total: totalPedidos,
        pendientes: pedidosPendientes,
        completados: pedidosCompletados,
        cancelados: pedidosCancelados,
      },
      usuarios: {
        total: totalAdmins,
        nuevos: 0, // No hay nuevos admins por defecto
        activos: totalAdmins, // Todos los admins están activos
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