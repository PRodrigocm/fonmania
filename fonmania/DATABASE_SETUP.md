# Configuración de Base de Datos - Fonmania

## Requisitos Previos

1. **Node.js** (versión 18 o superior)
2. **PostgreSQL** instalado y configurado
3. **Prisma CLI** (incluido en las dependencias)

## Pasos para Configurar la Base de Datos

### 1. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/fonmania"
JWT_SECRET="tu_secret_jwt_muy_seguro"
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Generar el Cliente de Prisma

```bash
npx prisma generate
```

### 4. Ejecutar las Migraciones

```bash
npx prisma migrate dev --name init
```

### 5. Poblar la Base de Datos con Datos de Ejemplo

```bash
npm run seed
```

## Estructura de la Base de Datos

### Tablas Principales

- **Producto**: Información básica de productos
- **Categoria**: Categorías de productos (Celular, Accesorio, etc.)
- **Marca**: Marcas de productos
- **ImagenProducto**: Imágenes de productos con tipos (principal, galería)
- **ProductoDetalle**: Detalles específicos de cada producto
- **DetalleCategoria**: Definición de atributos por categoría

### Relaciones

- Un producto pertenece a una categoría y una marca
- Un producto puede tener múltiples imágenes
- Un producto puede tener múltiples detalles específicos
- Los detalles se definen por categoría (color, almacenamiento, etc.)

## Datos de Ejemplo Incluidos

### Productos
- **iPhone 15 Pro** (Apple) - S/ 4,999.00
- **Samsung Galaxy S24 Ultra** (Samsung) - S/ 4,599.00
- **Carcasa Protectora iPhone 15 Pro** (Spigen) - S/ 89.90
- **Cargador Inalámbrico MagSafe** (Apple) - S/ 159.90

### Categorías
- **Celular**: Para smartphones
- **Accesorio**: Para accesorios y complementos

### Marcas
- **Apple**
- **Samsung**
- **Spigen**

## Comandos Útiles

### Ver la Base de Datos
```bash
npx prisma studio
```

### Resetear la Base de Datos
```bash
npx prisma migrate reset
npm run seed
```

### Ver el Esquema
```bash
npx prisma format
```

## API Endpoints

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos?categoria=Celular` - Filtrar por categoría
- `GET /api/productos/[id]` - Obtener producto específico

### Parámetros de Consulta
- `categoria`: Filtrar por categoría
- `limit`: Limitar número de resultados
- `offset`: Paginación

## Notas Importantes

1. **Imágenes**: Las imágenes deben estar en la carpeta `public/img/`
2. **Tipos de Imagen**: 
   - `principal`: Imagen principal del producto
   - `galeria`: Imágenes adicionales para la galería
3. **Detalles**: Los detalles se buscan por nombre de atributo en minúsculas
4. **Autenticación**: El sistema requiere JWT para operaciones protegidas

## Solución de Problemas

### Error de Conexión a la Base de Datos
1. Verificar que PostgreSQL esté ejecutándose
2. Verificar las credenciales en `.env`
3. Verificar que la base de datos exista

### Error en el Seed
1. Verificar que las migraciones se ejecutaron correctamente
2. Verificar que las imágenes existan en `public/img/`
3. Ejecutar `npx prisma migrate reset` y luego `npm run seed`

### Error de Tipos en TypeScript
1. Ejecutar `npx prisma generate`
2. Reiniciar el servidor de desarrollo 