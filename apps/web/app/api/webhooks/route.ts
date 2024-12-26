import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request){
  const prisma = new PrismaClient();
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const wh = new Webhook(SIGNING_SECRET);
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');
  if (!svix_id || !svix_timestamp || !svix_signature){
    return new Response('Error: Missing Svix headers', {status: 400});
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error',{status: 400})
  }

  //const { id } = evt.data;
  const eventType = evt.type;
  if(eventType === "user.created"){
    const response = await prisma.user.create({data:{clerkUserId:evt.data.id,email:evt.data.email_addresses[0]!.email_address}})
    if(response){
        console.log("User is created successfully");
        console.log(response);
    }}

  return new Response('Webhook received', { status: 200 });
}