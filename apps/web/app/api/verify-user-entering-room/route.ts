import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { roomId , userId} = data;
        const response = await prisma.room.findFirst({
            where: {
                id: roomId,
            }
        });
        if (!response) {
            return NextResponse.json({ error: "The room you are trying to access doesn't exist" })
        }
        if (response.isPrivate) {
            const haveAccess = response.shareWith.some((item) => item == userId)
            const isOwner = (userId == response.ownerId);
            if (!haveAccess && !isOwner) {
                return NextResponse.json({
                    redirect: "/dashboard",
                    success: true
                })
            }
        }
        if(response.isPrivate == false){
            return NextResponse.json({status:200,isPublicRoom:true});
        }else{
            return NextResponse.json({status:200,isPrivateRoom:true});
        }
        
    } catch (error) {
        return NextResponse.json(error);
    }
}