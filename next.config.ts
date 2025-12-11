// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/business-website' : '',
  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;