import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://curios4tech-portfolio-fsgyfkfuf6cbb3cg.canadacentral-01.azurewebsites.net',
  },
  // Add these configurations for Azure
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
