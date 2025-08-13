import { NextRequest, NextResponse } from 'next/server';
import { ActivityService } from '../../../../services/activityService';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación de admin
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Token no proporcionado' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
    } catch (error) {
      return NextResponse.json({ message: 'Token inválido' }, { status: 401 });
    }

    // Obtener parámetros de consulta
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');

    // Obtener actividades recientes
    const activities = await ActivityService.getRecentActivities(limit);

    return NextResponse.json({
      success: true,
      activities
    });

  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
