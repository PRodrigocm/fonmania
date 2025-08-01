import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener accesorio por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);
    
    const producto = await prisma.producto.findUnique({
      where: { ID: productoId },
      include: {
        categoria: true,
        marca: true,
        imagenes: {
          orderBy: {
            orden: "asc"
          }
        },
        detalles: {
          include: {
            detalleCategoria: true
          }
        }
      }
    });

    if (!producto) {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    // Verificar que sea un accesorio
    if (producto.categoria.nombre.toLowerCase() !== 'accesorios') {
      return NextResponse.json(
        { message: 'El producto no es un accesorio' },
        { status: 400 }
      );
    }

    // Formatear respuesta similar al endpoint de productos
    const compatibilidad = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('compatibilidad')
    )?.valor || undefined;

    const dimensiones = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('dimension')
    )?.valor || undefined;

    const peso = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('peso')
    )?.valor || undefined;

    const colores = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('colores')
    )?.valor || undefined;

    const productoFormateado = {
      id: producto.ID,
      nombre: producto.nombre,
      precio: parseFloat(producto.precio.toString()),
      imagen: producto.imagenes.find(img => img.tipo === 'principal')?.url || producto.imagenes[0]?.url || "",
      imagenes: producto.imagenes.map(img => img.url),
      marca: producto.marca.nombre,
      categoria: producto.categoria.nombre,
      descripcion: producto.descripcion,
      compatibilidad,
      dimensiones,
      peso,
      colores
    };

    return NextResponse.json(productoFormateado);
  } catch (error) {
    console.error('Error obteniendo producto:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar accesorio
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);
    const data = await request.json();

    // Verificar que el producto existe y es un accesorio
    const productoExistente = await prisma.producto.findUnique({
      where: { ID: productoId },
      include: { categoria: true }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    if (productoExistente.categoria.nombre.toLowerCase() !== 'accesorios') {
      return NextResponse.json(
        { message: 'El producto no es un accesorio' },
        { status: 400 }
      );
    }

    // Actualizar el producto
    const producto = await prisma.producto.update({
      where: { ID: productoId },
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        descripcion: data.descripcion || null,
      }
    });

    return NextResponse.json(producto);
  } catch (error) {
    console.error('Error actualizando producto:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar accesorio
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);

    // Verificar que el producto existe y es un accesorio
    const productoExistente = await prisma.producto.findUnique({
      where: { ID: productoId },
      include: { categoria: true }
    });

    if (!productoExistente) {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    if (productoExistente.categoria.nombre.toLowerCase() !== 'accesorios') {
      return NextResponse.json(
        { message: 'El producto no es un accesorio' },
        { status: 400 }
      );
    }

    // Eliminar el producto (las imágenes se eliminarán en cascada)
    await prisma.producto.delete({
      where: { ID: productoId }
    });

    return NextResponse.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando producto:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 