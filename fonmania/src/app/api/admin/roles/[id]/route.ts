import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
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

// DELETE - Eliminar rol
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

    // Verificar si el rol existe
    const existingRole = await prisma.rol.findUnique({
      where: { ID: id },
      include: {
        rolPermisos: {
          include: {
            usuarios: true
          }
        }
      }
    });

    if (!existingRole) {
      return NextResponse.json(
        { error: 'Rol no encontrado' },
        { status: 404 }
      );
    }

    // Verificar si el rol tiene usuarios asignados
    const hasUsers = existingRole.rolPermisos.some(rp => rp.usuarios.length > 0);

    if (hasUsers) {
      return NextResponse.json(
        { error: 'No se puede eliminar el rol porque tiene usuarios asignados' },
        { status: 400 }
      );
    }

    // Eliminar relaciones RolPermiso primero
    await prisma.rolPermiso.deleteMany({
      where: { rolID: id }
    });

    // Eliminar rol
    await prisma.rol.delete({
      where: { ID: id }
    });

    // Registrar actividad
    try {
      await prisma.actividad.create({
        data: {
          tipo: 'rol_eliminado',
          descripcion: `Rol eliminado: ${existingRole.nombre}`,
          usuarioID: null,
          fecha: new Date()
        }
      });
    } catch (activityError) {
      console.error('Error registrando actividad:', activityError);
    }

    return NextResponse.json({ message: 'Rol eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting role:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
