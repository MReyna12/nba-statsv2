/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nba-team.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
