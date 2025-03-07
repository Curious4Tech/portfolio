/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://curios4tech-portfolio-fsgyfkfuf6cbb3cg.canadacentral-01.azurewebsites.net',
  },
  poweredByHeader: false,
  generateEtags: true,
  // Add specific Azure configurations
  experimental: {
    serverActions: true,
  },
  // Configure headers for better security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
