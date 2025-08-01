import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Primero obtener la categoría "Accesorio"
    const categoriaAccesorio = await prisma.categoria.findFirst({
      where: { nombre: 'Accesorio' }
    });

    if (!categoriaAccesorio) {
      return NextResponse.json([]);
    }

    const accesorios = await prisma.producto.findMany({
      where: { categoriaID: categoriaAccesorio.ID },
      include: {
        categoria: true,
        marca: true,
        imagenes: {
          where: { tipo: 'principal' },
          take: 1
        },
        detalles: {
          include: {
            detalleCategoria: true
          }
        }
      }
    });

    const accesoriosFormateados = accesorios.map((producto) => {
      // Buscar detalles específicos
      const color = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('color')
      )?.valor || 'N/A';
      
      const compatibilidad = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('compatibilidad')
      )?.valor || 'N/A';

      const dimensiones = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('dimensiones')
      )?.valor || 'N/A';

      return {
        id: producto.ID,
        nombre: producto.nombre,
        precio: producto.precio,
        marca: producto.marca.nombre,
        categoria: producto.categoria.nombre,
        imagen: producto.imagenes[0]?.url || '/img/cat_3.png',
        color,
        almacenamiento: 'N/A',
        stock: producto.stock,
        descripcion: producto.descripcion,
        compatibilidad,
        dimensiones,
        tipo: 'accesorio'
      };
    });

    return NextResponse.json(accesoriosFormateados);
  } catch (error) {
    console.error('Error obteniendo accesorios:', error);
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

    // Obtener la categoría de accesorios
    const categoriaAccesorio = await prisma.categoria.findFirst({
      where: { nombre: 'Accesorio' }
    });

    if (!categoriaAccesorio) {
      return NextResponse.json(
        { message: 'Categoría de accesorios no encontrada' },
        { status: 400 }
      );
    }

    // Obtener o crear la marca
    let marca = await prisma.marca.findFirst({
      where: { nombre: data.marca || 'Genérica' }
    });

    if (!marca) {
      marca = await prisma.marca.create({
        data: { nombre: data.marca || 'Genérica' }
      });
    }

    // Crear el producto
    const producto = await prisma.producto.create({
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        descripcion: data.descripcion || '',
        stock: data.stock || 0,
        categoriaID: categoriaAccesorio.ID,
        marcaID: marca.ID
      }
    });

    // Crear imagen principal si se proporciona
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

    // Crear detalles del producto si se proporcionan
    if (data.compatibilidad) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaAccesorio.ID,
          nombre_atributo: 'Compatibilidad'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.compatibilidad
          }
        });
      }
    }

    if (data.dimensiones) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaAccesorio.ID,
          nombre_atributo: 'Dimensiones'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.dimensiones
          }
        });
      }
    }

    if (data.peso) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaAccesorio.ID,
          nombre_atributo: 'Peso'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.peso
          }
        });
      }
    }

    return NextResponse.json(producto, { status: 201 });
  } catch (error) {
    console.error('Error creando producto:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 