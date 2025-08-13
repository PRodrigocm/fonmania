import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de roles y usuarios...');

  // Crear roles básicos si no existen
  const adminRole = await prisma.rol.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      nombre: 'Administrador'
    }
  });

  const supervisorRole = await prisma.rol.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      nombre: 'Supervisor'
    }
  });

  const userRole = await prisma.rol.upsert({
    where: { ID: 3 },
    update: {},
    create: {
      ID: 3,
      nombre: 'Usuario'
    }
  });

  console.log('✅ Roles creados:', { adminRole, supervisorRole, userRole });

  // Crear permisos básicos si no existen
  const adminPermiso = await prisma.permiso.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      descripcion: 'Acceso completo al sistema'
    }
  });

  const supervisorPermiso = await prisma.permiso.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      descripcion: 'Supervisión y gestión de usuarios'
    }
  });

  const userPermiso = await prisma.permiso.upsert({
    where: { ID: 3 },
    update: {},
    create: {
      ID: 3,
      descripcion: 'Acceso básico de usuario'
    }
  });

  console.log('✅ Permisos creados:', { adminPermiso, supervisorPermiso, userPermiso });

  // Crear relaciones RolPermiso si no existen
  const adminRolPermiso = await prisma.rolPermiso.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      ID: 1,
      rolID: adminRole.ID,
      permisoID: adminPermiso.ID
    }
  });

  const supervisorRolPermiso = await prisma.rolPermiso.upsert({
    where: { ID: 2 },
    update: {},
    create: {
      ID: 2,
      rolID: supervisorRole.ID,
      permisoID: supervisorPermiso.ID
    }
  });

  const userRolPermiso = await prisma.rolPermiso.upsert({
    where: { ID: 3 },
    update: {},
    create: {
      ID: 3,
      rolID: userRole.ID,
      permisoID: userPermiso.ID
    }
  });

  console.log('✅ RolPermisos creados:', { adminRolPermiso, supervisorRolPermiso, userRolPermiso });

  // Crear usuarios de prueba si no existen
  const hashedPassword = await bcrypt.hash('123456', 10);

  const adminUser = await prisma.usuario.upsert({
    where: { correo: 'admin@fonmania.com' },
    update: {},
    create: {
      correo: 'admin@fonmania.com',
      password: hashedPassword,
      nombre: 'Administrador Sistema',
      direccion: 'Lima, Perú',
      DNI: 12345678,
      rolpermisoID: adminRolPermiso.ID,
      fecha_creacion: new Date()
    }
  });

  const supervisorUser = await prisma.usuario.upsert({
    where: { correo: 'supervisor@fonmania.com' },
    update: {},
    create: {
      correo: 'supervisor@fonmania.com',
      password: hashedPassword,
      nombre: 'Juan Supervisor',
      direccion: 'Callao, Perú',
      DNI: 87654321,
      rolpermisoID: supervisorRolPermiso.ID,
      fecha_creacion: new Date()
    }
  });

  const normalUser = await prisma.usuario.upsert({
    where: { correo: 'usuario@fonmania.com' },
    update: {},
    create: {
      correo: 'usuario@fonmania.com',
      password: hashedPassword,
      nombre: 'María Cliente',
      direccion: 'Arequipa, Perú',
      DNI: 11223344,
      rolpermisoID: userRolPermiso.ID,
      fecha_creacion: new Date()
    }
  });

  console.log('✅ Usuarios creados:', { adminUser, supervisorUser, normalUser });

  // Verificar datos creados
  const totalRoles = await prisma.rol.count();
  const totalPermisos = await prisma.permiso.count();
  const totalRolPermisos = await prisma.rolPermiso.count();
  const totalUsuarios = await prisma.usuario.count();

  console.log('📊 Resumen de datos:');
  console.log(`- Roles: ${totalRoles}`);
  console.log(`- Permisos: ${totalPermisos}`);
  console.log(`- RolPermisos: ${totalRolPermisos}`);
  console.log(`- Usuarios: ${totalUsuarios}`);

  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
