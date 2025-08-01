/*
  Script: download-images.js
  Descripción:
  -------------
  1. Lee todos los productos existentes en la BD (por nombre/marca).
  2. Busca una imagen en línea usando Unsplash API.
  3. Descarga la imagen con axios y la guarda en `public/img/products/<slug>.jpg`.

  Uso:
  -----
  # 1. Instalar dependencias
  npm i unsplash-js node-fetch slugify axios

  # 2. Agregar tu UNSPLASH_ACCESS_KEY en .env:
  UNSPLASH_ACCESS_KEY=tu_clave_aqui

  # 3. Ejecutar después de haber corrido el seed (la base de datos debe tener productos)
  node scripts/download-images.js
*/

const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const { createApi } = require('unsplash-js');
// node-fetch v3 is ESM-only, to use it from CommonJS we need the default export
// Using .default ensures we pass the actual fetch function, not the module object.
const fetch = require('node-fetch').default;
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
require('dotenv').config();

const prisma = new PrismaClient();
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'img', 'products');

// Asegura directorio
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function downloadImage(url, filepath) {
  try {
    const response = await axios({ url, responseType: 'stream', timeout: 15000 });
    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (err) {
    console.error(`❌  Error descargando ${url}:`, err.message);
  }
}

// Inicializar Unsplash API
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch: fetch
});

async function fetchFirstImage(query) {
  try {
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      console.error('❌ UNSPLASH_ACCESS_KEY no encontrada en .env');
      return null;
    }
    
    const result = await unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 1,
      orientation: 'portrait'
    });
    
    if (result.response && result.response.results.length > 0) {
      return result.response.results[0].urls.regular;
    }
  } catch (e) {
    console.warn('⚠️  Error en Unsplash para', query, ':', e.message);
  }
  return null;
}

async function main() {
  ensureDir(OUTPUT_DIR);

  // Obtener todos los productos con su marca y categoría
  const productos = await prisma.producto.findMany({
    include: {
      marca: true,
      categoria: true
    }
  });

  console.log(`🔍  Descargando imágenes para ${productos.length} productos...`);

  for (const prod of productos) {
    const slug = slugify(prod.nombre, { lower: true, strict: true });
    const filePath = path.join(OUTPUT_DIR, `${slug}.jpg`);

    if (fs.existsSync(filePath)) {
      console.log(`✅  ${prod.nombre}: ya existe, omitido.`);
      continue;
    }

    const query = `${prod.marca?.nombre || ''} ${prod.nombre}`.trim();
    console.log(`🔎  Buscando imagen para: ${query}`);
    const imgUrl = await fetchFirstImage(query);

    if (imgUrl) {
      console.log(`⬇️  Descargando ${imgUrl}`);
      await downloadImage(imgUrl, filePath);
      console.log(`✅  Guardado en ${filePath}`);

      // Opcional: actualizar campo imagen en la BD
      // Crear registro de imagen (tipo "principal") si aún no existe
      await prisma.imagenProducto.create({
        data: {
          productoID: prod.ID,
          url: `/img/products/${slug}.jpg`,
          tipo: 'principal',
          orden: 1
        }
      });
    } else {
      console.log(`⚠️  No se encontró imagen para ${prod.nombre}`);
    }
  }

  await prisma.$disconnect();
  console.log('🎉  Proceso completado');
}

main().catch(err => {
  console.error('Error general:', err);
  prisma.$disconnect();
});
