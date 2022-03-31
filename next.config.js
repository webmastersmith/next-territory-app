/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

//only uncomment for github
// also change BUILD_TYPE in .env
module.exports = {
  reactStrictMode: true,
  trailingSlash: true, //allows .html to append to end of links. Remove for github.
  // basePath: isProd ? '/next-territory-app' : '',
  // // must have trailing slash
  // assetPrefix: isProd ? '/next-territory-app/' : '',
}
