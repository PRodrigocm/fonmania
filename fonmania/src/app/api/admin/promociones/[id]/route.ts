import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const promocionId = parseInt(id);
    
    // TODO: Implementar lógica de eliminación de promoción
    console.log('Eliminando promoción con ID:', promocionId);
    
    // En una implementación real, esto eliminaría la promoción con ID promocionId de la base de datos
    // Por ahora, solo retornamos éxito
    
    return NextResponse.json({ message: 'Promoción eliminada correctamente' });
  } catch (error) {
    console.error('Error eliminando promoción:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const promocionId = parseInt(id);
    const data = await request.json();
    
    // TODO: Implementar lógica de actualización de promoción
    console.log('Actualizando promoción con ID:', promocionId);
    
    // En una implementación real, esto actualizaría la promoción con ID promocionId en la base de datos
    // Por ahora, solo retornamos los datos recibidos
    
    const promocionActualizada = {
      id: promocionId,
      ...data,
      valor: parseFloat(data.valor),
    };
    
    return NextResponse.json(promocionActualizada);
  } catch (error) {
    console.error('Error actualizando promoción:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 