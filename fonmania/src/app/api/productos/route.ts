import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    // Construir filtros
    const where: { categoria?: { nombre: string } } = {};
    if (categoria) {
      where.categoria = {
        nombre: categoria
      };
    }

    // Construir paginación
    const take = limit ? parseInt(limit) : undefined;
    const skip = offset ? parseInt(offset) : undefined;

    // Obtener productos de la base de datos
    const productos = await prisma.producto.findMany({
      where,
      take,
      skip,
      orderBy: {
        ID: "desc"
      },
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

    // Transformar datos para el formato esperado por el frontend
    const productosFormateados = productos.map(producto => {
      const {
        color,
        almacenamiento,
        modelo,
        ram,
        dimensiones,
        sistema_operativo
      } = producto as any; // usamos any para ignorar los campos faltantes en el tipo generado

      return {
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
        ram,
        dimensiones,
        sistema_operativo,
        descripcion: producto.descripcion
      };
    });

    return NextResponse.json(productosFormateados);
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 
