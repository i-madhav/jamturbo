import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { roomId, userId } = data;
        console.log(data);
        const response = await prisma.room.findFirst({
            where: { id: roomId }
        });

        if (response == null) {
            return NextResponse.json({
                redirectTo: '/dashboard',
                success: true
            });
        }

        if (response?.isPrivate) {
            const haveAccess = response.shareWith.some((user) => user == userId);
            const isOwner = response.ownerId == userId;
            if (!haveAccess && !isOwner) {
                return NextResponse.json({
                    redirectTo: '/dashboard',
                    success: true
                });
            } else {
                return NextResponse.json({
                    redirectTo: `/room/${roomId}`,
                    success: true
                });
            }
        } else {
            return NextResponse.json({
                redirectTo: `/room/${roomId}`,
                success: true
            });
        }

    } catch (error) {
        return NextResponse.json({ error });
    }
}