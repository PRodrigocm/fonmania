import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // 1. Limpieza (en orden de dependencias)
  await prisma.pedidoDetalle.deleteMany();
  await prisma.envio.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.favorito.deleteMany();
  await prisma.productoPromocion.deleteMany();
  await prisma.imagenProducto.deleteMany();
  await prisma.producto.deleteMany();
  await prisma.marca.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.rolPermiso.deleteMany();
  await prisma.rol.deleteMany();
  await prisma.permiso.deleteMany();

  /* 2. Roles / Permisos */
  const rolAdmin = await prisma.rol.create({ data: { nombre: 'Administrador' } });
  const rolCliente = await prisma.rol.create({ data: { nombre: 'Usuario' } });
  
  const permisoAdmin = await prisma.permiso.create({ data: { descripcion: 'Acceso total' } });
  const permisoBasico = await prisma.permiso.create({ data: { descripcion: 'Acceso básico' } });
  
  const rolPermisoAdmin = await prisma.rolPermiso.create({
    data: { rolID: rolAdmin.ID, permisoID: permisoAdmin.ID }
  });
  
  const rolPermisoCliente = await prisma.rolPermiso.create({
    data: { rolID: rolCliente.ID, permisoID: permisoBasico.ID }
  });

  const adminPass = await bcrypt.hash('admin123', 10);
  await prisma.usuario.create({
    data: {
      nombre: 'Admin',
      correo: 'admin@fonmania.com',
      password: adminPass,
      direccion: 'Lima, Perú',
      DNI: 12345678,
      fecha_creacion: new Date(),
      rolpermisoID: rolPermisoAdmin.ID
    }
  });

  /* 3. Categorías y Marcas */
  const categoriaCelular = await prisma.categoria.create({ data: { nombre: 'Celular' } });
  const categoriaAccesorio = await prisma.categoria.create({ data: { nombre: 'Accesorio' } });

  const [samsung, apple] = await Promise.all([
    prisma.marca.create({ data: { nombre: 'Samsung' } }),
    prisma.marca.create({ data: { nombre: 'Apple' } })
  ]);

  /* 4. Productos */
  const productosData = [
    {
      nombre: 'Samsung Galaxy S23',
      categoriaID: categoriaCelular.ID,
      marcaID: samsung.ID,
      precio: 3499.99,
      stock: 50,
      descripcion: 'Flagship Samsung',
      ram: '8GB',
      almacenamiento: '128GB',
      dimensiones: '146.3 x 70.9 x 7.6 mm',
      modelo: 'SM-S911B',
      color: 'Negro',
      sistema_operativo: 'Android 13',
      imagen: '/img/cat_1.png'
    },
    {
      nombre: 'iPhone 14 Pro',
      categoriaID: categoriaCelular.ID,
      marcaID: apple.ID,
      precio: 5999.99,
      stock: 30,
      descripcion: 'Flagship Apple',
      ram: '6GB',
      almacenamiento: '256GB',
      dimensiones: '147.5 x 71.5 x 7.9 mm',
      modelo: 'A2890',
      color: 'Morado oscuro',
      sistema_operativo: 'iOS 17',
      imagen: '/img/cat_2.png'
    }
  ];

  for (const p of productosData) {
    const { imagen, ...productoInfo } = p;
    const prod = await prisma.producto.create({ data: productoInfo });
    await prisma.imagenProducto.create({
      data: { productoID: prod.ID, url: imagen, tipo: 'principal', orden: 1 }
    });
  }

  console.log('✅ Seed ejecutado correctamente');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
