import { NextRequest, NextResponse } from "next/server";

const locales = ['nb', 'en']
const defaultLocale = 'nb'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1️⃣ Locale Handling Middleware
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
        if (pathname.startsWith('/studio') || pathname.startsWith('/_next')) {
            return NextResponse.next();
        }

        const locale = defaultLocale;
        request.nextUrl.pathname = `/${locale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }

    // 2️⃣ Header Manipulation Middleware
    const headers = new Headers(request.headers);
    headers.set("x-url", request.nextUrl.pathname);
    return NextResponse.next({ headers });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};