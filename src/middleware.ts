import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);
const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, redirectToSignIn, orgId } = await auth();

  if (!userId && !isPublicRoute(req)) return redirectToSignIn({ returnBackUrl: req.url });

  if (userId && !isPublicRoute(req)) return NextResponse.next();

  if (userId && isPublicRoute(req)) {
    let path = '/select-org';

    if (orgId) {
      path = `/organization/${orgId}`;
    }

    const orgSelection = new URL(path, req.url);

    return NextResponse.redirect(orgSelection);
  }

  if (userId && !orgId && req.nextUrl.pathname !== '/select-org') {
    const orgSelection = new URL('/select-org', req.url);

    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ['/dashboard(.*)', '/', '/api/(.*)', '/trpc/(.*)'],
};
