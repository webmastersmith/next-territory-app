/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

//only uncomment for github
// also change BUILD_TYPE in .env
module.exports = {
  reactStrictMode: true,
  // basePath: isProd ? '/next-territory-app' : '',
  // // must have trailing slash
  // assetPrefix: isProd ? '/next-territory-app/' : '',
}
