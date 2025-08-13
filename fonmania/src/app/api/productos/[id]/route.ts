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
      ID: producto.ID,
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

export async function PUT(
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

    const body = await request.json();
    
    // Debug: verificar datos recibidos en PUT
    console.log('Body recibido en PUT API:', body);
    console.log('PUT - categoriaID:', body.categoriaID, 'tipo:', typeof body.categoriaID);
    console.log('PUT - marcaID:', body.marcaID, 'tipo:', typeof body.marcaID);
    console.log('PUT - stock:', body.stock, 'tipo:', typeof body.stock);
    
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
      promocionID,
    } = body;

    // Actualizar producto
    const producto = await prisma.producto.update({
      where: { ID: idNum },
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
      },
      include: {
        categoria: true,
        marca: true,
        imagenes: true
      }
    });

    // Actualizar imágenes
    if (imagenes && imagenes.length > 0) {
      // Eliminar imágenes existentes
      await prisma.imagenProducto.deleteMany({
        where: { productoID: idNum }
      });

      // Crear nuevas imágenes
      await prisma.imagenProducto.createMany({
        data: imagenes.map((img: any) => ({
          productoID: idNum,
          url: img.url,
          tipo: img.tipo || 'secundaria',
          orden: img.orden || 1
        }))
      });
    } else if (imagen) {
      // Manejar imagen única (compatibilidad)
      await prisma.imagenProducto.deleteMany({
        where: { productoID: idNum }
      });

      await prisma.imagenProducto.create({
        data: {
          productoID: idNum,
          url: imagen,
          tipo: 'principal',
          orden: 1
        }
      });
    }

    return NextResponse.json(producto);
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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

    await prisma.producto.delete({
      where: { ID: idNum }
    });

    return NextResponse.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 