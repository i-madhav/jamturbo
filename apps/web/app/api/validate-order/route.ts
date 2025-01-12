import { NextResponse , NextRequest } from "next/server";
import { createHmac } from "crypto";
export async function POST(request:NextRequest) {
    try {
        // we need here 3 things
        // razorpay_order_id
        // razorpay_payment_id
        // razorpay_signature
        const body = await request.json();
        const {razorpay_order_id , razorpay_payment_id , razorpay_signature} = body;

        const sha = createHmac("sha256",process.env.RAZORPAY_KEY_SECRET!);
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = sha.digest("hex");
        if(digest !== razorpay_signature){
            return NextResponse.json({status:400 , response:"payment is invalis"});
        }
        return NextResponse.json({status:200 , response:{
            msg:"success",
            orderId:razorpay_order_id,
            payment_id:razorpay_payment_id
        }});
    } catch (error) {
        
    }
}