/*
  Warnings:

  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `creadoEn` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the `Accesorio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Celular` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemPedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductoGeneral` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioAdmin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fecha` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioID` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemPedido" DROP CONSTRAINT "ItemPedido_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemPedido" DROP CONSTRAINT "ItemPedido_productoGeneralId_fkey";

-- DropForeignKey
ALTER TABLE "ProductoGeneral" DROP CONSTRAINT "ProductoGeneral_accesorioId_fkey";

-- DropForeignKey
ALTER TABLE "ProductoGeneral" DROP CONSTRAINT "ProductoGeneral_celularId_fkey";

-- AlterTable
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_pkey",
DROP COLUMN "creadoEn",
DROP COLUMN "id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "fecha" TEXT NOT NULL,
ADD COLUMN     "metodoPagoID" INTEGER,
ADD COLUMN     "usuarioID" INTEGER NOT NULL,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("ID");

-- DropTable
DROP TABLE "Accesorio";

-- DropTable
DROP TABLE "Celular";

-- DropTable
DROP TABLE "ItemPedido";

-- DropTable
DROP TABLE "ProductoGeneral";

-- DropTable
DROP TABLE "UsuarioAdmin";

-- CreateTable
CREATE TABLE "Categoria" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "DetalleCategoria" (
    "ID" SERIAL NOT NULL,
    "categoriaID" INTEGER NOT NULL,
    "nombre_atributo" TEXT NOT NULL,
    "tipo_dato" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,

    CONSTRAINT "DetalleCategoria_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Producto" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoriaID" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "marcaID" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ImagenProducto" (
    "ID" SERIAL NOT NULL,
    "productoID" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "orden" INTEGER,

    CONSTRAINT "ImagenProducto_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ProductoDetalle" (
    "ID" SERIAL NOT NULL,
    "productoID" INTEGER NOT NULL,
    "detallecategoriaID" INTEGER NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "ProductoDetalle_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Marca" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ProductoPromocion" (
    "ID" SERIAL NOT NULL,
    "productoID" INTEGER NOT NULL,
    "promocionID" INTEGER NOT NULL,

    CONSTRAINT "ProductoPromocion_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Promocion" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL,
    "codigo_promocional" TEXT NOT NULL,
    "inicio_promocion" TEXT NOT NULL,
    "fin_promocion" TEXT NOT NULL,

    CONSTRAINT "Promocion_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "PedidoDetalle" (
    "ID" SERIAL NOT NULL,
    "productoID" INTEGER NOT NULL,
    "pedidoID" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PedidoDetalle_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Envio" (
    "ID" SERIAL NOT NULL,
    "pedidoID" INTEGER NOT NULL,
    "empresa" TEXT NOT NULL,
    "codigoSeguimiento" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_envio" TEXT NOT NULL,
    "fecha_entrega" TEXT NOT NULL,

    CONSTRAINT "Envio_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "MetodoPago" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "MetodoPago_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Comprobante" (
    "ID" SERIAL NOT NULL,
    "pedidoID" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,

    CONSTRAINT "Comprobante_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "ID" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "rolpermisoID" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "DNI" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Carrito" (
    "ID" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,

    CONSTRAINT "Carrito_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "CarritoItem" (
    "ID" SERIAL NOT NULL,
    "carritoID" INTEGER NOT NULL,
    "productoID" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "CarritoItem_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "ID" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,
    "productoID" INTEGER NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Reseña" (
    "ID" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,
    "productoID" INTEGER NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,

    CONSTRAINT "Reseña_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Rol" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "ID" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "RolPermiso" (
    "ID" SERIAL NOT NULL,
    "rolID" INTEGER NOT NULL,
    "permisoID" INTEGER NOT NULL,

    CONSTRAINT "RolPermiso_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Promocion_codigo_promocional_key" ON "Promocion"("codigo_promocional");

-- CreateIndex
CREATE UNIQUE INDEX "Envio_pedidoID_key" ON "Envio"("pedidoID");

-- CreateIndex
CREATE UNIQUE INDEX "Comprobante_pedidoID_key" ON "Comprobante"("pedidoID");

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_usuarioID_key" ON "Carrito"("usuarioID");

-- AddForeignKey
ALTER TABLE "DetalleCategoria" ADD CONSTRAINT "DetalleCategoria_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "Categoria"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "Categoria"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_marcaID_fkey" FOREIGN KEY ("marcaID") REFERENCES "Marca"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenProducto" ADD CONSTRAINT "ImagenProducto_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoDetalle" ADD CONSTRAINT "ProductoDetalle_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoDetalle" ADD CONSTRAINT "ProductoDetalle_detallecategoriaID_fkey" FOREIGN KEY ("detallecategoriaID") REFERENCES "DetalleCategoria"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoPromocion" ADD CONSTRAINT "ProductoPromocion_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoPromocion" ADD CONSTRAINT "ProductoPromocion_promocionID_fkey" FOREIGN KEY ("promocionID") REFERENCES "Promocion"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_metodoPagoID_fkey" FOREIGN KEY ("metodoPagoID") REFERENCES "MetodoPago"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoDetalle" ADD CONSTRAINT "PedidoDetalle_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoDetalle" ADD CONSTRAINT "PedidoDetalle_pedidoID_fkey" FOREIGN KEY ("pedidoID") REFERENCES "Pedido"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_pedidoID_fkey" FOREIGN KEY ("pedidoID") REFERENCES "Pedido"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comprobante" ADD CONSTRAINT "Comprobante_pedidoID_fkey" FOREIGN KEY ("pedidoID") REFERENCES "Pedido"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_rolpermisoID_fkey" FOREIGN KEY ("rolpermisoID") REFERENCES "RolPermiso"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarritoItem" ADD CONSTRAINT "CarritoItem_carritoID_fkey" FOREIGN KEY ("carritoID") REFERENCES "Carrito"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarritoItem" ADD CONSTRAINT "CarritoItem_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolPermiso" ADD CONSTRAINT "RolPermiso_rolID_fkey" FOREIGN KEY ("rolID") REFERENCES "Rol"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolPermiso" ADD CONSTRAINT "RolPermiso_permisoID_fkey" FOREIGN KEY ("permisoID") REFERENCES "Permiso"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
