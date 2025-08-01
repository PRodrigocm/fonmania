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
        },
        detalles: {
          include: {
            detalleCategoria: true
          }
        }
      }
    });

    // Transformar datos para el formato esperado por el frontend
    const productosFormateados = productos.map(producto => {
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
