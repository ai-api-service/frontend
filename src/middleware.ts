import { NextResponse } from 'next/server'
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'

// withAuth를 사용하여 미들웨어 래핑
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log('Middleware executing for path:', request.nextUrl.pathname)
    console.log('Token:', request.nextauth.token)

    // 토큰이 없으면 로그인 페이지로 리다이렉션
    if (!request.nextauth.token) {
      const url = new URL('/login', request.url)
      url.searchParams.set('callbackUrl', request.url)
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    // 보호하려는 경로 지정
    '/',
    '/hello',
    '/profile',
    // 추가 경로들...
  ]
}