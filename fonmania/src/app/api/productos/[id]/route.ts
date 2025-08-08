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
        }
      }
    });

    if (!producto) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Extraer campos directos
    const { color } = producto as any;
    
    const { almacenamiento } = producto as any;

    const { modelo } = producto as any;

    const pantalla = undefined;

    const bateria = undefined;

    const camara = undefined;

    const { ram } = producto as any;

    const puertoCarga = undefined;

    const { compatibilidad } = producto as any;

    const { dimensiones } = producto as any;

    const { peso } = producto as any;

    const { colores } = producto as any;

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