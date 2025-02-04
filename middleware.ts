import { NextRequest, NextResponse } from "next/server";

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['nb', 'en']
let defaultLocale = 'nb'


function getLocale(request: NextRequest): string | null {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value
    })
    const negotiator = new Negotiator({ headers: negotiatorHeaders })
    const acceptLanguage = negotiator.language(locales)
    return acceptLanguage ?? null
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // if the path starts with studio, we don't want to redirect
    if (
        pathname.startsWith('/studio') || 
        pathname.startsWith('/_next')) return

    // Redirect if there is no locale
    // const locale = getLocale(request)
    const locale = defaultLocale
    console.log("MR LOCALKE", locale)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}