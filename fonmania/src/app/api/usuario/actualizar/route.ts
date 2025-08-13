import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
  try {
    // Obtener token del header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Token no proporcionado' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tu-secret-key') as any;
    const userId = decoded.userId;

    const { nombre, email, direccion, dni } = await request.json();

    // Validar campos requeridos
    if (!nombre || !email || !direccion || !dni) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe (excluyendo al usuario actual)
    const emailExistente = await prisma.usuario.findFirst({
      where: {
        correo: email,
        NOT: { ID: userId }
      }
    });

    if (emailExistente) {
      return NextResponse.json(
        { message: 'El email ya está registrado por otro usuario' },
        { status: 400 }
      );
    }

    // Verificar si el DNI ya existe (excluyendo al usuario actual)
    const dniExistente = await prisma.usuario.findFirst({
      where: {
        DNI: dni,
        NOT: { ID: userId }
      }
    });

    if (dniExistente) {
      return NextResponse.json(
        { message: 'El DNI ya está registrado por otro usuario' },
        { status: 400 }
      );
    }

    // Actualizar usuario
    const usuarioActualizado = await prisma.usuario.update({
      where: { ID: userId },
      data: {
        nombre,
        correo: email,
        direccion,
        DNI: dni
      },
      select: {
        ID: true,
        nombre: true,
        correo: true,
        direccion: true,
        DNI: true,
        fecha_creacion: true
      }
    });

    return NextResponse.json({
      message: 'Datos actualizados exitosamente',
      usuario: usuarioActualizado
    });

  } catch (error) {
    console.error('Error actualizando usuario:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Endpoint para cambiar contraseña
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Token no proporcionado' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tu-secret-key') as any;
    const userId = decoded.userId;

    const { passwordActual, nuevaPassword } = await request.json();

    if (!passwordActual || !nuevaPassword) {
      return NextResponse.json(
        { message: 'Contraseña actual y nueva contraseña son requeridas' },
        { status: 400 }
      );
    }

    // Obtener usuario actual
    const usuario = await prisma.usuario.findUnique({
      where: { ID: userId }
    });

    if (!usuario) {
      return NextResponse.json(
        { message: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Verificar contraseña actual
    const esPasswordValida = await bcrypt.compare(passwordActual, usuario.password);
    if (!esPasswordValida) {
      return NextResponse.json(
        { message: 'Contraseña actual incorrecta' },
        { status: 400 }
      );
    }

    // Hashear nueva contraseña
    const hashedPassword = await bcrypt.hash(nuevaPassword, 10);

    // Actualizar contraseña
    await prisma.usuario.update({
      where: { ID: userId },
      data: { password: hashedPassword }
    });

    return NextResponse.json({
      message: 'Contraseña actualizada exitosamente'
    });

  } catch (error) {
    console.error('Error cambiando contraseña:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
