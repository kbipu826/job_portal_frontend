// Define which routes should be static
export const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/jobs',
  '/job-detail'
];

// Define which routes should be dynamic
export const dynamicRoutes = [
  '/candidate-dashboard',
  '/employee-dashboard',
  '/candidate-profile',
  '/login',
  '/signup',
  '/api/auth'
];

// Helper function to check if a route should be static
export function isStaticRoute(path: string): boolean {
  return staticRoutes.includes(path);
}

// Helper function to check if a route should be dynamic
export function isDynamicRoute(path: string): boolean {
  return dynamicRoutes.includes(path);
} 