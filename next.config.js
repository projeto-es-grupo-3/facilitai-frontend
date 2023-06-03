/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACK_END_HOST: process.env.BACK_END_HOST,
  }
}

module.exports = nextConfig
