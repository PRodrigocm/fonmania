/*
  Warnings:

  - You are about to drop the `DetalleCategoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductoDetalle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `almacenamiento` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensiones` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sistema_operativo` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DetalleCategoria" DROP CONSTRAINT "DetalleCategoria_categoriaID_fkey";

-- DropForeignKey
ALTER TABLE "ProductoDetalle" DROP CONSTRAINT "ProductoDetalle_detallecategoriaID_fkey";

-- DropForeignKey
ALTER TABLE "ProductoDetalle" DROP CONSTRAINT "ProductoDetalle_productoID_fkey";

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "almacenamiento" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "dimensiones" TEXT NOT NULL,
ADD COLUMN     "modelo" TEXT NOT NULL,
ADD COLUMN     "ram" TEXT NOT NULL,
ADD COLUMN     "sistema_operativo" TEXT NOT NULL;

-- DropTable
DROP TABLE "DetalleCategoria";

-- DropTable
DROP TABLE "ProductoDetalle";
