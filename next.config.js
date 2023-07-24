/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: 'https://mooddddd.github.io/',
  images: {
    domains: ['127.0.0.1', 'localhost', 'mooddddd.github.io'],
  },
};

module.exports = nextConfig;
