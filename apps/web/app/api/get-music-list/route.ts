import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomid");
        if (!roomId) {
            return NextResponse.json({ error: "UnAppropriate RoomId" });
        }
        const response = await prisma.music.findMany({
            where: {
                roomId: roomId
            }
        });
        if (!response) {
            return NextResponse.json({ error: "No Music List Found" });
        }

        return NextResponse.json({ res: response });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}