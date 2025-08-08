import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Primero obtener la categoría "Celular"
    const categoriaCelular = await prisma.categoria.findFirst({
      where: { nombre: 'Celular' }
    });

    if (!categoriaCelular) {
      return NextResponse.json([]);
    }

    const celulares = await prisma.producto.findMany({
      where: { categoriaID: categoriaCelular.ID },
      include: {
        categoria: true,
        marca: true,
        imagenes: {
          where: { tipo: 'principal' },
          take: 1
        }
      }
    });

    const celularesFormateados = celulares.map((producto) => {
      const { color, almacenamiento, modelo } = producto as any;

      return {
        id: producto.ID,
        nombre: producto.nombre,
        precio: producto.precio,
        marca: producto.marca.nombre,
        categoria: producto.categoria.nombre,
        imagen: producto.imagenes[0]?.url || '/img/cat_1.png',
        color,
        almacenamiento,
        stock: producto.stock,
        descripcion: producto.descripcion,
        modelo,
        tipo: 'celular'
      };
    });

    return NextResponse.json(celularesFormateados);
  } catch (error) {
    console.error('Error obteniendo celulares:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Obtener la categoría "Celular"
    const categoriaCelular = await prisma.categoria.findFirst({
      where: { nombre: 'Celular' }
    });

    if (!categoriaCelular) {
      return NextResponse.json(
        { message: 'Categoría de celulares no encontrada' },
        { status: 400 }
      );
    }

    // Obtener o crear la marca
    let marca = await prisma.marca.findFirst({
      where: { nombre: data.marca || 'Genérica' }
    });

    if (!marca) {
      marca = await prisma.marca.create({ data: { nombre: data.marca || 'Genérica' } });
    }

    // Crear el producto con los nuevos campos directos
    const producto = await prisma.producto.create({
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        descripcion: data.descripcion || '',
        stock: data.stock || 0,
        categoriaID: categoriaCelular.ID,
        marcaID: marca.ID,
        color: data.color || null,
        almacenamiento: data.almacenamiento || null,
        modelo: data.modelo || null,
        ram: data.ram || null,
        dimensiones: data.dimensiones || null,
        sistema_operativo: data.sistema_operativo || null
      }
    });

    // Imagen principal
    if (data.imagen) {
      await prisma.imagenProducto.create({
        data: {
          productoID: producto.ID,
          url: data.imagen,
          tipo: 'principal',
          orden: 1
        }
      });
    }

    return NextResponse.json(producto, { status: 201 });
  } catch (error) {
    console.error('Error creando producto:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
