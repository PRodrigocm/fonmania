/*
  Warnings:

  - You are about to drop the `Carrito` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarritoItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comprobante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reseña` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "CarritoItem" DROP CONSTRAINT "CarritoItem_carritoID_fkey";

-- DropForeignKey
ALTER TABLE "CarritoItem" DROP CONSTRAINT "CarritoItem_productoID_fkey";

-- DropForeignKey
ALTER TABLE "Comprobante" DROP CONSTRAINT "Comprobante_pedidoID_fkey";

-- DropForeignKey
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_productoID_fkey";

-- DropForeignKey
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_usuarioID_fkey";

-- DropTable
DROP TABLE "Carrito";

-- DropTable
DROP TABLE "CarritoItem";

-- DropTable
DROP TABLE "Comprobante";

-- DropTable
DROP TABLE "Reseña";
