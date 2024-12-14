import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { link, roomId } = body;

        const maxOrder = await prisma.music.aggregate({
            _max:{order:true},
            where:{roomId:roomId}
        });

        // here if maxOrder comes out to be null ?? helps to fall new order value to be -1 , so that client side doesn't infer any error
        const newOrder = (maxOrder._max.order ?? -1) + 1;
        const response = await prisma.music.create({
            data: {
                url: link,
                roomId: roomId,
                order:newOrder
            }
        });
        if(!response){
            return NextResponse.json({error:"Unable to submit your provided link"});
        }
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(error);
    }
}