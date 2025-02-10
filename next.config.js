/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  basePath: "/landing",
  trailingSlash: true,
};

module.exports = nextConfig;
