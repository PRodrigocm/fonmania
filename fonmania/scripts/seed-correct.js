const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos...');

  // Crear roles
  console.log('📝 Creando roles...');
  const rolUsuario = await prisma.rol.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      nombre: 'Usuario'
    }
  });

  const rolAdmin = await prisma.rol.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      nombre: 'Administrador'
    }
  });

  // Crear permisos
  console.log('🔐 Creando permisos...');
  const permisoBasico = await prisma.permiso.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      descripcion: 'Acceso básico'
    }
  });

  const permisoAdmin = await prisma.permiso.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      descripcion: 'Acceso administrativo'
    }
  });

  // Crear RolPermiso
  console.log('🔗 Creando relaciones rol-permiso...');
  const rolPermisoUsuario = await prisma.rolPermiso.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      rolID: rolUsuario.ID,
      permisoID: permisoBasico.ID
    }
  });

  const rolPermisoAdmin = await prisma.rolPermiso.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      rolID: rolAdmin.ID,
      permisoID: permisoAdmin.ID
    }
  });

  // Crear usuario admin
  console.log('👤 Creando usuario administrador...');
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.usuario.upsert({
    where: { correo: 'admin@fonmania.com' },
    update: {},
    create: {
      nombre: 'Administrador',
      correo: 'admin@fonmania.com',
      password: hashedPassword,
      direccion: 'Lima, Perú',
      DNI: 12345678,
      fecha_creacion: new Date(),
      rolpermisoID: rolPermisoAdmin.ID
    }
  });

  // Crear usuario de prueba
  console.log('👤 Creando usuario de prueba...');
  const userPassword = await bcrypt.hash('user123', 10);
  const testUser = await prisma.usuario.upsert({
    where: { correo: 'user@test.com' },
    update: {},
    create: {
      nombre: 'Usuario Prueba',
      correo: 'user@test.com',
      password: userPassword,
      direccion: 'Arequipa, Perú',
      DNI: 87654321,
      fecha_creacion: new Date(),
      rolpermisoID: rolPermisoUsuario.ID
    }
  });

  // Crear categorías
  console.log('📂 Creando categorías...');
  const categoriaCelular = await prisma.categoria.upsert({
    where: { nombre: 'Celular' },
    update: {},
    create: { nombre: 'Celular' }
  });

  const categoriaAccesorio = await prisma.categoria.upsert({
    where: { nombre: 'Accesorio' },
    update: {},
    create: { nombre: 'Accesorio' }
  });

  // Crear marcas
  console.log('🏷️ Creando marcas...');
  const marcas = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Motorola', 'OnePlus'];
  const marcasCreadas = [];

  for (const nombreMarca of marcas) {
    const marca = await prisma.marca.upsert({
      where: { nombre: nombreMarca },
      update: {},
      create: { nombre: nombreMarca }
    });
    marcasCreadas.push(marca);
  }

  // Crear detalles de categoría para celulares
  console.log('📋 Creando detalles de categoría para celulares...');
  const detallesCelular = [
    { nombre: 'Color', tipo: 'string', unidad: '' },
    { nombre: 'Almacenamiento', tipo: 'string', unidad: 'GB' },
    { nombre: 'Modelo', tipo: 'string', unidad: '' },
    { nombre: 'Pantalla', tipo: 'string', unidad: 'pulgadas' },
    { nombre: 'Batería', tipo: 'string', unidad: 'mAh' },
    { nombre: 'Cámara', tipo: 'string', unidad: 'MP' },
    { nombre: 'RAM', tipo: 'string', unidad: 'GB' },
    { nombre: 'Puerto de Carga', tipo: 'string', unidad: '' }
  ];

  for (const detalle of detallesCelular) {
    await prisma.detalleCategoria.upsert({
      where: { 
        categoriaID_nombre_atributo: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: detalle.nombre
        }
      },
      update: {},
      create: {
        categoriaID: categoriaCelular.ID,
        nombre_atributo: detalle.nombre,
        tipo_dato: detalle.tipo,
        unidad: detalle.unidad
      }
    });
  }

  // Crear detalles de categoría para accesorios
  console.log('📋 Creando detalles de categoría para accesorios...');
  const detallesAccesorio = [
    { nombre: 'Color', tipo: 'string', unidad: '' },
    { nombre: 'Compatibilidad', tipo: 'string', unidad: '' },
    { nombre: 'Dimensiones', tipo: 'string', unidad: 'mm' },
    { nombre: 'Peso', tipo: 'string', unidad: 'g' }
  ];

  for (const detalle of detallesAccesorio) {
    await prisma.detalleCategoria.upsert({
      where: { 
        categoriaID_nombre_atributo: {
          categoriaID: categoriaAccesorio.ID,
          nombre_atributo: detalle.nombre
        }
      },
      update: {},
      create: {
        categoriaID: categoriaAccesorio.ID,
        nombre_atributo: detalle.nombre,
        tipo_dato: detalle.tipo,
        unidad: detalle.unidad
      }
    });
  }

  // Crear celulares
  console.log('📱 Creando celulares...');
  const celulares = [
    {
      nombre: 'Samsung Galaxy S24',
      precio: 1299.99,
      stock: 15,
      descripcion: 'El último smartphone de Samsung con IA integrada',
      marca: 'Samsung',
      categoria: 'Celular',
      detalles: {
        'Color': 'Negro',
        'Almacenamiento': '256',
        'Modelo': 'S24',
        'Pantalla': '6.2',
        'Batería': '4000',
        'Cámara': '50',
        'RAM': '8',
        'Puerto de Carga': 'USB-C'
      }
    },
    {
      nombre: 'iPhone 15 Pro',
      precio: 1499.99,
      stock: 10,
      descripcion: 'El iPhone más potente con chip A17 Pro',
      marca: 'Apple',
      categoria: 'Celular',
      detalles: {
        'Color': 'Titanio',
        'Almacenamiento': '512',
        'Modelo': '15 Pro',
        'Pantalla': '6.1',
        'Batería': '3274',
        'Cámara': '48',
        'RAM': '8',
        'Puerto de Carga': 'USB-C'
      }
    },
    {
      nombre: 'Xiaomi Redmi Note 13',
      precio: 299.99,
      stock: 25,
      descripcion: 'Excelente relación calidad-precio',
      marca: 'Xiaomi',
      categoria: 'Celular',
      detalles: {
        'Color': 'Azul',
        'Almacenamiento': '128',
        'Modelo': 'Note 13',
        'Pantalla': '6.67',
        'Batería': '5000',
        'Cámara': '108',
        'RAM': '8',
        'Puerto de Carga': 'USB-C'
      }
    }
  ];

  for (const celularData of celulares) {
    const marca = await prisma.marca.findFirst({
      where: { nombre: celularData.marca }
    });

    const categoria = await prisma.categoria.findFirst({
      where: { nombre: celularData.categoria }
    });

    const producto = await prisma.producto.create({
      data: {
        nombre: celularData.nombre,
        precio: celularData.precio,
        stock: celularData.stock,
        descripcion: celularData.descripcion,
        categoriaID: categoria.ID,
        marcaID: marca.ID
      }
    });

    // Crear imagen del producto
    await prisma.imagenProducto.create({
      data: {
        productoID: producto.ID,
        url: '/img/cat_1.png',
        tipo: 'principal',
        orden: 1
      }
    });

    // Crear detalles del producto
    for (const [nombre, valor] of Object.entries(celularData.detalles)) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: { 
          categoriaID: categoria.ID,
          nombre_atributo: nombre
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: valor
          }
        });
      }
    }
  }

  // Crear accesorios
  console.log('🎧 Creando accesorios...');
  const accesorios = [
    {
      nombre: 'AirPods Pro 2',
      precio: 249.99,
      stock: 20,
      descripcion: 'Auriculares inalámbricos con cancelación de ruido activa',
      marca: 'Apple',
      categoria: 'Accesorio',
      detalles: {
        'Color': 'Blanco',
        'Compatibilidad': 'iPhone, iPad, Mac',
        'Dimensiones': '30 x 21 x 24 mm',
        'Peso': '5.3g'
      }
    },
    {
      nombre: 'Cargador Inalámbrico Samsung',
      precio: 89.99,
      stock: 12,
      descripcion: 'Cargador inalámbrico de 15W para dispositivos Samsung',
      marca: 'Samsung',
      categoria: 'Accesorio',
      detalles: {
        'Color': 'Negro',
        'Compatibilidad': 'Samsung Galaxy',
        'Dimensiones': '100 x 100 x 15 mm',
        'Peso': '200g'
      }
    },
    {
      nombre: 'Funda iPhone 15 Pro',
      precio: 49.99,
      stock: 25,
      descripcion: 'Funda protectora de silicona para iPhone 15 Pro',
      marca: 'Apple',
      categoria: 'Accesorio',
      detalles: {
        'Color': 'Azul, Rojo, Verde',
        'Compatibilidad': 'iPhone 15 Pro',
        'Dimensiones': '150 x 75 x 10 mm',
        'Peso': '25g'
      }
    }
  ];

  for (const accesorioData of accesorios) {
    const marca = await prisma.marca.findFirst({
      where: { nombre: accesorioData.marca }
    });

    const categoria = await prisma.categoria.findFirst({
      where: { nombre: accesorioData.categoria }
    });

    const producto = await prisma.producto.create({
      data: {
        nombre: accesorioData.nombre,
        precio: accesorioData.precio,
        stock: accesorioData.stock,
        descripcion: accesorioData.descripcion,
        categoriaID: categoria.ID,
        marcaID: marca.ID
      }
    });

    // Crear imagen del producto
    await prisma.imagenProducto.create({
      data: {
        productoID: producto.ID,
        url: '/img/cat_3.png',
        tipo: 'principal',
        orden: 1
      }
    });

    // Crear detalles del producto
    for (const [nombre, valor] of Object.entries(accesorioData.detalles)) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: { 
          categoriaID: categoria.ID,
          nombre_atributo: nombre
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: valor
          }
        });
      }
    }
  }

  // Crear métodos de pago
  console.log('💳 Creando métodos de pago...');
  const metodosPago = ['Tarjeta de Crédito', 'Tarjeta de Débito', 'Transferencia Bancaria', 'Efectivo'];
  
  for (const nombre of metodosPago) {
    await prisma.metodoPago.create({
      data: { nombre }
    });
  }

  // Crear pedidos de ejemplo para el usuario de prueba
  console.log('📦 Creando pedidos de ejemplo...');
  const productos = await prisma.producto.findMany({
    take: 3
  });

  if (productos.length > 0) {
    // Pedido 1 - Completado
    const pedido1 = await prisma.pedido.create({
      data: {
        fecha: new Date('2024-01-15').toISOString(),
        estado: 'Completado',
        total: 1549.98,
        usuarioID: testUser.ID,
        metodoPagoID: 1
      }
    });

    // Detalles del pedido 1
    await prisma.pedidoDetalle.create({
      data: {
        productoID: productos[0].ID,
        pedidoID: pedido1.ID,
        cantidad: 1,
        precio_unitario: productos[0].precio,
        subtotal: productos[0].precio
      }
    });

    await prisma.pedidoDetalle.create({
      data: {
        productoID: productos[1].ID,
        pedidoID: pedido1.ID,
        cantidad: 1,
        precio_unitario: productos[1].precio,
        subtotal: productos[1].precio
      }
    });

    // Envío del pedido 1
    await prisma.envio.create({
      data: {
        pedidoID: pedido1.ID,
        empresa: 'Serpost',
        codigoSeguimiento: 'SP123456789PE',
        estado: 'Entregado',
        fecha_envio: new Date('2024-01-16').toISOString(),
        fecha_entrega: new Date('2024-01-18').toISOString()
      }
    });

    // Pedido 2 - En proceso
    const pedido2 = await prisma.pedido.create({
      data: {
        fecha: new Date('2024-02-01').toISOString(),
        estado: 'En proceso',
        total: 299.99,
        usuarioID: testUser.ID,
        metodoPagoID: 2
      }
    });

    // Detalles del pedido 2
    await prisma.pedidoDetalle.create({
      data: {
        productoID: productos[2].ID,
        pedidoID: pedido2.ID,
        cantidad: 1,
        precio_unitario: productos[2].precio,
        subtotal: productos[2].precio
      }
    });

    // Envío del pedido 2
    await prisma.envio.create({
      data: {
        pedidoID: pedido2.ID,
        empresa: 'DHL',
        codigoSeguimiento: 'DHL987654321PE',
        estado: 'En tránsito',
        fecha_envio: new Date('2024-02-02').toISOString(),
        fecha_entrega: new Date('2024-02-05').toISOString()
      }
    });

    // Pedido 3 - Pendiente
    const pedido3 = await prisma.pedido.create({
      data: {
        fecha: new Date().toISOString(),
        estado: 'Pendiente',
        total: 89.99,
        usuarioID: testUser.ID,
        metodoPagoID: 3
      }
    });

    // Detalles del pedido 3
    await prisma.pedidoDetalle.create({
      data: {
        productoID: productos[1].ID,
        pedidoID: pedido3.ID,
        cantidad: 1,
        precio_unitario: productos[1].precio,
        subtotal: productos[1].precio
      }
    });
  }

  console.log('✅ Seed completado exitosamente!');
  console.log('📊 Datos creados:');
  console.log(`   - 2 usuarios (admin@fonmania.com / user@test.com)`);
  console.log(`   - 3 celulares`);
  console.log(`   - 3 accesorios`);
  console.log(`   - 6 marcas`);
  console.log(`   - 2 categorías`);
  console.log(`   - 4 métodos de pago`);
  console.log(`   - 3 pedidos de ejemplo`);
  console.log(`   - Roles y permisos configurados`);
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 