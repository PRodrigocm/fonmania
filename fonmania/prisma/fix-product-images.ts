import { PrismaClient } from '@prisma/client';

/**
 * Añade una imagen placeholder a todos los productos que no tienen ninguna imagen principal.
 * Ejecutar con: npx tsx prisma/fix-product-images.ts
 */

const prisma = new PrismaClient();

const PLACEHOLDER_CELULAR = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400';
const PLACEHOLDER_ACCESORIO = 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400';
const PLACEHOLDER_DEFAULT = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400';

async function main() {
  console.log('🔎 Buscando productos sin imágenes…');

  const productos = await prisma.producto.findMany({
    include: {
      imagenes: true,
      categoria: true,
    },
  });

  let added = 0;

  for (const p of productos) {
    const hasPrincipal = p.imagenes.some((img) => img.tipo === 'principal');
    if (!hasPrincipal) {
      const placeholder = p.categoria?.nombre === 'Celular'
        ? PLACEHOLDER_CELULAR
        : p.categoria?.nombre === 'Accesorio'
        ? PLACEHOLDER_ACCESORIO
        : PLACEHOLDER_DEFAULT;
      await prisma.imagenProducto.create({
        data: {
          productoID: p.ID,
          url: placeholder,
          tipo: 'principal',
          orden: 1,
        },
      });
      added++;
      console.log(`➡️  Imagen añadida al producto ID ${p.ID}`);
    }
  }

  console.log(`🎉 Finalizado. Imágenes añadidas: ${added}`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
