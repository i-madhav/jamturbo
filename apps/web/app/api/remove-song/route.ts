import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { musicId, roomid } = body;
        if (!musicId) {
            return NextResponse.json({
                status: 404,
                response: "Link not found"
            })
        }

        const response = await prisma.music.delete({
            where: {
                id: musicId,
                roomId: roomid
            }
        });

        if (response) {
            return NextResponse.json({ status: 200, response: "Deleted Song Successfully" });
        }
    } catch (error) {
        console.error("Error in POST /api/remove-song", error);
        return NextResponse.json(
            { error: "Internal Server Error." },
            { status: 500 }
        );
    }
}