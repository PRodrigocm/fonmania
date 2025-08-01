import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const idNum = parseInt(id);
    
    if (isNaN(idNum)) {
      return NextResponse.json(
        { error: "ID de producto inválido" },
        { status: 400 }
      );
    }

    const producto = await prisma.producto.findUnique({
      where: { ID: idNum },
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
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Buscar detalles específicos
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
      color,
      almacenamiento,
      categoria: producto.categoria.nombre,
      modelo,
      pantalla,
      bateria,
      camara,
      ram,
      puertoCarga,
      descripcion: producto.descripcion,
      compatibilidad,
      dimensiones,
      peso,
      colores
    };

    return NextResponse.json(productoFormateado);
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 