import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { title, description, isPrivate , owner} = data;
        const room = await prisma.room.findMany({
            where:{
                ownerId:owner
            }
        });

        // if(room.length > 2){
        //     return NextResponse.json({status:400,response:{
        //         direct:"/popup",
        //         reason:"Subscribe in order to create more room"
        //     }});
        // }

        const response = await prisma.room.create({
            data: {
                title,
                description,
                isPrivate: isPrivate,
                ownerId:owner
            }
        });

        if(response.id == undefined || !response){
            return NextResponse.json({error:"Your Clerk Id do not exist man"})
        }
        console.log(response);
        return NextResponse.json({response});
    } catch (error) {
        return NextResponse.json({ error});
    }
}