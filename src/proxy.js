import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
export const config = {
  matcher: ["/user/:path*"],
};
