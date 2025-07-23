/*
  Warnings:

  - You are about to drop the column `imagenes` on the `Accesorio` table. All the data in the column will be lost.
  - You are about to drop the column `capacidad` on the `Celular` table. All the data in the column will be lost.
  - You are about to drop the column `imagenes` on the `Celular` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Accesorio" DROP COLUMN "imagenes";

-- AlterTable
ALTER TABLE "Celular" DROP COLUMN "capacidad",
DROP COLUMN "imagenes";
