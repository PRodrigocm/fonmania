const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Verificar si ya existe un admin
    const existingAdmin = await prisma.usuarioAdmin.findFirst({
      where: { correo: 'admin@fonmania.com' }
    });

    if (existingAdmin) {
      console.log('El administrador ya existe');
      return;
    }

    // Crear hash de la contraseña
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Crear el usuario administrador
    const admin = await prisma.usuarioAdmin.create({
      data: {
        correo: 'admin@fonmania.com',
        contrasena: hashedPassword,
      }
    });

    console.log('Administrador creado exitosamente:', admin.correo);
    console.log('Credenciales de acceso:');
    console.log('Email: admin@fonmania.com');
    console.log('Contraseña: admin123');
  } catch (error) {
    console.error('Error creando administrador:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin(); 