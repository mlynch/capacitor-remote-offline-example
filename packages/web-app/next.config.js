/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dynamicStartUrl: false,
  dest: 'public'
});

const nextConfig = withPWA({
  reactStrictMode: true,
})

module.exports = nextConfig
