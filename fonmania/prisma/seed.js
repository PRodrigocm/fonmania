// Archivo convertido a JavaScript CommonJS para compatibilidad
const { PrismaClient } = require('@prisma/client');
console.log('INICIO SEED');
const prisma = new PrismaClient();

async function main() {
  // Crear usuario admin
  const admin = await prisma.usuarioAdmin.create({
    data: {
      correo: 'admin@fonmania.com',
      contrasena: 'admin123',
    },
  });
  console.log('Admin creado:', admin);

  // Crear productos celulares
  const celular1 = await prisma.producto.create({
    data: {
      nombre: 'Samsung Galaxy S23',
      descripcion: 'Smartphone de alta gama con cámara profesional y pantalla AMOLED.',
      precio: 3499.99,
      precioPromocion: 2999.99,
      textoPromocion: '¡Oferta especial por lanzamiento!',
      categoria: 'celular',
      stock: 10,
      imagenes: {
        create: [
          { url: '/img/cat_1.png', orden: 1 },
          { url: '/img/cat_1_g1.png', orden: 2 },
        ],
      },
    },
  });
  console.log('Celular 1 creado:', celular1);

  const celular2 = await prisma.producto.create({
    data: {
      nombre: 'iPhone 14 Pro',
      descripcion: 'El nuevo iPhone con Dynamic Island y cámara de 48MP.',
      precio: 5999.99,
      precioPromocion: 5499.99,
      textoPromocion: 'Descuento por tiempo limitado',
      categoria: 'celular',
      stock: 7,
      imagenes: {
        create: [
          { url: '/img/cat_2.png', orden: 1 },
          { url: '/img/cat_2_g1.png', orden: 2 },
        ],
      },
    },
  });
  console.log('Celular 2 creado:', celular2);

  // Crear accesorios
  const accesorio1 = await prisma.producto.create({
    data: {
      nombre: 'Cargador Rápido USB-C',
      descripcion: 'Cargador de 25W compatible con la mayoría de smartphones.',
      precio: 99.99,
      precioPromocion: 79.99,
      textoPromocion: '¡Llévate el segundo a mitad de precio!',
      categoria: 'accesorio',
      stock: 30,
      imagenes: {
        create: [
          { url: '/img/cat_3.png', orden: 1 },
          { url: '/img/cat_3_g1.png', orden: 2 },
        ],
      },
    },
  });
  console.log('Accesorio 1 creado:', accesorio1);

  const accesorio2 = await prisma.producto.create({
    data: {
      nombre: 'Funda Antigolpes',
      descripcion: 'Protege tu celular con estilo y seguridad.',
      precio: 59.99,
      categoria: 'accesorio',
      stock: 20,
      imagenes: {
        create: [
          { url: '/img/cat_2.png', orden: 1 },
        ],
      },
    },
  });
  console.log('Accesorio 2 creado:', accesorio2);

  // Crear un pedido de ejemplo
  const pedido = await prisma.pedido.create({
    data: {
      total: 3079.98,
      estado: 'pagado',
      items: {
        create: [
          {
            productoId: celular1.id,
            cantidad: 1,
            precio: 2999.99,
          },
          {
            productoId: accesorio1.id,
            cantidad: 1,
            precio: 79.99,
          },
        ],
      },
    },
  });
  console.log('Pedido creado:', pedido);

  console.log('¡Base de datos poblada con éxito!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 