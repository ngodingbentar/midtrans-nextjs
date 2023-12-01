/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/base/:path*',
        destination: `${API_URL}/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
