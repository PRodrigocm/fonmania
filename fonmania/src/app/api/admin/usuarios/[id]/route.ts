import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Verificar token de admin
function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
  } catch (error) {
    return null;
  }
}

// PUT - Actualizar usuario
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const id = parseInt(params.id);
    const { correo, password, nombre, direccion, DNI, rolpermisoID } = await request.json();

    // Validaciones
    if (!correo || !nombre || !direccion || !DNI || !rolpermisoID) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el usuario existe
    const existingUser = await prisma.usuario.findUnique({
      where: { ID: id }
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Verificar si el correo ya existe (excluyendo el usuario actual)
    const emailExists = await prisma.usuario.findFirst({
      where: {
        correo,
        NOT: { ID: id }
      }
    });

    if (emailExists) {
      return NextResponse.json(
        { error: 'El correo ya está registrado por otro usuario' },
        { status: 400 }
      );
    }

    // Verificar si el DNI ya existe (excluyendo el usuario actual)
    const dniExists = await prisma.usuario.findFirst({
      where: {
        DNI: parseInt(DNI),
        NOT: { ID: id }
      }
    });

    if (dniExists) {
      return NextResponse.json(
        { error: 'El DNI ya está registrado por otro usuario' },
        { status: 400 }
      );
    }

    // Preparar datos de actualización
    const updateData: any = {
      correo,
      nombre,
      direccion,
      DNI: parseInt(DNI),
      rolpermisoID: parseInt(rolpermisoID)
    };

    // Si se proporciona nueva contraseña, encriptarla
    if (password && password.trim() !== '') {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Actualizar usuario
    const usuarioActualizado = await prisma.usuario.update({
      where: { ID: id },
      data: updateData,
      include: {
        rolPermiso: true
      }
    });

    // Registrar actividad
    try {
      await prisma.actividad.create({
        data: {
          tipo: 'usuario_actualizado',
          descripcion: `Usuario actualizado: ${nombre}`,
          usuarioID: id,
          fecha: new Date()
        }
      });
    } catch (activityError) {
      console.error('Error registrando actividad:', activityError);
    }

    return NextResponse.json(usuarioActualizado);
  } catch (error) {
    console.error('Error updating usuario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar usuario
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const id = parseInt(params.id);

    // Verificar si el usuario existe
    const existingUser = await prisma.usuario.findUnique({
      where: { ID: id },
      include: {
        _count: {
          select: {
            pedidos: true,
            favoritos: true,
            resenas: true
          }
        }
      }
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Verificar si el usuario tiene datos relacionados
    const hasRelatedData = existingUser._count.pedidos > 0 || 
                          existingUser._count.favoritos > 0 || 
                          existingUser._count.resenas > 0;

    if (hasRelatedData) {
      return NextResponse.json(
        { error: 'No se puede eliminar el usuario porque tiene pedidos, favoritos o reseñas asociadas' },
        { status: 400 }
      );
    }

    // Eliminar usuario
    await prisma.usuario.delete({
      where: { ID: id }
    });

    // Registrar actividad
    try {
      await prisma.actividad.create({
        data: {
          tipo: 'usuario_eliminado',
          descripcion: `Usuario eliminado: ${existingUser.nombre}`,
          usuarioID: null,
          fecha: new Date()
        }
      });
    } catch (activityError) {
      console.error('Error registrando actividad:', activityError);
    }

    return NextResponse.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting usuario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
