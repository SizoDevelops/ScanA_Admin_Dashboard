export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/settings/:path*", "/members/:path*", "/absentees", "/updates", "/dashboard", "/help", "/excel-files"],
};