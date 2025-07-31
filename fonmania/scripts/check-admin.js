const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function checkAdmin() {
  try {
    console.log('Verificando usuario administrador...');
    
    const admin = await prisma.usuarioAdmin.findUnique({
      where: { correo: 'admin@fonmania.com' }
    });

    if (admin) {
      console.log('✅ Usuario encontrado:');
      console.log('ID:', admin.id);
      console.log('Email:', admin.correo);
      console.log('Contraseña hasheada:', admin.contrasena);
      console.log('Creado en:', admin.creadoEn);
      
      // Verificar si la contraseña 'admin123' coincide
      const isValid = await bcrypt.compare('admin123', admin.contrasena);
      console.log('¿Contraseña admin123 es válida?', isValid);
      
      if (!isValid) {
        console.log('❌ La contraseña no coincide. Recreando usuario...');
        await prisma.usuarioAdmin.delete({
          where: { id: admin.id }
        });
        
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const newAdmin = await prisma.usuarioAdmin.create({
          data: {
            correo: 'admin@fonmania.com',
            contrasena: hashedPassword
          }
        });
        
        console.log('✅ Usuario recreado exitosamente');
        console.log('Nuevo ID:', newAdmin.id);
      }
    } else {
      console.log('❌ Usuario no encontrado. Creando...');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newAdmin = await prisma.usuarioAdmin.create({
        data: {
          correo: 'admin@fonmania.com',
          contrasena: hashedPassword
        }
      });
      
      console.log('✅ Usuario creado exitosamente');
      console.log('ID:', newAdmin.id);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAdmin(); 