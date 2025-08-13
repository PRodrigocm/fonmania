import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const marcas = await prisma.marca.findMany({
      orderBy: {
        nombre: "asc"
      }
    });

    return NextResponse.json(marcas);
  } catch (error) {
    console.error("Error obteniendo marcas:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
