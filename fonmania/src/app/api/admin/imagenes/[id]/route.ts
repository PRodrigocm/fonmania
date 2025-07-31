import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
      const { id } = await params;
  const imagenId = parseInt(id);
  
  // TODO: Implementar lógica de eliminación de imagen
  console.log('Eliminando imagen con ID:', imagenId);
    
    // En una implementación real, esto eliminaría la imagen con ID imagenId de la base de datos
    // Por ahora, solo retornamos éxito
    
    return NextResponse.json({ message: 'Imagen eliminada correctamente' });
  } catch (error) {
    console.error('Error eliminando imagen:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 