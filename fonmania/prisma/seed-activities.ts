import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedActivities() {
  console.log('🌱 Creando actividades iniciales...');

  // Crear algunas actividades de ejemplo
  const activities = [
    {
      tipo: 'producto_creado',
      descripcion: 'Nuevo producto agregado: iPhone 15 Pro Max',
      entidad: 'iPhone 15 Pro Max',
      usuarioID: null, // Sistema
    },
    {
      tipo: 'pedido_recibido',
      descripcion: 'Nuevo pedido recibido',
      entidad: 'Pedido #1001',
      usuarioID: null,
      metadata: JSON.stringify({ orderId: 1001 })
    },
    {
      tipo: 'promocion_creada',
      descripcion: 'Nueva promoción creada: Descuento 20% en accesorios',
      entidad: 'Descuento 20% en accesorios',
      usuarioID: null,
    },
    {
      tipo: 'usuario_registrado',
      descripcion: 'Nuevo usuario registrado: Juan Pérez',
      entidad: 'Juan Pérez',
      usuarioID: null,
    },
    {
      tipo: 'producto_actualizado',
      descripcion: 'Producto actualizado: Samsung Galaxy S24',
      entidad: 'Samsung Galaxy S24',
      usuarioID: null,
    },
    {
      tipo: 'pedido_actualizado',
      descripcion: 'Estado de pedido actualizado a: Enviado',
      entidad: 'Pedido #1002',
      usuarioID: null,
      metadata: JSON.stringify({ orderId: 1002, newStatus: 'Enviado' })
    },
    {
      tipo: 'producto_creado',
      descripcion: 'Nuevo producto agregado: AirPods Pro 2',
      entidad: 'AirPods Pro 2',
      usuarioID: null,
    },
    {
      tipo: 'pedido_recibido',
      descripcion: 'Nuevo pedido recibido',
      entidad: 'Pedido #1003',
      usuarioID: null,
      metadata: JSON.stringify({ orderId: 1003 })
    }
  ];

  // Crear actividades con fechas escalonadas (más recientes primero)
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    const fecha = new Date();
    fecha.setHours(fecha.getHours() - (i + 1)); // Cada actividad 1 hora más antigua

    await prisma.actividad.create({
      data: {
        ...activity,
        fecha
      }
    });
  }

  console.log(`✅ ${activities.length} actividades creadas exitosamente`);
}

async function main() {
  try {
    await seedActivities();
  } catch (error) {
    console.error('❌ Error creando actividades:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
