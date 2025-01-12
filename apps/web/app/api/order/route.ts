import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: NextRequest){
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY_ID!,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        const options = await request.json();
        const order = await razorpay.orders.create(options);
        if (!order) {
            return NextResponse.json({ status: 500, response: "Internal Server Error" });
        }
        return NextResponse.json({ status: 200, response: order });
    } catch (error) {
        console.error(error);
    }
}