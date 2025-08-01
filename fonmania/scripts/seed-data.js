const { PrismaClient } = require('../prisma/ERD');
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

  // Crear carritos para los usuarios
  console.log('🛒 Creando carritos...');
  await prisma.carrito.upsert({
    where: { usuarioID: adminUser.ID },
    update: {},
    create: {
      usuarioID: adminUser.ID
    }
  });

  await prisma.carrito.upsert({
    where: { usuarioID: testUser.ID },
    update: {},
    create: {
      usuarioID: testUser.ID
    }
  });

  // Crear celulares
  console.log('📱 Creando celulares...');
  const celulares = [
    {
      nombre: 'iPhone 15 Pro',
      precio: 3999.99,
      imagen: '/img/cat_1.png',
      marca: 'Apple',
      color: 'Titanio Natural',
      modelo: 'iPhone 15 Pro',
      pantalla: '6.1" Super Retina XDR',
      bateria: '3650mAh',
      almacenamiento: '256GB',
      ram: '8GB',
      camara: 'Triple 48MP + 12MP + 12MP',
      puertoCarga: 'USB-C',
      precioPromocion: 3799.99,
      textoPromocion: '¡Descuento especial!'
    },
    {
      nombre: 'Samsung Galaxy S24 Ultra',
      precio: 3499.99,
      imagen: '/img/cat_1.png',
      marca: 'Samsung',
      color: 'Titanio Negro',
      modelo: 'Galaxy S24 Ultra',
      pantalla: '6.8" Dynamic AMOLED 2X',
      bateria: '5000mAh',
      almacenamiento: '512GB',
      ram: '12GB',
      camara: 'Cuádruple 200MP + 12MP + 50MP + 10MP',
      puertoCarga: 'USB-C',
      precioPromocion: 3299.99,
      textoPromocion: '¡Oferta limitada!'
    },
    {
      nombre: 'Xiaomi Redmi Note 13 Pro',
      precio: 1299.99,
      imagen: '/img/cat_1.png',
      marca: 'Xiaomi',
      color: 'Azul',
      modelo: 'Redmi Note 13 Pro',
      pantalla: '6.67" AMOLED',
      bateria: '5000mAh',
      almacenamiento: '256GB',
      ram: '8GB',
      camara: 'Triple 200MP + 8MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1199.99,
      textoPromocion: '¡Gran oferta!'
    },
    {
      nombre: 'Google Pixel 8 Pro',
      precio: 2999.99,
      imagen: '/img/cat_1.png',
      marca: 'Google',
      color: 'Obsidian',
      modelo: 'Pixel 8 Pro',
      pantalla: '6.7" LTPO OLED',
      bateria: '4950mAh',
      almacenamiento: '256GB',
      ram: '12GB',
      camara: 'Triple 50MP + 48MP + 48MP',
      puertoCarga: 'USB-C',
      precioPromocion: 2799.99,
      textoPromocion: '¡Descuento especial!'
    }
  ];

  for (const celularData of celulares) {
    // Crear ProductoGeneral
    const productoGeneral = await prisma.productoGeneral.create({
      data: {
        tipo: 'celular'
      }
    });

    // Crear Celular
    await prisma.celular.create({
      data: {
        ...celularData,
        productoGeneralId: productoGeneral.id
      }
    });
  }

  // Crear accesorios
  console.log('🎧 Creando accesorios...');
  const accesorios = [
    {
      nombre: 'AirPods Pro 2',
      precio: 299.99,
      imagen: '/img/cat_3.png',
      descripcion: 'Auriculares inalámbricos con cancelación de ruido activa',
      compatibilidad: 'iPhone, iPad, Mac',
      dimensiones: '30.9 x 21.8 x 24.0 mm',
      peso: '5.3g',
      colores: 'Blanco',
      precioPromocion: 279.99,
      textoPromocion: '¡Oferta especial!'
    },
    {
      nombre: 'Cargador Inalámbrico Samsung',
      precio: 89.99,
      imagen: '/img/cat_3.png',
      descripcion: 'Cargador inalámbrico de 15W para dispositivos Samsung',
      compatibilidad: 'Samsung Galaxy',
      dimensiones: '100 x 100 x 15 mm',
      peso: '200g',
      colores: 'Negro',
      precioPromocion: 79.99,
      textoPromocion: '¡Descuento!'
    },
    {
      nombre: 'Funda iPhone 15 Pro',
      precio: 49.99,
      imagen: '/img/cat_3.png',
      descripcion: 'Funda protectora de silicona para iPhone 15 Pro',
      compatibilidad: 'iPhone 15 Pro',
      dimensiones: '150 x 75 x 10 mm',
      peso: '25g',
      colores: 'Azul, Rojo, Verde',
      precioPromocion: 39.99,
      textoPromocion: '¡Gran oferta!'
    },
    {
      nombre: 'Cable USB-C Premium',
      precio: 29.99,
      imagen: '/img/cat_3.png',
      descripcion: 'Cable USB-C de alta velocidad para carga y datos',
      compatibilidad: 'Universal',
      dimensiones: '1.5m',
      peso: '50g',
      colores: 'Negro, Blanco',
      precioPromocion: 24.99,
      textoPromocion: '¡Oferta limitada!'
    }
  ];

  for (const accesorioData of accesorios) {
    // Crear ProductoGeneral
    const productoGeneral = await prisma.productoGeneral.create({
      data: {
        tipo: 'accesorio'
      }
    });

    // Crear Accesorio
    await prisma.accesorio.create({
      data: {
        ...accesorioData,
        productoGeneralId: productoGeneral.id
      }
    });
  }

  console.log('✅ Seed completado exitosamente!');
  console.log('📊 Datos creados:');
  console.log(`   - 2 usuarios (admin@fonmania.com / user@test.com)`);
  console.log(`   - 4 celulares`);
  console.log(`   - 4 accesorios`);
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