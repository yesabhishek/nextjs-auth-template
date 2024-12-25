// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./auth"

export async function middleware(request: NextRequest) {
    const session = await auth()
    const isLoggedIn = !!session
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

    // If the user is logged in and trying to access auth pages,
    // redirect them to dashboard
    if (isLoggedIn && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // If the user is not logged in and trying to access protected routes,
    // redirect them to sign-in
    if (!isLoggedIn && !isAuthPage) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    }

    // Allow all other cases
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public (public files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
}