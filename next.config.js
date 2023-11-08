/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      port: '',
      pathname: '/**',
    },
  ],
},
// https://github.com/vercel/next.js/discussions/20991#discussioncomment-7166243
async headers() {
  return [{
      source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|mp4|ttf|otf|woff|woff2)',
      headers: [{
          key: 'cache-control',
          value: 'public, max-age=31536000, immutable'
      }]
  }];
}}

module.exports = nextConfig
