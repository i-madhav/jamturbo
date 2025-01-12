import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
function extractYouTubeVideoID(url: string): string | null {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname === 'www.youtube.com' || parsedUrl.hostname === 'youtube.com') {
            return parsedUrl.searchParams.get('v');
        }
        if (parsedUrl.hostname === 'youtu.be') {
            return parsedUrl.pathname.slice(1);
        }
        return null;
    } catch (error) {
        return null;
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { link, roomId } = body;

        if (!link || !roomId) {
            return NextResponse.json(
                { error: "Both 'link' and 'roomId' fields are required." },
                { status: 400 }
            );
        }

        const videoId = extractYouTubeVideoID(link);


        if (!videoId) {
            return NextResponse.json(
                { error: "Invalid YouTube URL. Unable to extract video ID." },
                { status: 400 }
            );
        }

        const maxOrderResult = await prisma.music.aggregate({
            _max: { order: true },
            where: { roomId: roomId }
        });
        const newOrder = (maxOrderResult._max.order ?? -1) + 1;

        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=AIzaSyCYiHl9TFomp9Xl7aLNktl6X4vWfEohmlk`);
        if (!res.ok) {
            return NextResponse.json(
                { error: "Something went wrong" },
                { status: 404 }
            )
        }
        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            return NextResponse.json(
                { error: "No video found for the provided ID." },
                { status: 404 }
            );
        }

        const id = data.items[0].id;
        const channelName = data.items[0].snippet.channelTitle
        const videoTitle = data.items[0].snippet.localized.title
        const videoImage = data.items[0].snippet.thumbnails.default.url


        const newMusic = await prisma.music.create({
            data: {
                videoId: id,
                channelName: channelName,
                videoTitle: videoTitle,
                videoImage: videoImage,
                roomId: roomId,
                order: newOrder
            }
        });

        return NextResponse.json(newMusic, { status: 200 });
    } catch (error) {
        console.error("Error in POST /api/room:", error);
        return NextResponse.json(
            { error: "Internal Server Error." },
            { status: 500 }
        );
    }finally{
        await prisma.$disconnect();
    }
}