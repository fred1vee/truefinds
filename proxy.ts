import { NextResponse, type NextRequest } from "next/server";

import { auth } from "@/lib/auth";
import {
  createLoginURL,
  getSafeCallbackURL,
} from "@/lib/auth-callback";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (session) {
    return NextResponse.next();
  }

  const requestedPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const callbackURL = getSafeCallbackURL(requestedPath) ?? "/";

  return NextResponse.redirect(
    new URL(createLoginURL(callbackURL), request.url),
  );
}

export const config = {
  matcher: [
    "/spreadsheet/:path*",
    "/tools/:path*",
    "/favorites/:path*",
    "/tutorial/:path*",
    "/profile/:path*",
  ],
};
