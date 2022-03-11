/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images')

const nextConfig = {
  images: {
    loader: 'custom',
  },
}

module.exports = withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
  reactStrictMode: true,
})
