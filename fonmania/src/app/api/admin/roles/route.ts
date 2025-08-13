import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Verificar token de admin
function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  console.log('Admin Roles API - authHeader:', authHeader ? 'presente' : 'ausente');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Admin Roles API - Token no válido o ausente');
    return null;
  }

  const token = authHeader.substring(7);
  console.log('Admin Roles API - Token extraído:', token.substring(0, 20) + '...');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
    console.log('Admin Roles API - Token verificado exitosamente:', decoded);
    return decoded;
  } catch (error) {
    console.log('Admin Roles API - Error verificando token:', error);
    return null;
  }
}

// GET - Obtener todos los roles de permisos
export async function GET(request: NextRequest) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const roles = await prisma.rol.findMany({
      include: {
        _count: {
          select: {
            rolPermisos: {
              where: {
                usuarios: {
                  some: {}
                }
              }
            }
          }
        }
      },
      orderBy: {
        ID: 'asc'
      }
    });

    return NextResponse.json(roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo rol
export async function POST(request: NextRequest) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { nombre, descripcion } = await request.json();

    // Validaciones
    if (!nombre || !descripcion) {
      return NextResponse.json(
        { error: 'El nombre y la descripción son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el nombre ya existe
    const existingRole = await prisma.rol.findFirst({
      where: { 
        nombre: {
          equals: nombre,
          mode: 'insensitive'
        }
      }
    });

    if (existingRole) {
      return NextResponse.json(
        { error: 'Ya existe un rol con ese nombre' },
        { status: 400 }
      );
    }

    // Crear rol
    const nuevoRol = await prisma.rol.create({
      data: {
        nombre: nombre.trim()
      }
    });

    // Registrar actividad
    try {
      await prisma.actividad.create({
        data: {
          tipo: 'rol_creado',
          descripcion: `Nuevo rol creado: ${nombre}`,
          usuarioID: null,
          fecha: new Date()
        }
      });
    } catch (activityError) {
      console.error('Error registrando actividad:', activityError);
    }

    return NextResponse.json(nuevoRol, { status: 201 });
  } catch (error) {
    console.error('Error creating role:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
