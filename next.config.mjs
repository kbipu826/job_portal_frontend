/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'job-portal-frontend-re82.vercel.app'],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { jquery: 'jQuery' }];
    return config;
  },
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Configure which pages should be static
  async generateStaticParams() {
    return {
      '/': {},
      '/about': {},
      '/contact': {},
      '/jobs': {},
      '/job-detail': {},
    };
  },
  // Configure page generation
  async generatePage() {
    return {
      static: true,
      dynamic: false,
    };
  },
};

export default nextConfig;
