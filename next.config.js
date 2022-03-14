/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: isProd
    ? 'https://webmastersmith.github.io/next-territory-app/'
    : '',
}
