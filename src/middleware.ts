import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const protectedPaths = ['/dashboard', '/admin']
  const isProtected = protectedPaths.some(path => pathname.startsWith(path))

  if (isProtected) {
    const session = request.cookies.get('sb-access-token') || request.cookies.get('sb-localhost-access-token')

    if (!session) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
