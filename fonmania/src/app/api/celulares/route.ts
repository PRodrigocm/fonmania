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
        },
        detalles: {
          include: {
            detalleCategoria: true
          }
        }
      }
    });

    const celularesFormateados = celulares.map((producto) => {
      // Buscar detalles específicos
      const color = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('color')
      )?.valor || 'N/A';
      
      const almacenamiento = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('almacenamiento') ||
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('storage')
      )?.valor || 'N/A';

      const modelo = producto.detalles.find((d) => 
        d.detalleCategoria.nombre_atributo.toLowerCase().includes('modelo')
      )?.valor || 'N/A';

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

    // Obtener la categoría de celulares
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
        categoriaID: categoriaCelular.ID,
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
    if (data.color) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Color'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.color
          }
        });
      }
    }

    if (data.modelo) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Modelo'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.modelo
          }
        });
      }
    }

    if (data.almacenamiento) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Almacenamiento'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.almacenamiento
          }
        });
      }
    }

    if (data.pantalla) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Pantalla'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.pantalla
          }
        });
      }
    }

    if (data.bateria) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Batería'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.bateria
          }
        });
      }
    }

    if (data.camara) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Cámara'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.camara
          }
        });
      }
    }

    if (data.ram) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'RAM'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.ram
          }
        });
      }
    }

    if (data.puertoCarga) {
      const detalleCategoria = await prisma.detalleCategoria.findFirst({
        where: {
          categoriaID: categoriaCelular.ID,
          nombre_atributo: 'Puerto de Carga'
        }
      });

      if (detalleCategoria) {
        await prisma.productoDetalle.create({
          data: {
            productoID: producto.ID,
            detallecategoriaID: detalleCategoria.ID,
            valor: data.puertoCarga
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