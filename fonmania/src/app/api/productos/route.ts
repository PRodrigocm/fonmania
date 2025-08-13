import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ActivityService } from "../../../services/activityService";

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
        id: producto.ID, // Mapear ID mayúscula a id minúscula para consistencia con el frontend
        ID: producto.ID, // Mantener también ID mayúscula por compatibilidad
        nombre: producto.nombre,
        precio: parseFloat(producto.precio.toString()),
        imagen: producto.imagenes.find(img => img.tipo === 'principal')?.url || producto.imagenes[0]?.url || "",
        imagenes: producto.imagenes.map(img => img.url),
        stock: producto.stock,
        categoriaID: producto.categoriaID,
        categoria: producto.categoria.nombre,
        marcaID: producto.marcaID,
        marca: producto.marca.nombre,
        descripcion: producto.descripcion,
        ram,
        almacenamiento,
        dimensiones,
        modelo,
        color,
        sistema_operativo
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Debug: verificar datos recibidos
    console.log('Body recibido en API:', body);
    console.log('categoriaID recibido:', body.categoriaID, 'tipo:', typeof body.categoriaID);
    console.log('marcaID recibido:', body.marcaID, 'tipo:', typeof body.marcaID);
    console.log('stock recibido:', body.stock, 'tipo:', typeof body.stock);
    
    const {
      nombre,
      precio,
      imagen,
      imagenes,
      stock,
      categoriaID,
      marcaID,
      descripcion,
      ram,
      almacenamiento,
      dimensiones,
      modelo,
      color,
      sistema_operativo,
      pantalla,
      bateria,
      camara,
      puertoCarga,
      compatibilidad,
      peso,
      colores,
      precioPromocion,
      precioDescuento,
      textoPromocion,
    } = body;

    // Crear producto
    const producto = await prisma.producto.create({
      data: {
        nombre,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        categoriaID: parseInt(categoriaID),
        marcaID: parseInt(marcaID),
        descripcion,
        ram: ram || '',
        almacenamiento: almacenamiento || '',
        dimensiones: dimensiones || '',
        modelo: modelo || '',
        color: color || '',
        sistema_operativo: sistema_operativo || '',
        imagenes: {
          create: imagenes && imagenes.length > 0 
            ? imagenes.map((img: any) => ({
                url: img.url,
                tipo: img.tipo || 'secundaria',
                orden: img.orden || 1
              }))
            : imagen 
              ? [{
                  url: imagen,
                  tipo: 'principal',
                  orden: 1
                }]
              : []
        }
      },
      include: {
        categoria: true,
        marca: true,
        imagenes: true
      }
    });

    // Registrar actividad
    await ActivityService.logProductCreated(producto.nombre);

    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error creando producto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 
