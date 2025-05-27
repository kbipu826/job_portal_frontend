import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { USER_TYPE_ID } from "@/lib/constants";

// Define public routes that don't require authentication
const publicRoutes = [
  "/", 
  "/sign-in", 
  "/about",
  "/sign-up",
  "/contact",
  "/jobs"
];

// Define role-specific routes
const candidateRoutes = ["/candidate-dashboard"];
const employerRoutes = ["/employee-dashboard"];

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public/).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => pathname === route);

  // Handle authenticated users
  if (token) {
    const userType = (token.user as any).user_type_id;

    // Check role-specific route access
    const isCandidateRoute = candidateRoutes.some(route => pathname.startsWith(route));
    const isEmployerRoute = employerRoutes.some(route => pathname.startsWith(route));

    if (isCandidateRoute && userType !== USER_TYPE_ID.CANDIDATE) {
      return NextResponse.redirect(new URL("/employee-dashboard", request.url));
    }

    if (isEmployerRoute && userType !== USER_TYPE_ID.EMPLOYER) {
      return NextResponse.redirect(new URL("/candidate-dashboard", request.url));
    }

    // If user is authenticated and trying to access public routes, redirect to appropriate dashboard
    if (isPublicRoute && pathname === "/") {
      if (userType === USER_TYPE_ID.CANDIDATE) {
        return NextResponse.redirect(new URL("/candidate-dashboard", request.url));
      } else if (userType === USER_TYPE_ID.EMPLOYER) {
        return NextResponse.redirect(new URL("/employee-dashboard", request.url));
      }
    }
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!token && !isPublicRoute) {
    const signInUrl = new URL("/", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}