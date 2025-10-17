// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Don’t fail the production build on ESLint errors
    ignoreDuringBuilds: true,
  },
  // Optional: keeps <img> working without optimization while you refactor
  images: { unoptimized: true },
};

export default nextConfig;
