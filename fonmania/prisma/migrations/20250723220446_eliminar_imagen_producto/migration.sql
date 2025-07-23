/*
  Warnings:

  - You are about to drop the `ImagenProducto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImagenProducto" DROP CONSTRAINT "ImagenProducto_productoGeneralId_fkey";

-- DropTable
DROP TABLE "ImagenProducto";
