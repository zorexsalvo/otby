/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "cdn.discordapp.com"],
  },
  env: {
    NEXT_PUBLIC_DATA: process.env.NEXT_PUBLIC_DATA,
  }
};

module.exports = nextConfig;
