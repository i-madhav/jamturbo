import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
    try {
        const prisma = new PrismaClient();
        const response = await prisma.room.findMany({
            where: {
                isPrivate: false
            }
        });
        if(!response){
            return NextResponse.json({status:404 , error:"unable to find all the public rooms"});
        }
        return NextResponse.json({status:200,res:response})
    } catch (error) {
        console.error(error);
    }
}