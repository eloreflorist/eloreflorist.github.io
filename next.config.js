// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - you'll need to set this when deploying
  // basePath: process.env.NODE_ENV === 'production' ? '/elore' : '',
  trailingSlash: false,
}

module.exports = nextConfig