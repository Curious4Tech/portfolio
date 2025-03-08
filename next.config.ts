import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from localhost for development
    domains: ['localhost'],
    
    // Allow images from any HTTPS source
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any hostname
      },
    ],
  },
  
  reactStrictMode: true,
  // You can add more Next.js configuration options here
};

export default nextConfig;