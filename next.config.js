/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  /**
   * Static HTML is written to `dist/` instead of `out/`. Next still builds into `.next` internally.
   * Helps avoid Windows EBUSY when `out/` is locked by Explorer or another process.
   */
  distDir: 'dist',
  /** Emit `fr/index.html` so `/fr/` serves the page (not a directory listing) on static hosts. */
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
