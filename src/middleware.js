import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "1cdd1698-b926-498d-8d4a-69adb7c2f083");
  requestHeaders.set("x-createxyz-project-group-id", "a09ff620-e1a0-42ae-ba89-e2ec80db0c7e");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}