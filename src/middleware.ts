import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("Middleware: Токен найден?", token);

  if (token && request.nextUrl.pathname === "/") {
    console.log("Middleware: Редирект на /service");
    return NextResponse.redirect(new URL("/service", request.url));
  }

  if (!token && !["/", "/register", "/login"].includes(request.nextUrl.pathname)) {
    console.log("Middleware: Нет токена, редирект на /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/service", "/cv-evaluation-scale", "/report/:path*"],
};