/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/next-territory-app' : '',
  // must have trailing slash
  assetPrefix: isProd ? '/next-territory-app/' : '',
}
