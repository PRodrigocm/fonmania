import { NextRequest, NextResponse } from 'next/server';

// Configuración de ejemplo (en una implementación real esto vendría de una base de datos)
let configuracion = {
  nombreSitio: 'Fonmania',
  descripcion: 'Tu tienda de confianza para celulares y accesorios',
  emailContacto: 'contacto@fonmania.com',
  telefono: '+1 234 567 8900',
  direccion: 'Calle Principal 123, Ciudad',
  redesSociales: {
    facebook: 'https://facebook.com/fonmania',
    instagram: 'https://instagram.com/fonmania',
    twitter: 'https://twitter.com/fonmania',
  },
  configuracionEmail: {
    servidor: 'smtp.gmail.com',
    puerto: '587',
    usuario: 'admin@fonmania.com',
    contrasena: '',
  },
};

// GET - Obtener configuración
export async function GET() {
  try {
    // Retornar la configuración con la estructura correcta que espera el frontend
    return NextResponse.json(configuracion);
  } catch (error) {
    console.error('Error obteniendo configuración:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Actualizar configuración
    configuracion = {
      ...configuracion,
      ...data,
      redesSociales: {
        ...configuracion.redesSociales,
        ...data.redesSociales,
      },
      configuracionEmail: {
        ...configuracion.configuracionEmail,
        ...data.configuracionEmail,
      },
    };

    return NextResponse.json(configuracion);
  } catch (error) {
    console.error('Error actualizando configuración:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 