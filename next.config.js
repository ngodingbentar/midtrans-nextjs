/** @type {import('next').NextConfig} */
const URL = process.env.API_URL
const BE = process.env.API_BE

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/base/:path*',
        destination: `${URL}/:path*`,
      },
      {
        source: '/be/:path*',
        destination: `${BE}/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
