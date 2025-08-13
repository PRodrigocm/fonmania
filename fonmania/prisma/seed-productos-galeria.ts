import { PrismaClient } from '@prisma/client';

/**
 * Seed que crea productos de ejemplo con múltiples imágenes (celulares y accesorios)
 * de forma compatible con el schema Prisma actual (relaciones Categoria, Marca e ImagenProducto).
 * Se ejecuta de forma idempotente: borra los productos con los nombres indicados antes de volverlos a crear.
 */



// Helpers --------------------------------------------------
async function getCategoriaID(nombre: string) {
  const categoria = await prisma.categoria.upsert({
    where: { nombre },
    update: {},
    create: { nombre },
  });
  return categoria.ID;
}

async function getMarcaID(nombre: string) {
  const marca = await prisma.marca.upsert({
    where: { nombre },
    update: {},
    create: { nombre },
  });
  return marca.ID;
}

interface ProductoSeed {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string; // nombre categoria
  marca: string; // nombre marca
  stock: number;
  ram: string;
  almacenamiento: string;
  dimensiones: string;
  modelo: string;
  color: string;
  sistema_operativo: string;
  imagenes: string[]; // primera = principal
}

// ----------------------------------------------------------

const productos: ProductoSeed[] = [
  {
    nombre: 'iPhone 15 Pro Max',
    descripcion: 'El iPhone más avanzado con titanio, cámara de 48MP y chip A17 Pro',
    precio: 4999,
    categoria: 'Celular',
    marca: 'Apple',
    stock: 15,
    ram: '8GB',
    almacenamiento: '256GB',
    dimensiones: '159.9 x 76.7 x 8.25 mm',
    modelo: 'iPhone 15 Pro Max',
    color: 'Titanio Natural',
    sistema_operativo: 'iOS',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500',
    ],
  },
  {
    nombre: 'Samsung Galaxy S24 Ultra',
    descripcion: 'Galaxy S24 Ultra con S Pen integrado, cámara de 200MP y pantalla de 6.8"',
    precio: 4299,
    categoria: 'Celular',
    marca: 'Samsung',
    stock: 12,
    ram: '12GB',
    almacenamiento: '512GB',
    dimensiones: '162.3 x 79.0 x 8.6 mm',
    modelo: 'Galaxy S24 Ultra',
    color: 'Titanio Gris',
    sistema_operativo: 'Android',
    imagenes: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500',
      'https://images.unsplash.com/photo-1607936854279-55e8f4bc0b9a?w=500',
      'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
    ],
  },
  {
    nombre: 'Xiaomi 14 Ultra',
    descripcion: 'Xiaomi 14 Ultra con cámara Leica, pantalla LTPO AMOLED y carga rápida 90W',
    precio: 3299,
    categoria: 'Celular',
    marca: 'Xiaomi',
    stock: 8,
    ram: '12GB',
    almacenamiento: '512GB',
    dimensiones: '161.4 x 75.3 x 9.2 mm',
    modelo: '14 Ultra',
    color: 'Negro',
    sistema_operativo: 'Android',
    imagenes: [
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500',
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
    ],
  },
  // Accesorios ------------------------------------------------
  {
    nombre: 'AirPods Pro 2da Generación',
    descripcion: 'AirPods Pro con cancelación activa de ruido y audio espacial',
    precio: 899,
    categoria: 'Accesorio',
    marca: 'Apple',
    stock: 25,
    ram: 'N/A',
    almacenamiento: 'N/A',
    dimensiones: 'Estuche: 45.2 x 60.9 x 21.7 mm',
    modelo: 'AirPods Pro 2',
    color: 'Blanco',
    sistema_operativo: 'N/A',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
    ],
  },
  {
    nombre: 'Cargador Inalámbrico Samsung 15W',
    descripcion: 'Cargador inalámbrico rápido compatible con Galaxy y iPhone',
    precio: 129,
    categoria: 'Accesorio',
    marca: 'Samsung',
    stock: 30,
    ram: 'N/A',
    almacenamiento: 'N/A',
    dimensiones: '86.74 x 86.74 x 15.5 mm',
    modelo: 'Wireless Charger Pad',
    color: 'Negro',
    sistema_operativo: 'N/A',
    imagenes: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1609592806444-7de5e0b8c4f0?w=500',
    ],
  },
];


  console.log('🖼️ Seed de productos con galería…');

  // --- Crear categorías y marcas únicas y obtener IDs ---
  const categoriaIDs: Record<string, number> = {};
  const marcaIDs: Record<string, number> = {};

  for (const p of productos) {
    if (!categoriaIDs[p.categoria]) {
      categoriaIDs[p.categoria] = await getCategoriaID(p.categoria);
    }
    if (!marcaIDs[p.marca]) {
      marcaIDs[p.marca] = await getMarcaID(p.marca);
    }
  }

  // --- Eliminar productos existentes con mismo nombre (idempotencia simple) ---
  await prisma.producto.deleteMany({
    where: { nombre: { in: productos.map((p) => p.nombre) } },
  });

  // --- Crear productos e imágenes ---
  for (const p of productos) {
    const created = await prisma.producto.create({
      data: {
        nombre: p.nombre,
        descripcion: p.descripcion,
        precio: p.precio,
        stock: p.stock,
        categoriaID: categoriaIDs[p.categoria],
        marcaID: marcaIDs[p.marca],
        ram: p.ram,
        almacenamiento: p.almacenamiento,
        dimensiones: p.dimensiones,
        modelo: p.modelo,
        color: p.color,
        sistema_operativo: p.sistema_operativo,
      },
    });

    // Crear imágenes asociadas
    await prisma.$transaction(
      p.imagenes.map((url, idx) =>
        prisma.imagenProducto.create({
          data: {
            productoID: created.ID,
            url,
            tipo: idx === 0 ? 'principal' : 'galeria',
            orden: idx + 1,
          },
        })
      )
    );

    console.log(`✅ Producto creado con imágenes: ${p.nombre}`);
  }

  const total = await prisma.producto.count();
  console.log(`🎉 Seed completado. Total productos: ${total}`);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




  console.log('🖼️ Iniciando seed de productos con galerías de imágenes...');

  // Celulares con múltiples imágenes
  const celulares = [
    {
      nombre: 'iPhone 15 Pro Max',
      descripcion: 'El iPhone más avanzado con titanio, cámara de 48MP y chip A17 Pro',
      precio: 4999.00,
      precioPromocion: 4599.00,
      categoria: 'Celular',
      marca: 'Apple',
      modelo: 'iPhone 15 Pro Max',
      almacenamiento: '256GB',
      color: 'Titanio Natural',
      stock: 15,
      imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500',
        'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500'
      ],
      detalles: 'Pantalla Super Retina XDR de 6.7", resistente al agua IP68, Face ID',
      dimensiones: '159.9 x 76.7 x 8.25 mm',
      peso: '221g',
      colores: 'Titanio Natural, Titanio Azul, Titanio Blanco, Titanio Negro'
    },
    {
      nombre: 'Samsung Galaxy S24 Ultra',
      descripcion: 'Galaxy S24 Ultra con S Pen integrado, cámara de 200MP y pantalla de 6.8"',
      precio: 4299.00,
      precioPromocion: 3899.00,
      categoria: 'Celular',
      marca: 'Samsung',
      modelo: 'Galaxy S24 Ultra',
      almacenamiento: '512GB',
      color: 'Titanio Gris',
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500',
        'https://images.unsplash.com/photo-1607936854279-55e8f4bc0b9a?w=500',
        'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500',
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500'
      ],
      detalles: 'Snapdragon 8 Gen 3, 12GB RAM, S Pen integrado, cámara con zoom 100x',
      dimensiones: '162.3 x 79.0 x 8.6 mm',
      peso: '232g',
      colores: 'Titanio Gris, Titanio Negro, Titanio Violeta, Titanio Amarillo'
    },
    {
      nombre: 'Xiaomi 14 Ultra',
      descripcion: 'Xiaomi 14 Ultra con cámara Leica, pantalla LTPO AMOLED y carga rápida 90W',
      precio: 3299.00,
      categoria: 'Celular',
      marca: 'Xiaomi',
      modelo: '14 Ultra',
      almacenamiento: '512GB',
      color: 'Negro',
      stock: 8,
      imagen: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500'
      ],
      detalles: 'Snapdragon 8 Gen 3, cámara Leica de 50MP, pantalla 6.73" 120Hz',
      dimensiones: '161.4 x 75.3 x 9.2 mm',
      peso: '224g',
      colores: 'Negro, Blanco'
    }
  ];

  // Accesorios con múltiples imágenes
  const accesorios = [
    {
      nombre: 'AirPods Pro 2da Generación',
      descripcion: 'AirPods Pro con cancelación activa de ruido y audio espacial personalizado',
      precio: 899.00,
      precioPromocion: 799.00,
      categoria: 'Accesorio',
      marca: 'Apple',
      modelo: 'AirPods Pro 2',
      stock: 25,
      imagen: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
        'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500'
      ],
      detalles: 'Chip H2, hasta 6 horas de reproducción, estuche con MagSafe',
      dimensiones: 'Estuche: 45.2 x 60.9 x 21.7 mm',
      peso: '50.8g (estuche incluido)',
      colores: 'Blanco'
    },
    {
      nombre: 'Cargador Inalámbrico Samsung 15W',
      descripcion: 'Cargador inalámbrico rápido compatible con Galaxy y iPhone',
      precio: 129.00,
      categoria: 'Accesorio',
      marca: 'Samsung',
      modelo: 'Wireless Charger Pad',
      stock: 30,
      imagen: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
        'https://images.unsplash.com/photo-1609592806444-7de5e0b8c4f0?w=500'
      ],
      detalles: 'Carga rápida 15W, compatible con Qi, LED indicador, ventilador interno',
      dimensiones: '86.74 x 86.74 x 15.5 mm',
      peso: '58g',
      colores: 'Negro, Blanco'
    },
    {
      nombre: 'Funda Spigen Ultra Hybrid iPhone 15',
      descripcion: 'Funda transparente con protección militar y bordes reforzados',
      precio: 89.00,
      categoria: 'Accesorio',
      marca: 'Spigen',
      modelo: 'Ultra Hybrid',
      stock: 50,
      imagen: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500',
        'https://images.unsplash.com/photo-1601593346740-925612772716?w=500',
        'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500'
      ],
      detalles: 'Certificación militar MIL-STD 810G-516.6, compatible con MagSafe',
      dimensiones: 'Compatible con iPhone 15 (6.1")',
      peso: '35g',
      colores: 'Transparente, Negro, Azul'
    },
    {
      nombre: 'Power Bank Anker 20000mAh',
      descripcion: 'Batería portátil de alta capacidad con carga rápida PD 22.5W',
      precio: 199.00,
      categoria: 'Accesorio',
      marca: 'Anker',
      modelo: 'PowerCore 20K',
      stock: 20,
      imagen: 'https://images.unsplash.com/photo-1609592806444-7de5e0b8c4f0?w=500',
      imagenes: [
        'https://images.unsplash.com/photo-1609592806444-7de5e0b8c4f0?w=500',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
      ],
      detalles: '20000mAh, USB-C PD 22.5W, 2 puertos USB-A, pantalla LED',
      dimensiones: '158 x 74 x 19 mm',
      peso: '343g',
      colores: 'Negro, Blanco'
    }
  ];

  // Insertar celulares
  for (const celular of celulares) {
    try {
      await prisma.producto.upsert({
        where: { nombre: celular.nombre },
        update: celular,
        create: celular
      });
      console.log(`✅ Celular creado: ${celular.nombre}`);
    } catch (error) {
      console.error(`❌ Error creando celular ${celular.nombre}:`, error);
    }
  }

  // Insertar accesorios
  for (const accesorio of accesorios) {
    try {
      await prisma.producto.upsert({
        where: { nombre: accesorio.nombre },
        update: accesorio,
        create: accesorio
      });
      console.log(`✅ Accesorio creado: ${accesorio.nombre}`);
    } catch (error) {
      console.error(`❌ Error creando accesorio ${accesorio.nombre}:`, error);
    }
  }

  // Verificar productos creados
  const totalProductos = await prisma.producto.count();
  const celularesCount = await prisma.producto.count({
    where: { categoria: 'Celular' }
  });
  const accesoriosCount = await prisma.producto.count({
    where: { categoria: 'Accesorio' }
  });

  console.log('📊 Resumen de productos con galerías:');
  console.log(`- Total productos: ${totalProductos}`);
  console.log(`- Celulares: ${celularesCount}`);
  console.log(`- Accesorios: ${accesoriosCount}`);

  console.log('🎉 Seed de productos con galerías completado!');
  console.log('🖼️ Ahora los modales mostrarán galerías de imágenes con miniaturas');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
