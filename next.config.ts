import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    minimumCacheTTL: 60,

    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    ppr: 'incremental' // The 'incremental' value allows you to adopt PPR for specific routes.
  }
  /* config options here */
};

export default nextConfig;
