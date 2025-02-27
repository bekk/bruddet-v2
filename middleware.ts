import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// Create next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  // Redirect /nb and /nb/* to root or corresponding path without /nb
  if (pathname.startsWith("/nb")) {
    const newPath = pathname.replace(/^\/nb/, "") || "/";
    return NextResponse.redirect(new URL(newPath, origin));
  }

  // Use next-intl middleware for other cases
  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(nb|en)/:path*", "/((?!api|_next|studio|.*\\..*).*)"],
};
