import { PrismaClient } from '@prisma/client';

/**
 * Seed de ejemplo que crea productos (celulares y accesorios) con múltiples imágenes
 * totalmente compatible con el schema Prisma actual.
 * Ejecutar con:  npx tsx prisma/seed-productos-galeria-clean.ts
 */

const prisma = new PrismaClient();

// Utilidades para crear/obtener IDs ---------------------------------------
async function ensureCategoria(nombre: string) {
  const categoria = await prisma.categoria.upsert({
    where: { nombre },
    update: {},
    create: { nombre },
  });
  return categoria.ID;
}

async function ensureMarca(nombre: string) {
  const marca = await prisma.marca.upsert({
    where: { nombre },
    update: {},
    create: { nombre },
  });
  return marca.ID;
}

// Tipo auxiliar -----------------------------------------------------------
interface ProductoSeed {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  marca: string;
  stock: number;
  ram: string;
  almacenamiento: string;
  dimensiones: string;
  modelo: string;
  color: string;
  sistema_operativo: string;
  imagenes: string[]; // primera imagen es la principal
}

// Datos -------------------------------------------------------------------
const seeds: ProductoSeed[] = [
  {
    nombre: 'iPhone 15 Pro Max',
    descripcion: 'iPhone de titanio con cámara de 48 MP y chip A17 Pro',
    precio: 4999,
    categoria: 'Celular',
    marca: 'Apple',
    stock: 15,
    ram: '8GB',
    almacenamiento: '256GB',
    dimensiones: '159.9 × 76.7 × 8.25 mm',
    modelo: 'iPhone 15 Pro Max',
    color: 'Titanio Natural',
    sistema_operativo: 'iOS',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500',
    ],
  },
  {
    nombre: 'Samsung Galaxy S24 Ultra',
    descripcion: 'Galaxy S24 Ultra con cámara de 200 MP y S Pen integrado',
    precio: 4299,
    categoria: 'Celular',
    marca: 'Samsung',
    stock: 12,
    ram: '12GB',
    almacenamiento: '512GB',
    dimensiones: '162.3 × 79 × 8.6 mm',
    modelo: 'Galaxy S24 Ultra',
    color: 'Titanio Gris',
    sistema_operativo: 'Android',
    imagenes: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500',
      'https://images.unsplash.com/photo-1607936854279-55e8f4bc0b9a?w=500',
    ],
  },
  {
    nombre: 'AirPods Pro (2.ª gen.)',
    descripcion: 'AirPods Pro con cancelación activa de ruido y audio espacial',
    precio: 899,
    categoria: 'Accesorio',
    marca: 'Apple',
    stock: 25,
    ram: '—',
    almacenamiento: '—',
    dimensiones: 'Estuche: 45.2 × 60.9 × 21.7 mm',
    modelo: 'AirPods Pro 2',
    color: 'Blanco',
    sistema_operativo: '—',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    ],
  },
];

// Seed principal ----------------------------------------------------------
async function main() {
  console.log('🚀  Sembrando productos con galería…');

  // Preparar IDs de categorías y marcas
  const catIDs: Record<string, number> = {};
  const marcaIDs: Record<string, number> = {};
  for (const p of seeds) {
    if (!catIDs[p.categoria]) catIDs[p.categoria] = await ensureCategoria(p.categoria);
    if (!marcaIDs[p.marca]) marcaIDs[p.marca] = await ensureMarca(p.marca);
  }

  // Eliminar productos existentes con mismo nombre (idempotente)
  await prisma.producto.deleteMany({ where: { nombre: { in: seeds.map(s => s.nombre) } } });

  // Crear productos
  for (const p of seeds) {
    const producto = await prisma.producto.create({
      data: {
        nombre: p.nombre,
        descripcion: p.descripcion,
        precio: p.precio,
        stock: p.stock,
        categoriaID: catIDs[p.categoria],
        marcaID: marcaIDs[p.marca],
        ram: p.ram,
        almacenamiento: p.almacenamiento,
        dimensiones: p.dimensiones,
        modelo: p.modelo,
        color: p.color,
        sistema_operativo: p.sistema_operativo,
      },
    });

    // Imágenes asociadas
    await prisma.$transaction(
      p.imagenes.map((url, idx) =>
        prisma.imagenProducto.create({
          data: {
            productoID: producto.ID,
            url,
            tipo: idx === 0 ? 'principal' : 'galeria',
            orden: idx + 1,
          },
        })
      )
    );

    console.log(`✅  Producto creado: ${p.nombre}`);
  }

  console.log(`🎉  Seed completado. Total productos: ${await prisma.producto.count()}`);
}

main()
  .catch(err => {
    console.error('❌  Error en seed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
