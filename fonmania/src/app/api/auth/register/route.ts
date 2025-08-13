import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ActivityService } from '../../../../services/activityService';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, password, direccion, dni } = await request.json();

    if (!nombre || !email || !password || !direccion || !dni) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const usuarioExistente = await prisma.usuario.findFirst({
      where: { correo: email }
    });

    if (usuarioExistente) {
      return NextResponse.json(
        { message: 'El email ya está registrado' },
        { status: 400 }
      );
    }

    // Verificar si el DNI ya existe
    const dniExistente = await prisma.usuario.findFirst({
      where: { DNI: dni }
    });

    if (dniExistente) {
      return NextResponse.json(
        { message: 'El DNI ya está registrado' },
        { status: 400 }
      );
    }

    // Obtener el rol de cliente por defecto
    const rolCliente = await prisma.rol.findFirst({
      where: { nombre: 'Usuario' }
    });

    if (!rolCliente) {
      return NextResponse.json(
        { message: 'Error de configuración del sistema' },
        { status: 500 }
      );
    }

    // Obtener el permiso básico (asumiendo que existe un permiso "Acceso básico")
    const permisoBasico = await prisma.permiso.findFirst({
      where: { descripcion: 'Acceso básico' }
    });

    if (!permisoBasico) {
      return NextResponse.json(
        { message: 'Error de configuración del sistema' },
        { status: 500 }
      );
    }

    // Crear o obtener RolPermiso
    let rolPermiso = await prisma.rolPermiso.findFirst({
      where: {
        rolID: rolCliente.ID,
        permisoID: permisoBasico.ID
      }
    });

    if (!rolPermiso) {
      rolPermiso = await prisma.rolPermiso.create({
        data: {
          rolID: rolCliente.ID,
          permisoID: permisoBasico.ID
        }
      });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo: email,
        password: hashedPassword,
        direccion,
        DNI: dni,
        fecha_creacion: new Date(),
        rolpermisoID: rolPermiso.ID
      },
      include: {
        rolPermiso: {
          include: {
            rol: true,
            permiso: true
          }
        }
      }
    });

    // Generar JWT
    const token = jwt.sign(
      { 
        userId: nuevoUsuario.ID, 
        email: nuevoUsuario.correo,
        nombre: nuevoUsuario.nombre,
        rol: nuevoUsuario.rolPermiso.rol.nombre
      },
      process.env.JWT_SECRET || 'tu-secret-key',
      { expiresIn: '7d' }
    );

    // Registrar actividad
    await ActivityService.logUserRegistered(nuevoUsuario.nombre, nuevoUsuario.ID);

    // Retornar datos del usuario (sin contraseña)
    const userData = {
      id: nuevoUsuario.ID,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.correo,
      direccion: nuevoUsuario.direccion,
      dni: nuevoUsuario.DNI,
      rol: nuevoUsuario.rolPermiso.rol.nombre
    };

    return NextResponse.json({
      token,
      user: userData,
      message: 'Usuario registrado exitosamente'
    });

  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 