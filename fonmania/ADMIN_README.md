# Panel de Administración - Fonmania

## Descripción

El panel de administración de Fonmania es una interfaz completa para gestionar todos los aspectos del negocio, incluyendo productos, promociones, imágenes y estadísticas.

## Características

### 🔐 Autenticación
- Sistema de login seguro con JWT
- Protección de rutas administrativas
- Gestión de sesiones

### 📊 Dashboard
- Estadísticas en tiempo real
- Métricas de ventas y productos
- Gráficos de rendimiento
- Actividad reciente

### 📱 Gestión de Productos
- **Celulares**: CRUD completo con especificaciones técnicas
- **Accesorios**: Gestión de accesorios con detalles de compatibilidad
- Búsqueda y filtrado avanzado
- Gestión de imágenes de productos

### 🏷️ Promociones
- Creación y gestión de descuentos
- Tipos de promoción (porcentaje o monto fijo)
- Fechas de vigencia
- Estado activo/inactivo

### 🖼️ Gestión de Imágenes
- Subida y organización de imágenes
- Categorización por tipo (celular, accesorio, banner)
- Ordenamiento y activación/desactivación

### ⚙️ Configuración
- Información general del sitio
- Configuración de redes sociales
- Configuración de email SMTP
- Acciones del sistema

### 📈 Estadísticas
- Análisis de ventas por período
- Productos más vendidos
- Estado de pedidos
- Métricas de usuarios

## Acceso al Panel

### Credenciales por defecto:
- **Email**: admin@fonmania.com
- **Contraseña**: admin123

### URL de acceso:
```
http://localhost:3000/admin/login
```

## Estructura de Archivos

```
src/app/admin/
├── layout.tsx              # Layout principal del admin
├── login/
│   └── page.tsx           # Página de login
├── dashboard/
│   └── page.tsx           # Dashboard principal
├── celulares/
│   └── page.tsx           # Gestión de celulares
├── accesorios/
│   └── page.tsx           # Gestión de accesorios
├── promociones/
│   └── page.tsx           # Gestión de promociones
├── imagenes/
│   └── page.tsx           # Gestión de imágenes
├── estadisticas/
│   └── page.tsx           # Estadísticas del negocio
└── configuracion/
    └── page.tsx           # Configuración del sistema
```

## APIs del Panel

### Autenticación
- `POST /api/admin/login` - Login de administrador

### Dashboard
- `GET /api/admin/dashboard/stats` - Estadísticas del dashboard

### Productos
- `GET /api/celulares` - Listar celulares
- `POST /api/celulares` - Crear celular
- `PUT /api/celulares/[id]` - Actualizar celular
- `DELETE /api/celulares/[id]` - Eliminar celular

- `GET /api/accesorios` - Listar accesorios
- `POST /api/accesorios` - Crear accesorio
- `PUT /api/accesorios/[id]` - Actualizar accesorio
- `DELETE /api/accesorios/[id]` - Eliminar accesorio

### Promociones
- `GET /api/admin/promociones` - Listar promociones
- `POST /api/admin/promociones` - Crear promoción
- `PUT /api/admin/promociones/[id]` - Actualizar promoción
- `DELETE /api/admin/promociones/[id]` - Eliminar promoción

### Imágenes
- `GET /api/admin/imagenes` - Listar imágenes
- `POST /api/admin/imagenes` - Subir imagen
- `DELETE /api/admin/imagenes/[id]` - Eliminar imagen

### Estadísticas
- `GET /api/admin/estadisticas` - Obtener estadísticas detalladas

### Configuración
- `GET /api/admin/configuracion` - Obtener configuración
- `PUT /api/admin/configuracion` - Actualizar configuración

## Tecnologías Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM
- **Authentication**: JWT, bcryptjs
- **State Management**: React Hooks

## Características de Diseño

### 🎨 Tema
- Diseño blanco y negro moderno
- Interfaz limpia y profesional
- Componentes reutilizables
- Responsive design

### 📱 Responsividad
- Mobile-first approach
- Sidebar colapsible en móviles
- Grid adaptativo
- Modales optimizados

### ⚡ Performance
- Lazy loading de componentes
- Optimización de imágenes
- Caching de datos
- Loading states

## Instalación y Configuración

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar base de datos**:
```bash
npx prisma generate
npx prisma db push
```

3. **Crear usuario administrador**:
```bash
node scripts/create-admin.js
```

4. **Ejecutar en desarrollo**:
```bash
npm run dev
```

## Variables de Entorno

Crear un archivo `.env.local` con:

```env
DATABASE_URL="tu_url_de_base_de_datos"
JWT_SECRET="tu_secreto_jwt"
```

## Seguridad

- Autenticación JWT con expiración
- Contraseñas hasheadas con bcrypt
- Validación de datos en APIs
- Protección de rutas administrativas
- Sanitización de inputs

## Funcionalidades Futuras

- [ ] Gestión de usuarios
- [ ] Sistema de roles y permisos
- [ ] Backup automático de base de datos
- [ ] Notificaciones en tiempo real
- [ ] Exportación de reportes
- [ ] Integración con pasarelas de pago
- [ ] Sistema de inventario
- [ ] Gestión de pedidos
- [ ] Chat de soporte
- [ ] Analytics avanzados

## Soporte

Para soporte técnico o preguntas sobre el panel de administración, contactar al equipo de desarrollo. 