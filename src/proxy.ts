import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log("--- MIDDLEWARE EXECUTING ---");
  console.log("Current Path:", request.nextUrl.pathname);
  const authCookie = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  if (authCookie && (pathname === "/" || pathname === "/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!authCookie && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*", "/login"],
};
