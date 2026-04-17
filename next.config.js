/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
