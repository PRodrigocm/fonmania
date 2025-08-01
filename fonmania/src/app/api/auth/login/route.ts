import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Buscar usuario por email
    const usuario = await prisma.usuario.findFirst({
      where: { correo: email },
      include: {
        rolPermiso: {
          include: {
            rol: true,
            permiso: true
          }
        }
      }
    });

    if (!usuario) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const passwordValid = await bcrypt.compare(password, usuario.password);
    if (!passwordValid) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar JWT
    const token = jwt.sign(
      { 
        userId: usuario.ID, 
        email: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rolPermiso.rol.nombre
      },
      process.env.JWT_SECRET || 'tu-secret-key',
      { expiresIn: '7d' }
    );

    // Retornar datos del usuario (sin contraseña)
    const userData = {
      id: usuario.ID,
      nombre: usuario.nombre,
      email: usuario.correo,
      direccion: usuario.direccion,
      dni: usuario.DNI,
      rol: usuario.rolPermiso.rol.nombre
    };

    return NextResponse.json({
      token,
      user: userData,
      message: 'Login exitoso'
    });

  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 