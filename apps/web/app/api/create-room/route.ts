import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { title, description, isPrivate , owner} = data;
        const response = await prisma.room.create({
            data: {
                title,
                description,
                isPrivate: isPrivate,
                ownerId:owner
            }
        });

        return NextResponse.json({response});
    } catch (error) {
        return NextResponse.json({ error});
    }
}