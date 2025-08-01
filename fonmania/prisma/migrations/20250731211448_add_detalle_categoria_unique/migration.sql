/*
  Warnings:

  - A unique constraint covering the columns `[categoriaID,nombre_atributo]` on the table `DetalleCategoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DetalleCategoria_categoriaID_nombre_atributo_key" ON "DetalleCategoria"("categoriaID", "nombre_atributo");
