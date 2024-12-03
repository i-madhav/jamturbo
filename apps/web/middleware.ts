import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up", "/"]);
const isPublicApiRoute = createRouteMatcher(["/api/create-room", "/api/browse-room", "/api/room",  "/api/webhooks/:splat*"]);

export default clerkMiddleware(async (auth, request) => {
  try {
    const { userId } = await auth();
    if (!request?.url) {
      console.error("Request URL is undefined");
      return NextResponse.next();
    }

    if (userId && isPublicRoute(request)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }


    if (!userId) {
      if (!isPublicApiRoute(request) && !isPublicRoute(request)) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always apply middleware for API routes
    '/(api|trpc)(.*)',
  ],
};