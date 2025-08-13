import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import jwt from 'jsonwebtoken';

function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.substring(7);
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const admin = verifyAdminToken(request);
  if (!admin) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No se ha subido ningún archivo' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Crear un nombre de archivo único para evitar sobreescrituras
    const extension = file.name.split('.').pop();
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
    const filename = `producto_${uniqueSuffix}.${extension}`;
    
    const serverPath = join(process.cwd(), 'public/uploads/productos', filename);

    await writeFile(serverPath, buffer);

    const publicUrl = `/uploads/productos/${filename}`;

    return NextResponse.json({ success: true, url: publicUrl });

  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return NextResponse.json({ success: false, error: 'Error al subir el archivo' }, { status: 500 });
  }
}
