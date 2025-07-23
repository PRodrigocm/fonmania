/*
  Warnings:

  - You are about to drop the column `productoId` on the `ImagenProducto` table. All the data in the column will be lost.
  - You are about to drop the column `productoId` on the `ItemPedido` table. All the data in the column will be lost.
  - You are about to drop the `Producto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productoGeneralId` to the `ImagenProducto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productoGeneralId` to the `ItemPedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ImagenProducto" DROP CONSTRAINT "ImagenProducto_productoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemPedido" DROP CONSTRAINT "ItemPedido_productoId_fkey";

-- AlterTable
ALTER TABLE "ImagenProducto" DROP COLUMN "productoId",
ADD COLUMN     "productoGeneralId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ItemPedido" DROP COLUMN "productoId",
ADD COLUMN     "productoGeneralId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Producto";

-- CreateTable
CREATE TABLE "ProductoGeneral" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "celularId" INTEGER,
    "accesorioId" INTEGER,

    CONSTRAINT "ProductoGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Celular" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "marca" TEXT,
    "capacidad" TEXT,
    "color" TEXT,
    "modelo" TEXT,
    "pantalla" TEXT,
    "bateria" TEXT,
    "almacenamiento" TEXT,
    "ram" TEXT,
    "camara" TEXT,
    "puertoCarga" TEXT,
    "precioPromocion" DOUBLE PRECISION,
    "precioDescuento" DOUBLE PRECISION,
    "textoPromocion" TEXT,
    "imagenes" JSONB,

    CONSTRAINT "Celular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accesorio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT,
    "detalles" TEXT,
    "compatibilidad" TEXT,
    "dimensiones" TEXT,
    "peso" TEXT,
    "colores" TEXT,
    "precioPromocion" DOUBLE PRECISION,
    "precioDescuento" DOUBLE PRECISION,
    "textoPromocion" TEXT,
    "imagenes" JSONB,

    CONSTRAINT "Accesorio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductoGeneral_celularId_key" ON "ProductoGeneral"("celularId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductoGeneral_accesorioId_key" ON "ProductoGeneral"("accesorioId");

-- AddForeignKey
ALTER TABLE "ProductoGeneral" ADD CONSTRAINT "ProductoGeneral_celularId_fkey" FOREIGN KEY ("celularId") REFERENCES "Celular"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoGeneral" ADD CONSTRAINT "ProductoGeneral_accesorioId_fkey" FOREIGN KEY ("accesorioId") REFERENCES "Accesorio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenProducto" ADD CONSTRAINT "ImagenProducto_productoGeneralId_fkey" FOREIGN KEY ("productoGeneralId") REFERENCES "ProductoGeneral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_productoGeneralId_fkey" FOREIGN KEY ("productoGeneralId") REFERENCES "ProductoGeneral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
