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

// GET - Obtener todos los usuarios
export async function GET(request: NextRequest) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const usuarios = await prisma.usuario.findMany({
      include: {
        rolPermiso: {
          include: {
            rol: true,
            permiso: true
          }
        },
        _count: {
          select: {
            pedidos: true,
            favoritos: true
          }
        }
      },
      orderBy: {
        fecha_creacion: 'desc'
      }
    });

    return NextResponse.json(usuarios);
  } catch (error) {
    console.error('Error fetching usuarios:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo usuario
export async function POST(request: NextRequest) {
  try {
    const decoded = verifyAdminToken(request);
    if (!decoded) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { correo, password, nombre, direccion, DNI, rolpermisoID } = await request.json();

    // Validaciones
    if (!correo || !password || !nombre || !direccion || !DNI || !rolpermisoID) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el correo ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { correo }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El correo ya está registrado' },
        { status: 400 }
      );
    }

    // Verificar si el DNI ya existe
    const existingDNI = await prisma.usuario.findUnique({
      where: { DNI: parseInt(DNI) }
    });

    if (existingDNI) {
      return NextResponse.json(
        { error: 'El DNI ya está registrado' },
        { status: 400 }
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        correo,
        password: hashedPassword,
        nombre,
        direccion,
        DNI: parseInt(DNI),
        rolpermisoID: parseInt(rolpermisoID),
        fecha_creacion: new Date()
      },
      include: {
        rolPermiso: true
      }
    });

    // Registrar actividad
    try {
      await prisma.actividad.create({
        data: {
          tipo: 'usuario_creado',
          descripcion: `Nuevo usuario creado: ${nombre}`,
          usuarioID: nuevoUsuario.ID,
          fecha: new Date()
        }
      });
    } catch (activityError) {
      console.error('Error registrando actividad:', activityError);
    }

    return NextResponse.json(nuevoUsuario, { status: 201 });
  } catch (error) {
    console.error('Error creating usuario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
