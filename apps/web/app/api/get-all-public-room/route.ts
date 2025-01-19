import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
    const prisma = new PrismaClient();

    try {
        const response = await prisma.room.findMany({
            where: {
                isPrivate: false,
            },
        });

        if (!response || response.length === 0) {
            return NextResponse.json(
                { status: 404, error: "No public rooms found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ status: 200, res: response });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { status: 500, error: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}