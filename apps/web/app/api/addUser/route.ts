import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export default async function POST(request: NextRequest) {
    const prisma = new PrismaClient();
    
    try {
        const body = await request.json();
        const { roomId, userEmail } = body;

        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: {
                email: userEmail,
            },
        });

        if (!user) {
            return NextResponse.json({ status: 404, response: "User not found" });
        }

        const id = user.clerkUserId;
        const room = await prisma.room.update({
            where: {
                id: roomId,
            },
            data: {
                shareWith: {
                    push: id,
                },
            },
        });
        if (!room) {
            return NextResponse.json({ status: 404, response: "Room not found" });
        }

        return NextResponse.json({ status: 200, response: "User added to room successfully", room });

    } catch (error) {
        console.error("Error updating room:", error);
        return NextResponse.json({ status: 500, response: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}