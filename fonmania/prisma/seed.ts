// Archivo convertido a JavaScript CommonJS para compatibilidad
const { PrismaClient } = require('@prisma/client');
console.log('INICIO SEED');
const prisma = new PrismaClient();

async function main() {
  // Borrar todos los datos antes de poblar (orden correcto por claves foráneas)
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.productoGeneral.deleteMany();
  await prisma.celular.deleteMany();
  await prisma.accesorio.deleteMany();
  await prisma.usuarioAdmin.deleteMany();

  // Crear usuario admin
  const admin = await prisma.usuarioAdmin.upsert({
    where: { correo: 'admin@fonmania.com' },
    update: {},
    create: {
      correo: 'admin@fonmania.com',
      contrasena: 'admin123',
    },
  });
  console.log('Admin creado o existente:', admin);

  // =====================
  // Celulares
  // =====================
  const celulares = [
    {
      nombre: 'Samsung Galaxy S23',
      precio: 3499.99,
      imagen: '/img/cat_1.png',
      marca: 'Samsung',
      color: 'Negro',
      modelo: 'Galaxy S23',
      pantalla: 'AMOLED 6.1" FHD+',
      bateria: '3900 mAh',
      almacenamiento: '128GB',
      ram: '8GB',
      camara: 'Triple 50MP + 12MP + 10MP',
      puertoCarga: 'USB-C',
      precioPromocion: 2999.99,
      precioDescuento: 0,
      textoPromocion: '¡Oferta especial por lanzamiento!'
    },
    {
      nombre: 'iPhone 14 Pro',
      precio: 5999.99,
      imagen: '/img/cat_2.png',
      marca: 'Apple',
      color: 'Negro',
      modelo: 'iPhone 14 Pro',
      pantalla: 'OLED 6.1" Super Retina XDR',
      bateria: '3200 mAh',
      almacenamiento: '256GB',
      ram: '6GB',
      camara: 'Triple 48MP + 12MP + 12MP',
      puertoCarga: 'Lightning',
      precioPromocion: 5499.99,
      precioDescuento: 0,
      textoPromocion: 'Descuento por tiempo limitado',
    },
    {
      nombre: 'Xiaomi Redmi Note 12',
      precio: 1299.99,
      imagen: '/img/cat_3.png',
      marca: 'Xiaomi',
      color: 'Negro',
      modelo: 'Redmi Note 12',
      pantalla: 'AMOLED 6.67" FHD+',
      bateria: '5000 mAh',
      almacenamiento: '128GB',
      ram: '6GB',
      camara: 'Triple 50MP + 8MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1099.99,
      precioDescuento: 0,
      textoPromocion: '¡Precio especial por lanzamiento!',
    },
    {
      nombre: 'Motorola Edge 30',
      precio: 1899.99,
      imagen: '/img/cat_1.png',
      marca: 'Motorola',
      color: 'Negro',
      modelo: 'Edge 30',
      pantalla: 'OLED 6.5" 144Hz',
      bateria: '4020 mAh',
      almacenamiento: '256GB',
      ram: '8GB',
      camara: 'Triple 50MP + 50MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1599.99,
      precioDescuento: 0,
      textoPromocion: '¡Aprovecha el descuento Edge!',
    },
    {
      nombre: 'Realme 10',
      precio: 999.99,
      imagen: '/img/cat_2.png',
      marca: 'Realme',
      color: 'Negro',
      modelo: 'Realme 10',
      pantalla: 'AMOLED 6.4" FHD+',
      bateria: '5000 mAh',
      almacenamiento: '128GB',
      ram: '8GB',
      camara: 'Doble 50MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 899.99,
      precioDescuento: 0,
      textoPromocion: '¡Solo por esta semana!',
    },
    {
      nombre: 'Oppo Reno 8',
      precio: 2099.99,
      imagen: '/img/cat_3.png',
      marca: 'Oppo',
      color: 'Negro',
      modelo: 'Reno 8',
      pantalla: 'AMOLED 6.43" FHD+',
      bateria: '4500 mAh',
      almacenamiento: '256GB',
      ram: '8GB',
      camara: 'Triple 50MP + 8MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1799.99,
      precioDescuento: 0,
      textoPromocion: '¡Nuevo lanzamiento!',
    },
    {
      nombre: 'Vivo Y53s',
      precio: 1199.99,
      imagen: '/img/cat_1_g1.png',
      marca: 'Vivo',
      color: 'Negro',
      modelo: 'Y53s',
      pantalla: 'IPS 6.58" FHD+',
      bateria: '5000 mAh',
      almacenamiento: '128GB',
      ram: '8GB',
      camara: 'Triple 64MP + 2MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1099.99,
      precioDescuento: 0,
      textoPromocion: '¡Oferta limitada!',
    },
    {
      nombre: 'Huawei Nova 9',
      precio: 1799.99,
      imagen: '/img/cat_2_g1.png',
      marca: 'Huawei',
      color: 'Negro',
      modelo: 'Nova 9',
      pantalla: 'OLED 6.57" FHD+',
      bateria: '4300 mAh',
      almacenamiento: '128GB',
      ram: '8GB',
      camara: 'Cuádruple 50MP + 8MP + 2MP + 2MP',
      puertoCarga: 'USB-C',
      precioPromocion: 1599.99,
      precioDescuento: 0,
      textoPromocion: '¡Descuento Nova!',
    },
  ];

  const celularesPG = [];
  for (const cel of celulares.map(cel => ({
    nombre: cel.nombre,
    precio: cel.precio,
    imagen: cel.imagen,
    marca: cel.marca,
    color: cel.color,
    modelo: cel.modelo,
    pantalla: cel.pantalla,
    bateria: cel.bateria,
    almacenamiento: cel.almacenamiento,
    ram: cel.ram,
    camara: cel.camara,
    puertoCarga: cel.puertoCarga,
    precioPromocion: cel.precioPromocion,
    precioDescuento: cel.precioDescuento,
    textoPromocion: cel.textoPromocion,
  }))) {
    const { nombre, precio, imagen, marca, color, modelo, pantalla, bateria, almacenamiento, ram, camara, puertoCarga, precioPromocion, precioDescuento, textoPromocion } = cel;
    const celular = await prisma.celular.create({
      data: {
        nombre,
        precio,
        imagen: imagen || "/img/placeholder.png",
        marca,
        color,
        modelo,
        pantalla,
        bateria,
        almacenamiento,
        ram,
        camara,
        puertoCarga,
        precioPromocion,
        precioDescuento,
        textoPromocion,
      }
    });
    const productoGeneral = await prisma.productoGeneral.create({
      data: {
        tipo: 'celular',
        celularId: celular.id,
      }
    });
    celularesPG.push({ productoGeneral, celular });
    console.log('Celular y ProductoGeneral creados:', celular.nombre);
  }

  // =====================
  // Accesorios
  // =====================
  const accesorios = [
    {
      nombre: 'Cargador Rápido USB-C',
      precio: 99.99,
      imagen: '/img/cat_3.png',
      descripcion: 'Cargador de 25W compatible con la mayoría de smartphones.',
      compatibilidad: 'Compatibilidad universal',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso ligero',
      colores: 'Blanco',
      precioPromocion: 79.99,
      precioDescuento: 0,
      textoPromocion: '¡Llévate el segundo a mitad de precio!'
    },
    {
      nombre: 'Funda Antigolpes',
      precio: 59.99,
      imagen: '/img/cat_2.png',
      descripcion: 'Protege tu celular con estilo y seguridad.',
      compatibilidad: 'Para varios modelos de celular',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso estándar',
      colores: 'Negro',
      precioPromocion: 49.99,
      precioDescuento: 0,
      textoPromocion: 'Descuento especial en fundas'
    },
    {
      nombre: 'Auriculares Bluetooth',
      precio: 149.99,
      imagen: '/img/cat_1_g1.png',
      descripcion: 'Sonido envolvente y batería de larga duración.',
      compatibilidad: 'Compatible con cualquier dispositivo Bluetooth',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso ligero',
      colores: 'Negro',
      precioPromocion: 129.99,
      precioDescuento: 0,
      textoPromocion: '¡Oferta en audio!'
    },
    {
      nombre: 'Soporte para Auto',
      precio: 39.99,
      imagen: '/img/cat_2_g1.png',
      descripcion: 'Soporte magnético universal para auto.',
      compatibilidad: 'Universal para smartphones',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso ligero',
      colores: 'Negro',
      precioPromocion: 29.99,
      precioDescuento: 0,
      textoPromocion: '¡Descuento especial!'
    },
    {
      nombre: 'Protector de Pantalla',
      precio: 29.99,
      imagen: '/img/cat_3_g1.png',
      descripcion: 'Vidrio templado resistente a rayones.',
      compatibilidad: 'Para varios modelos de celular',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso ligero',
      colores: 'Negro',
      precioPromocion: 19.99,
      precioDescuento: 0,
      textoPromocion: '¡2x1 en protectores!'
    },
    {
      nombre: 'Cargador Inalámbrico',
      precio: 199.99,
      imagen: '/img/cat_1.png',
      descripcion: 'Carga rápida inalámbrica para smartphones.',
      compatibilidad: 'Compatible con dispositivos Qi',
      dimensiones: 'Dimensiones estándar',
      peso: 'Peso ligero',
      colores: 'Negro',
      precioPromocion: 179.99,
      precioDescuento: 0,
      textoPromocion: '¡Carga sin cables!'
    },
  ];

  // Asegura que todos los campos tengan valores por defecto
  for (const acc of accesorios) {
    acc.compatibilidad = acc.compatibilidad || 'No especificado';
    acc.dimensiones = acc.dimensiones || 'No especificado';
    acc.peso = acc.peso || 'No especificado';
    acc.colores = acc.colores || 'No especificado';
    acc.descripcion = acc.descripcion || 'No especificado';
    acc.precioPromocion = acc.precioPromocion || 0;
    acc.precioDescuento = acc.precioDescuento || 0;
    acc.textoPromocion = acc.textoPromocion || 'No especificado';
  }

  const accesoriosPG = [];
  for (const acc of accesorios.map(acc => ({
    nombre: acc.nombre,
    precio: acc.precio,
    imagen: acc.imagen,
    descripcion: acc.descripcion,
    compatibilidad: acc.compatibilidad,
    dimensiones: acc.dimensiones,
    peso: acc.peso,
    colores: acc.colores,
    precioPromocion: acc.precioPromocion,
    precioDescuento: acc.precioDescuento,
    textoPromocion: acc.textoPromocion,
  }))) {
    const { nombre, precio, imagen, descripcion, compatibilidad, dimensiones, peso, colores, precioPromocion, precioDescuento, textoPromocion } = acc;
    const accesorio = await prisma.accesorio.create({
      data: {
        nombre,
        precio,
        imagen: imagen || "/img/placeholder.png",
        descripcion,
        compatibilidad,
        dimensiones,
        peso,
        colores,
        precioPromocion,
        precioDescuento,
        textoPromocion,
      }
    });
    const productoGeneral = await prisma.productoGeneral.create({
      data: {
        tipo: 'accesorio',
        accesorioId: accesorio.id,
      }
    });
    accesoriosPG.push({ productoGeneral, accesorio });
    console.log('Accesorio y ProductoGeneral creados:', accesorio.nombre);
  }

  // Crear un pedido de ejemplo (usando el primer celular y accesorio creados)
  const primerCelularPG = celularesPG[0]?.productoGeneral;
  const primerAccesorioPG = accesoriosPG[0]?.productoGeneral;
  if (primerCelularPG && primerAccesorioPG) {
    const pedido = await prisma.pedido.create({
      data: {
        total: 3079.98,
        estado: 'pagado',
        items: {
          create: [
            {
              productoGeneralId: primerCelularPG.id,
              cantidad: 1,
              precio: 2999.99,
            },
            {
              productoGeneralId: primerAccesorioPG.id,
              cantidad: 1,
              precio: 79.99,
            },
          ],
        },
      },
    });
    console.log('Pedido creado:', pedido);
  }

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