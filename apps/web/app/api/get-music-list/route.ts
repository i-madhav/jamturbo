import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {roomid} = body;
        if (!roomid) {
            return NextResponse.json({ error: "UnAppropriate RoomId" });
        }
        const response = await prisma.music.findMany({
            where: {
                roomId: roomid
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