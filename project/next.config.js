/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats when supported; PNG will be converted at runtime
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

