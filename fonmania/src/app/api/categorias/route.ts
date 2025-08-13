import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        nombre: "asc"
      }
    });

    return NextResponse.json(categorias);
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
