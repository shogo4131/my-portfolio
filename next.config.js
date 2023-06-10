/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
