import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Obtener celular por ID
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

    // Verificar que sea un celular
    if (producto.categoria.nombre.toLowerCase() !== 'celulares') {
      return NextResponse.json(
        { message: 'El producto no es un celular' },
        { status: 400 }
      );
    }

    // Formatear respuesta similar al endpoint de productos
    const color = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('color')
    )?.valor || undefined;
    
    const almacenamiento = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('almacenamiento') ||
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('storage')
    )?.valor || undefined;

    const modelo = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('modelo')
    )?.valor || undefined;

    const pantalla = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('pantalla')
    )?.valor || undefined;

    const bateria = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('bateria')
    )?.valor || undefined;

    const camara = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('camara')
    )?.valor || undefined;

    const ram = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('ram')
    )?.valor || undefined;

    const puertoCarga = producto.detalles.find(d => 
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('puerto') ||
      d.detalleCategoria.nombre_atributo.toLowerCase().includes('carga')
    )?.valor || undefined;

    const productoFormateado = {
      id: producto.ID,
      nombre: producto.nombre,
      precio: parseFloat(producto.precio.toString()),
      imagen: producto.imagenes.find(img => img.tipo === 'principal')?.url || producto.imagenes[0]?.url || "",
      imagenes: producto.imagenes.map(img => img.url),
      marca: producto.marca.nombre,
      color,
      almacenamiento,
      categoria: producto.categoria.nombre,
      modelo,
      pantalla,
      bateria,
      camara,
      ram,
      puertoCarga,
      descripcion: producto.descripcion
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

// PUT - Actualizar celular
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);
    const data = await request.json();

    // Verificar que el producto existe y es un celular
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

    if (productoExistente.categoria.nombre.toLowerCase() !== 'celulares') {
      return NextResponse.json(
        { message: 'El producto no es un celular' },
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

// DELETE - Eliminar celular
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productoId = parseInt(id);

    // Verificar que el producto existe y es un celular
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

    if (productoExistente.categoria.nombre.toLowerCase() !== 'celulares') {
      return NextResponse.json(
        { message: 'El producto no es un celular' },
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