-- CreateTable
CREATE TABLE "Resena" (
    "ID" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,
    "productoID" INTEGER NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Resena_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Actividad" (
    "ID" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "entidad" TEXT,
    "usuarioID" INTEGER,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" TEXT,

    CONSTRAINT "Actividad_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resena_usuarioID_productoID_key" ON "Resena"("usuarioID", "productoID");

-- AddForeignKey
ALTER TABLE "Resena" ADD CONSTRAINT "Resena_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resena" ADD CONSTRAINT "Resena_productoID_fkey" FOREIGN KEY ("productoID") REFERENCES "Producto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actividad" ADD CONSTRAINT "Actividad_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
