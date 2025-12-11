// next.config.js
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '', // Explicitly set to empty for root domain
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
